# Betrieb vor Ort — Arbeitsregeln

**Zuerst `FAHRPLAN.md` komplett lesen, dann `STATUS.md`.** Diese Datei ist
nur die Kurzfassung; im Zweifel gilt der Fahrplan.

---

## Worum es geht

Dennis baut nebenberuflich Websites für inhabergeführte Betriebe im
Landkreis Pfaffenhofen und Umgebung. Erste Branche: Friseursalons.
Ein Template, pro Kunde nur eine Konfigurationsdatei und Fotos.
Mietmodell 79 € einmalig + 39 €/Monat (Pilot: 49 € + 19 €).

Ziel Jahr 1: 3–5 zahlende Kunden bei 2–5 Stunden Zeit pro Woche.

---

## Die zehn Regeln

1. **Dennis codet nicht.** Alles Technische wird hier ausgeführt. Ihm wird
   nur gesagt, was er entscheiden oder außerhalb des Rechners tun muss —
   kurz, konkret, mit Termin.
2. **Vor jeder Phase** eine Checkliste mit höchstens 7 Punkten. **Nach
   jedem Arbeitsblock** `STATUS.md` fortschreiben: erledigt / offen /
   nächster Schritt für Dennis.
3. **Fragen statt raten** bei allem, was Geld, Recht, Kundenkontakt oder
   Design-Geschmack betrifft. Technische Details werden selbst entschieden
   und nur erwähnt, wenn sie ihn betreffen.
4. **Kleine Schritte.** Ein Feature, ein Commit, ein Deploy. Nichts
   nebenbei umbauen. Vorschau-Links zum Prüfen am Handy schicken.
5. **Datenschutz und Sparkasse:** Keine Daten, Kontakte oder Systeme aus
   Dennis' Arbeitgeberkontext, nie. Leads nur aus öffentlichen Quellen,
   minimal speichern. Auf Kundenseiten keine externen Scripts, keine
   Cookies, keine fremden Fotos.
6. **Alle Dokumente als Dateien** in `docs/` (Markdown; Verträge zusätzlich
   als PDF/DOCX). Nichts nur im Chat.
7. **Reihenfolge:** Phase 1 sofort, Akquise-Material sobald die Demo live
   ist. Formalien (Fahrplan Abschnitt 2) nur vorbereiten — sie werden
   fällig, sobald in `STATUS.md` „Erstes Ja" steht. Dann sofort an Anzeige,
   Gewerbeanmeldung, ELSTER, Konto und die zwei Wochen Vorlauf vor der
   Unterschrift erinnern.
8. **Recherchepunkte** aus Fahrplan Abschnitt 10 abarbeiten und die
   Ergebnisse direkt in `FAHRPLAN.md` eintragen (🔎 entfernen, Wert
   eintragen, Quelle nennen).
9. **Kein Over-Engineering.** Kein CMS, keine Datenbank, keine
   Buchungslogik, kein Framework-Wechsel. Branchenneutral denken
   (Presets), aber nur das Friseur-Preset ausbauen. Dauert etwas mehr als
   30 Minuten länger als gedacht: erst fragen.
10. **Sprache:** Deutsch, per Du, kurz.

---

## Die harten Grenzen

| Grenze | Was gilt |
|---|---|
| **Arbeitgeber** | Keine Akquise in der Arbeitszeit, kein Dienstgerät, keine Dienst-Mail. In Salons den Job nicht erwähnen. Niemanden ansprechen, weil er Sparkassen-Kunde ist. |
| **Keine Unterschrift ohne Anzeige** | Nichts unterschreiben, bevor die Nebentätigkeitsanzeige raus und rund zwei Wochen verstrichen sind. |
| **Kundenseiten** | Keine Cookies, keine externen Scripts, keine Google-Fonts-CDN, kein Maps-iFrame. Sonst braucht die Seite ein Cookie-Banner — und das ist genau das Verkaufsargument, das wegfällt. |
| **Fotos** | Nur eigene Fotos. Mitarbeiter nur mit schriftlicher Einwilligung. Keine Kunden im Bild. Keine Fotos von Google oder Instagram übernehmen. |
| **Leads** | Nur Firmenname, Ort, Ist-Zustand, Status, Datum. Keine Privatdaten. |
| **Getrennt** | Eigenes Repo, getrennt von allen anderen Projekten. Nichts aus `Dennis-Projekt` hierher, nichts von hier dorthin. |

---

## Aufbau

```
CLAUDE.md      diese Datei
FAHRPLAN.md    der vollständige Plan — die Quelle der Wahrheit
STATUS.md      Fortschritt, offene Punkte, nächster Schritt für Dennis
docs/          Verträge, Fragebogen, Pitch, Rechnung, Fotocheckliste
template/      Astro-Projekt (Layouts, Sektionen, 3 Themes)
kunden/
  _demo/       Demo-Salon für die Akquise (Stockfotos, erfundene Daten)
  <slug>/      pro Kunde: salon.json, images/, notizen.md
leads/         Lead-Liste
scripts/       Bildoptimierung, neuen Kunden anlegen, Vorschau bauen
```

Hinweis zu Vorlagen: Was hier an Verträgen und Rechtstexten entsteht, ist
ein Startpunkt, kein Rechtsrat. Vor dem ersten echten Kunden einmal gegen
IHK-Musterverträge prüfen.
