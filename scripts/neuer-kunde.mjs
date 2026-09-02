#!/usr/bin/env node
/**
 * Legt einen neuen Kunden an: Ordner, Konfigvorlage, Bilderordner, Notizen.
 *
 *   node scripts/neuer-kunde.mjs salon-mueller
 *   node scripts/neuer-kunde.mjs salon-mueller --vorschau
 *
 * --vorschau markiert den Ordner als Lead-Vorschau (noch kein Kunde):
 * Die Konfig bekommt einen Hinweis, dass die Daten aus öffentlichen
 * Quellen stammen und die Fotos noch fehlen.
 *
 * Danach: kunden/<slug>/salon.json ausfüllen, Fotos nach
 * kunden/<slug>/images/, dann bauen mit
 *
 *   cd template && SITE=<slug> npm run build
 */
import { mkdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const WURZEL = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const KUNDEN = join(WURZEL, "kunden");

const args = process.argv.slice(2);
const slug = args.find((a) => !a.startsWith("-"));
const istVorschau = args.includes("--vorschau");

if (!slug) {
  console.error(`
Kein Name angegeben.

  node scripts/neuer-kunde.mjs <slug> [--vorschau]

Der Slug ist der Ordnername und später Teil der Vorschau-Adresse.
Kleinbuchstaben, Bindestriche, keine Umlaute — z. B. "salon-mueller".
`);
  process.exit(1);
}

if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error(
    `\n"${slug}" taugt nicht als Slug.\n` +
      `Erlaubt sind Kleinbuchstaben, Ziffern und Bindestriche — z. B. "salon-mueller".\n`
  );
  process.exit(1);
}

const ordner = join(KUNDEN, slug);
if (existsSync(ordner)) {
  console.error(`\nkunden/${slug}/ gibt es schon. Nichts geändert.\n`);
  process.exit(1);
}

// Die Vorlage entsteht aus dem Demo-Salon: so bleibt sie automatisch
// aktuell, wenn das Schema wächst — statt an zwei Stellen gepflegt zu werden.
const demo = JSON.parse(readFileSync(join(KUNDEN, "_demo", "salon.json"), "utf8"));

const leer = (wert) =>
  Array.isArray(wert)
    ? []
    : wert && typeof wert === "object"
      ? Object.fromEntries(Object.entries(wert).map(([k, v]) => [k, leer(v)]))
      : typeof wert === "number"
        ? 0
        : typeof wert === "boolean"
          ? wert
          : "";

const neu = {
  ...leer(demo),
  branche: "friseur",
  theme: "klar",
  termin: { typ: "telefon", url: "", hinweis: "" },
  oeffnungszeiten: demo.oeffnungszeiten.map((z) => ({ tag: z.tag, zeit: "" })),
  leistungen: demo.leistungen.map((g) => ({ gruppe: g.gruppe, posten: [{ name: "", preis: "" }] })),
  team: [],
  galerie: [],
  sektionen: { ...demo.sektionen },
  impressum: {
    inhaber: "",
    rechtsform: "Einzelunternehmen",
    ustIdNr: "",
    handwerkskammer: "Handwerkskammer für München und Oberbayern",
    berufsbezeichnung: "Friseurmeister/in",
    berufsordnung: "Handwerksordnung (HwO), einzusehen unter www.gesetze-im-internet.de/hwo",
    verliehenIn: "Deutschland",
  },
};

delete neu._hinweis;

if (istVorschau) {
  neu._vorschau = true;
  neu._hinweis =
    "Lead-Vorschau, noch kein Kunde. Daten aus öffentlichen Quellen (Google-Profil). " +
    "Fotos sind Platzhalter. Nicht indexieren, nicht auf eine eigene Domain legen.";
}

mkdirSync(join(ordner, "images"), { recursive: true });
writeFileSync(join(ordner, "salon.json"), JSON.stringify(neu, null, 2) + "\n", "utf8");
writeFileSync(join(ordner, "images", ".gitkeep"), "", "utf8");

const heute = new Date().toLocaleDateString("de-DE");
writeFileSync(
  join(ordner, "notizen.md"),
  `# ${slug}\n\nAngelegt: ${heute}${istVorschau ? " (Lead-Vorschau)" : ""}\n\n` +
    `## Stand\n\n- [ ] Konfig ausgefüllt\n- [ ] Fotos da\n- [ ] Abnahme durch Kunden\n- [ ] Domain\n- [ ] Live\n\n` +
    `## Besonderheiten\n\n\n## Nächster Check\n\n`,
  "utf8"
);

console.log(`
Angelegt: kunden/${slug}/

  salon.json    ausfüllen — Pflichtfelder meldet der Build von selbst
  images/       Fotos hier ablegen
  notizen.md    Stand und Besonderheiten

Bauen und ansehen:

  cd template && SITE=${slug} npm run build && SITE=${slug} npm run preview
`);
