/**
 * Lädt und prüft die Konfiguration eines Kunden.
 *
 * Welcher Kunde gebaut wird, sagt die Umgebungsvariable SITE:
 *   SITE=_demo npm run build
 * Ohne SITE wird der Demo-Salon gebaut.
 *
 * Die Prüfung ist absichtlich streng und bricht den Build ab, statt eine
 * halbe Seite zu bauen. Grund: Ein fehlendes Impressumsfeld ist keine
 * Schönheitsfrage, sondern eine Ordnungswidrigkeit nach § 33 DDG — und
 * eine Seite ohne Telefonnummer ist für einen Friseursalon wertlos.
 */
import { readFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

/**
 * Wo die Kundenordner liegen.
 *
 * Nicht über import.meta.url: Astro bündelt diese Datei beim Bauen nach
 * dist/.prerender/chunks/, der Pfad relativ zur Quelldatei stimmt dann
 * nicht mehr. Stattdessen wird vom Arbeitsverzeichnis aus aufwärts
 * gesucht — das funktioniert beim Bauen aus template/ genauso wie aus
 * dem Repo-Wurzelverzeichnis.
 */
function findeKundenordner(): string {
  let ordner = process.cwd();
  for (let i = 0; i < 5; i++) {
    const kandidat = join(ordner, "kunden");
    if (existsSync(kandidat)) return kandidat;
    const hoeher = dirname(ordner);
    if (hoeher === ordner) break;
    ordner = hoeher;
  }
  throw new Error(
    `\n\nKein Ordner "kunden/" gefunden (gesucht ab ${process.cwd()} aufwärts).\n` +
      `Der Build muss aus dem Repo laufen, nicht aus einem kopierten template/-Ordner.\n`
  );
}

const KUNDEN = resolve(findeKundenordner());

export type ThemeName = "klar" | "warm" | "nacht";
export type TerminTyp = "link" | "telefon" | "whatsapp";

export interface Adresse {
  strasse: string;
  plz: string;
  ort: string;
  parkenHinweis?: string;
}

export interface Kontakt {
  /** Für tel:-Links, im Format +49… */
  telefon: string;
  /** Wie die Nummer auf der Seite steht. Fehlt sie, wird telefon gezeigt. */
  telefonAnzeige?: string;
  /** Für wa.me-Links, im Format +49… Leer = kein WhatsApp-Knopf. */
  whatsapp?: string;
  email: string;
}

export interface Leistungsgruppe {
  gruppe: string;
  posten: { name: string; preis: string }[];
}

export interface Oeffnungszeit {
  tag: string;
  zeit: string;
}

export interface Teammitglied {
  vorname: string;
  rolle: string;
  foto?: string;
}

export interface Bewertungen {
  sterne: number;
  anzahl: number;
  profilUrl: string;
  zitate: { vorname: string; datum: string; text: string }[];
}

export interface Impressum {
  inhaber: string;
  rechtsform: string;
  ustIdNr?: string;
  handwerkskammer: string;
  berufsbezeichnung: string;
  berufsordnung: string;
  verliehenIn?: string;
}

export interface Salon {
  branche: string;
  theme: ThemeName;
  domain: string;
  name: string;
  claim: string;
  /** Dateiname des Aufmacherfotos in kunden/<slug>/images/. Leer = Initiale. */
  heroFoto?: { datei: string; alt: string };
  /**
   * Wie der Aufmacher gebaut ist.
   *   "geteilt" – Text links, Bild rechts. Ruhig, viel Platz für Worte.
   *   "buehne"  – Foto über die volle Breite, Name mittig darüber, darunter
   *               breite Aktionsbalken. Wirkt wie ein Schaufenster.
   * Fehlt die Angabe, bestimmt das Theme den Stil.
   */
  heroStil?: "geteilt" | "buehne";
  /**
   * "schwarzweiss" legt alle Kundenfotos in Graustufen.
   *
   * Das ist keine Spielerei: Die Fotos kommen vom Handy, bei
   * unterschiedlichem Licht, an unterschiedlichen Tagen. In Farbe sieht
   * man jede Abweichung — in Graustufen wirken sie wie eine Serie. Ein
   * mittelmäßiges Foto wird dadurch nicht gut, aber die Seite wird ruhig.
   */
  fotoStil?: "farbe" | "schwarzweiss";
  adresse: Adresse;
  kontakt: Kontakt;
  social?: { instagram?: string; facebook?: string };
  termin: { typ: TerminTyp; url?: string; hinweis?: string };
  oeffnungszeiten: Oeffnungszeit[];
  leistungen: Leistungsgruppe[];
  ueberUns: string;
  team: Teammitglied[];
  galerie: { datei: string; alt: string }[];
  bewertungen?: Bewertungen;
  sektionen: Record<string, boolean>;
  aktuelles?: { titel: string; text: string };
  stellenangebot?: { titel: string; text: string };
  impressum: Impressum;
}

/** Der Bauabbruch. Die Meldung landet direkt in der Konsole. */
class KonfigFehler extends Error {
  constructor(slug: string, zeilen: string[]) {
    super(
      `\n\nDie Konfiguration von "${slug}" ist unvollständig:\n` +
        zeilen.map((z) => `  · ${z}`).join("\n") +
        `\n\nDatei: kunden/${slug}/salon.json\n`
    );
    this.name = "KonfigFehler";
  }
}

function fehlt(wert: unknown): boolean {
  return wert === undefined || wert === null || (typeof wert === "string" && wert.trim() === "");
}

const THEMES: ThemeName[] = ["klar", "warm", "nacht"];
const TERMIN_TYPEN: TerminTyp[] = ["link", "telefon", "whatsapp"];

function pruefe(slug: string, s: Salon): void {
  const f: string[] = [];

  if (fehlt(s.name)) f.push("name fehlt — ohne Salonnamen keine Seite.");
  if (fehlt(s.claim)) f.push("claim fehlt — ein Satz, der über dem Aufmacherfoto steht.");

  if (fehlt(s.adresse?.strasse)) f.push("adresse.strasse fehlt.");
  if (fehlt(s.adresse?.plz)) f.push("adresse.plz fehlt.");
  if (fehlt(s.adresse?.ort)) f.push("adresse.ort fehlt — der Ort steht in Titel und Überschrift, er trägt das lokale SEO.");

  if (fehlt(s.kontakt?.telefon)) {
    f.push("kontakt.telefon fehlt — die Telefonnummer ist der wichtigste Knopf der Seite.");
  } else if (!s.kontakt.telefon.startsWith("+")) {
    f.push(`kontakt.telefon muss international beginnen (+49…), ist aber "${s.kontakt.telefon}".`);
  }
  if (fehlt(s.kontakt?.email)) f.push("kontakt.email fehlt (Pflichtangabe im Impressum, § 5 DDG).");
  if (!fehlt(s.kontakt?.whatsapp) && !s.kontakt.whatsapp!.startsWith("+")) {
    f.push(`kontakt.whatsapp muss international beginnen (+49…), ist aber "${s.kontakt.whatsapp}".`);
  }

  if (!THEMES.includes(s.theme)) {
    f.push(`theme ist "${s.theme}" — erlaubt sind ${THEMES.join(", ")}.`);
  }

  if (!TERMIN_TYPEN.includes(s.termin?.typ)) {
    f.push(`termin.typ ist "${s.termin?.typ}" — erlaubt sind ${TERMIN_TYPEN.join(", ")}.`);
  } else if (s.termin.typ === "link" && fehlt(s.termin.url)) {
    f.push('termin.typ ist "link", aber termin.url ist leer.');
  } else if (s.termin.typ === "whatsapp" && fehlt(s.kontakt?.whatsapp)) {
    f.push('termin.typ ist "whatsapp", aber kontakt.whatsapp ist leer.');
  }

  if (!Array.isArray(s.oeffnungszeiten) || s.oeffnungszeiten.length === 0) {
    f.push("oeffnungszeiten fehlen — danach wird am häufigsten gesucht.");
  }

  if (s.sektionen?.leistungen !== false) {
    if (!Array.isArray(s.leistungen) || s.leistungen.length === 0) {
      f.push("leistungen fehlen, obwohl die Sektion an ist — Preise sind das, wonach Leute suchen.");
    } else {
      s.leistungen.forEach((g, i) => {
        if (fehlt(g.gruppe)) f.push(`leistungen[${i}].gruppe hat keinen Namen.`);
        if (!Array.isArray(g.posten) || g.posten.length === 0) {
          f.push(`leistungen[${i}] ("${g.gruppe}") hat keine Posten.`);
        }
      });
    }
  }

  if (s.sektionen?.ueberUns !== false && fehlt(s.ueberUns)) {
    f.push("ueberUns fehlt, obwohl die Sektion an ist.");
  }

  if (s.sektionen?.bewertungen === true) {
    if (!s.bewertungen) {
      f.push("bewertungen fehlen, obwohl die Sektion an ist.");
    } else if (fehlt(s.bewertungen.profilUrl)) {
      f.push("bewertungen.profilUrl fehlt — der Link aufs Google-Profil ist bei zitierten Bewertungen Pflicht.");
    }
  }

  // Impressum: hier wird nichts weggelassen.
  const imp = s.impressum ?? ({} as Impressum);
  if (fehlt(imp.inhaber)) f.push("impressum.inhaber fehlt (§ 5 DDG).");
  if (fehlt(imp.handwerkskammer)) f.push("impressum.handwerkskammer fehlt — bei zulassungspflichtigem Handwerk Pflicht.");
  if (fehlt(imp.berufsbezeichnung)) f.push("impressum.berufsbezeichnung fehlt (z. B. Friseurmeisterin).");
  if (fehlt(imp.berufsordnung)) f.push("impressum.berufsordnung fehlt (Handwerksordnung).");

  if (f.length > 0) throw new KonfigFehler(slug, f);
}

/** Der Slug des Kunden, der gerade gebaut wird. */
export const slug: string = process.env.SITE?.trim() || "_demo";

export function ladeSalon(welcher: string = slug): Salon {
  const datei = join(KUNDEN, welcher, "salon.json");
  if (!existsSync(datei)) {
    throw new Error(
      `\n\nKein Kunde "${welcher}" gefunden.\nErwartet: kunden/${welcher}/salon.json\n` +
        `Anlegen mit: node scripts/neuer-kunde.mjs ${welcher}\n`
    );
  }

  let roh: Salon;
  try {
    roh = JSON.parse(readFileSync(datei, "utf8")) as Salon;
  } catch (e) {
    throw new Error(`\n\nkunden/${welcher}/salon.json ist kein gültiges JSON:\n${(e as Error).message}\n`);
  }

  pruefe(welcher, roh);
  return roh;
}

// ─── Kleine Helfer, die Sektionen und Layout gemeinsam brauchen ───────────

/** "+49 8441 123456" → "+498441123456", für tel: und wa.me */
export function nurZiffern(nummer: string): string {
  return nummer.replace(/[^\d+]/g, "");
}

export function telLink(k: Kontakt): string {
  return `tel:${nurZiffern(k.telefon)}`;
}

export function whatsappLink(k: Kontakt): string | null {
  if (!k.whatsapp) return null;
  return `https://wa.me/${nurZiffern(k.whatsapp).replace("+", "")}`;
}

/** Was der große „Termin"-Knopf tut. */
export function terminZiel(s: Salon): { href: string; text: string; extern: boolean } {
  if (s.termin.typ === "link" && s.termin.url) {
    return { href: s.termin.url, text: "Termin buchen", extern: true };
  }
  if (s.termin.typ === "whatsapp") {
    const w = whatsappLink(s.kontakt);
    if (w) return { href: w, text: "Termin per WhatsApp", extern: true };
  }
  return { href: telLink(s.kontakt), text: "Anrufen und Termin holen", extern: false };
}

export function telefonText(k: Kontakt): string {
  return k.telefonAnzeige?.trim() || k.telefon;
}

/**
 * Das Aufmacherfoto, oder null.
 *
 * Die Bilder eines Kunden werden vor dem Bauen nach template/public/bilder/
 * kopiert (siehe scripts/baue.mjs); auf der Seite liegen sie also unter
 * /bilder/<datei>. Fehlt das Foto, gibt diese Funktion null zurück und der
 * Aufmacher zeigt stattdessen die Initiale auf Farbfläche — das ist der
 * Normalfall bei Lead-Vorschauen, nicht der Fehlerfall.
 */
export function heroBild(s: Salon): { src: string; alt: string } | null {
  const h = s.heroFoto;
  if (h && h.datei?.trim()) {
    return { src: `/bilder/${h.datei.trim()}`, alt: h.alt?.trim() || `${s.name} in ${s.adresse.ort}` };
  }
  const erstes = s.galerie?.[0];
  if (erstes?.datei?.trim()) {
    return { src: `/bilder/${erstes.datei.trim()}`, alt: erstes.alt?.trim() || `${s.name} in ${s.adresse.ort}` };
  }
  return null;
}

/** Welcher Aufmacher gilt: Angabe des Kunden, sonst die Vorgabe des Themes. */
export function heroStil(s: Salon): "geteilt" | "buehne" {
  if (s.heroStil) return s.heroStil;
  return s.theme === "nacht" ? "buehne" : "geteilt";
}

/** Ob Fotos in Graustufen laufen: Angabe des Kunden, sonst Vorgabe des Themes. */
export function fotosSchwarzweiss(s: Salon): boolean {
  if (s.fotoStil) return s.fotoStil === "schwarzweiss";
  return s.theme === "nacht";
}

/** Route-Link ohne eingebettete Google-Karte — die würde Scripts laden. */
export function routeLink(a: Adresse): string {
  const ziel = encodeURIComponent(`${a.strasse}, ${a.plz} ${a.ort}`);
  return `https://www.google.com/maps/dir/?api=1&destination=${ziel}`;
}
