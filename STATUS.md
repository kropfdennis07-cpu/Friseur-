# STATUS

Stand: 02.09.2026 · Woche 1 von 12

---

## Wo wir stehen

Das Repo war heute früh leer. Jetzt liegt der Fahrplan drin, die Recherche
ist abgearbeitet, und **das Template baut die erste vollständige Seite** —
Demo-Salon „Salon Anna – Pfaffenhofen", am Handy und am Rechner geprüft.

Noch kein Kunde, noch keine Formalien. Das ist laut Fahrplan richtig so:
Anzeige an die Sparkasse und Gewerbeanmeldung werden erst fällig, wenn der
erste Salon Ja sagt.

---

## Erledigt

- [x] Repo angelegt, Fahrplan gesichert, Arbeitsregeln als `CLAUDE.md`
- [x] Alle zehn Recherchepunkte aus Abschnitt 10 — Ergebnisse mit Quelle
      im Fahrplan, zwei davon ändern den Plan (Hosting, Bewertungen)
- [x] Astro + Tailwind, Konfigschema `salon.json` (branchenneutral, Preset
      Friseur), Prüfung, die den Build bei Lücken abbricht
- [x] Theme „Klar", Sektionen Hero, Leistungen und Preise, Öffnungszeiten,
      Kontakt
- [x] Impressum (§ 5 DDG) und Datenschutz (Art. 13 DSGVO) — beide aus der
      Konfig erzeugt, ohne den abgeschalteten OS-Plattform-Link
- [x] Demo-Salon mit erfundenen Daten
- [x] **Null externe Ladevorgänge im Browser gemessen** — die Grundlage für
      „kein Cookie-Banner nötig"
- [x] `scripts/neuer-kunde.mjs` legt Kunden und Lead-Vorschauen an

---

## Offen — in dieser Reihenfolge

- [ ] Bildplatz im Hero + Bildoptimierung (WebP, max. 1.600 px)
- [ ] Restliche Sektionen: Über uns/Team, Galerie, Bewertungen
- [ ] Themes „Warm" und „Nacht" ausbauen und am Handy prüfen
- [ ] Lighthouse-Messung (Ziel: Mobile ≥ 95)
- [ ] Demo live stellen — **braucht die Hosting-Entscheidung, siehe unten**
- [ ] Danach Phase 2: eigene Landingpage, Flyer, Vertragspaket

---

## Nächster Schritt für Dennis 🙋

**Eine Entscheidung, zwei Kleinigkeiten.**

### 1. Hosting: Netlify oder Cloudflare Pages? ⚠️ blockiert die Demo

Netlify hat sein kostenloses Angebot umgestellt und passt nicht mehr zum
Modell. Kurz: 300 Credits im Monat, ein Deploy kostet 15, jedes Gigabyte
Besucherverkehr 20 — **mit harter Grenze**. Bei fünf Kunden ist das
Kontingent überwiegend von Besuchern aufgebraucht; und ist es weg, geht
die Seite eines zahlenden Kunden bis zum Monatswechsel **offline**.

Cloudflare Pages: unbegrenzter Verkehr, 500 Builds im Monat, unbegrenzt
Seiten, kostenlos. Bei zu viel Last fragen sie nach einem Upgrade, statt
abzuschalten.

Für uns ist es technisch dasselbe — am Template ändert sich nichts.
**Empfehlung: Cloudflare Pages, und zwar jetzt, solange kein Kunde
drauf liegt.** Rechnung und Quellen stehen im Fahrplan unter 10.3.

### 2. Konto anlegen

Sobald die Entscheidung steht: Konto beim gewählten Anbieter, mit deiner
privaten Mailadresse. Dann geht die Demo live und du hast den Link fürs
Handy.

### 3. Dein Nachname

Für `dennis-[nachname].de`. Sag ihn mir, dann prüfe ich, was frei ist —
inklusive ein paar neutraler Alternativen.

---

## Offene Fragen

| | Frage | Blockiert |
|---|---|---|
| F1 | Netlify oder Cloudflare Pages? (Empfehlung: Cloudflare) | die Demo live |
| F2 | Nachname für die eigene Domain | Phase 2 |
| F3 | Design: passt „Klar" so, oder soll es wärmer/dunkler? | nichts — Bild siehst du im Chat |

---

## Was hier NICHT passiert

Keine Formalien, kein Vertrag, keine Akquise, bevor in diesem Dokument
**„Erstes Ja"** steht. Bis dahin wird nur gebaut und vorbereitet.

Und: keine Stockfotos auf echten Kundenseiten. Nur im Demo und in
Lead-Vorschauen, dort mit Hinweisbanner.
