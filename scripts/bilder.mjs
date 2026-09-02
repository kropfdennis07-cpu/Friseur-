#!/usr/bin/env node
/**
 * Legt die Fotos des gebauten Kunden dorthin, wo Astro sie findet, und
 * optimiert sie dabei.
 *
 * Läuft automatisch vor jedem Build (siehe template/package.json).
 * Aus kunden/<slug>/images/*.{jpg,jpeg,png,webp} wird
 * template/public/bilder/<name>.webp — höchstens 1.600 px breit, wie im
 * Fahrplan unter 3.1 festgelegt.
 *
 * Der Ordner wird vorher geleert: Sonst schleppt ein Kunde die Fotos des
 * zuletzt gebauten mit, und im schlimmsten Fall steht das Salonbild von
 * Müller auf der Seite von Huber.
 */
import { readdirSync, existsSync, mkdirSync, rmSync, statSync } from "node:fs";
import { dirname, join, extname, basename, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const WURZEL = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// sharp liegt bei den Abhängigkeiten des Templates, nicht hier oben.
// Ein zweites node_modules in der Wurzel wäre eine Zutat mehr, die
// veralten kann — deshalb wird es von dort geholt.
const require = createRequire(join(WURZEL, "template", "package.json"));
const sharp = require("sharp");
const slug = process.env.SITE?.trim() || "_demo";
const quelle = join(WURZEL, "kunden", slug, "images");
const ziel = join(WURZEL, "template", "public", "bilder");

const ERLAUBT = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const MAX_BREITE = 1600;

rmSync(ziel, { recursive: true, force: true });
mkdirSync(ziel, { recursive: true });

if (!existsSync(quelle)) {
  console.log(`Bilder: kunden/${slug}/images/ gibt es nicht — nichts zu kopieren.`);
  process.exit(0);
}

const dateien = readdirSync(quelle).filter(
  (d) => ERLAUBT.has(extname(d).toLowerCase()) && statSync(join(quelle, d)).isFile()
);

if (dateien.length === 0) {
  console.log(`Bilder: keine Fotos in kunden/${slug}/images/ — die Seite nimmt die Ersatzflächen.`);
  process.exit(0);
}

let gespart = 0;
for (const datei of dateien) {
  const von = join(quelle, datei);
  const nach = join(ziel, basename(datei, extname(datei)) + ".webp");
  const vorher = statSync(von).size;

  await sharp(von)
    .rotate() // Aufnahmerichtung des Handys berücksichtigen
    .resize({ width: MAX_BREITE, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(nach);

  gespart += vorher - statSync(nach).size;
}

const mb = (b) => (b / 1024 / 1024).toFixed(1);
console.log(
  `Bilder: ${dateien.length} aus kunden/${slug}/ aufbereitet` +
    (gespart > 0 ? ` (${mb(gespart)} MB gespart).` : ".")
);
