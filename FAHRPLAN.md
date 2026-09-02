# FAHRPLAN – Websites für Betriebe vor Ort als Nebengewerbe (Start: Friseursalons)

Stand: 02.09.2026 · Für: Dennis · Umsetzung: Claude Code
Legende: ✅ entschieden · 💡 Vorschlag (änderbar) · 🙋 muss Dennis selbst tun · 🔎 vor Start prüfen

---

## 0. Das Modell in Kürze

1. Ein Website-Template für Friseursalons, das pro Kunde nur über eine Konfigurationsdatei + Fotos angepasst wird.
2. Zielgruppe: inhabergeführte Salons (1–5 Mitarbeiter) ohne Website oder mit veralteter Seite.
3. Region: Landkreis Pfaffenhofen + Hallertau/Mainburg (Nähe Aiglsbach) + Ränder von Ingolstadt, Freising, Schrobenhausen. 💡
4. Preis (Mietmodell): 79 € einmalig + 39 €/Monat, 12 Monate Mindestlaufzeit – Hosting, Domain, Änderungen inklusive. Pilotangebot für die ersten 3 Salons: 49 € einmalig + 19 €/Monat (12 Monate). ✅
5. Keine eigene Terminbuchung – Button zum Tool, das der Salon schon nutzt, sonst Anruf + WhatsApp. ✅
6. Akquise: persönlich vor Ort, mit vorab gebauter Vorschau-Seite auf dem Handy. 💡
7. Aufwand pro Kunde nach fertigem Template: ca. 4 Stunden (Gespräch, Fotos, Build, Abnahme, Go-live).
8. Zeitbudget 2–5 Std./Woche, Ziel 3–5 Kunden in 12 Monaten. ✅
9. Reihenfolge: erst Template und Akquise (Sondierung); Anzeige der Nebentätigkeit + Gewerbeanmeldung, sobald der erste Salon Ja sagt; Vertrag erst danach. Kleinunternehmer (§ 19 UStG), EÜR. ✅
10. Dennis macht nur, was nicht delegierbar ist: Behördengänge, Besuche, Fotos, Unterschriften. Alles andere macht Claude Code.
11. Das Template wird branchenneutral gebaut – Friseur ist nur das erste Preset. Später Kosmetik, Bäckerei, Café, Physio usw. ✅

Rollen: Dennis codet nicht. Claude Code baut, schreibt, recherchiert, erstellt Dokumente. Dennis entscheidet und geht raus.

---

## 1. Rahmenbedingungen & Annahmen

| Punkt | Festlegung |
|---|---|
| Zeit | 2–5 Std./Woche ✅ |
| Ziel Jahr 1 | 3–5 zahlende Kunden ✅ |
| Start | komplett kalt, kein Pilotkunde ✅ |
| Region | Lkr. Pfaffenhofen (Pfaffenhofen, Wolnzach, Geisenfeld, Manching, Vohburg, Reichertshofen, Hohenwart, Scheyern, Schweitenkirchen, Rohrbach, Ilmmünster, Baar-Ebenhausen, Pörnbach, Gerolsbach, Jetzendorf) + Mainburg/Au/Hallertau + Randlagen Ingolstadt, Freising, Schrobenhausen, Neustadt a. d. Donau 💡 – Besuche starten sofort, auch in Pfaffenhofen ✅ |
| Branchen | Start: Friseure. Template branchenneutral mit Presets, weitere Branchen später ✅ |
| Marke | Eigener Name + Zusatz „Websites für Betriebe vor Ort"; Markenname optional später 💡 |
| Änderungen | macht Dennis (in Claude Code, 2 Min.), kein Kunden-Editor 💡 |
| Domain | Inhaber = Kunde, registriert und verwaltet über Dennis' Registrar-Konto ✅ |
| Hosting | auf Dennis' Konto, eine Site pro Kunde – keine Konten im Namen des Kunden ✅. **Welcher Anbieter: offen** – Netlify Free scheidet aus, Vorschlag Cloudflare Pages, siehe 10.3 🙋 |
| Technik | statisches Template (Astro + Tailwind), Hosting Netlify, Code auf GitHub 💡 |
| Sprache | nur Deutsch |
| Getrennt von | allen bestehenden Repos/Apps – eigenes, neues Repo ✅ |

Harte Regel: Keinerlei Daten, Kontakte oder Systeme aus dem Sparkassen-Job für dieses Gewerbe nutzen. Leads nur aus öffentlichen Quellen (Google Maps, Instagram, Branchenbuch). Keine Akquise in der Arbeitszeit, kein Dienstgerät, keine Dienst-Mail.

---

## 2. Formalien (werden fällig, sobald der erste Salon Ja sagt)

### 2.1 Nebentätigkeit bei der Sparkasse 🙋
- Sparkassen-Angestellte (TVöD-S) müssen eine entgeltliche Nebentätigkeit **vorher schriftlich anzeigen** (§ 3 Abs. 3 TVöD). Die Sparkasse kann sie untersagen oder mit Auflagen versehen, wenn berechtigte Interessen berührt sind.
- Viele Sparkassen haben zusätzlich eine interne Dienstvereinbarung/Richtlinie – im Intranet oder bei Personal nachsehen.
- Was in die Anzeige gehört: Art („Erstellung und Pflege von Websites für kleine Betriebe"), Umfang (ca. 2–5 Std./Woche, außerhalb der Arbeitszeit), keine Konkurrenz zur Sparkasse, keine Nutzung von Sparkassen-Ressourcen oder -Daten, keine Kundendaten der Sparkasse.
- Heikler Punkt offen ansprechen: Deine Website-Kunden sind womöglich Sparkassen-Kunden. Lieber jetzt eine Auflage („keine Nutzung interner Informationen") als später ein Problem.
- **Timing (Entscheidung Dennis):** Sondierung und Akquise laufen vorher. Sobald ein Salon Ja sagt, geht die Anzeige noch am selben Tag raus. „Rechtzeitig vorher" heißt: rund zwei Wochen einplanen, bevor du unterschreibst. Dem Salon sagst du: „Vertrag und Fototermin in zwei Wochen, ich bereite alles vor."
- In Salons den Job nicht erwähnen und niemanden ansprechen, weil er Sparkassen-Kunde ist – Leads kommen nur aus öffentlichen Quellen.
- Kein Rechtsrat; bei Unsicherheit Personalrat/Personalabteilung fragen.

**Claude Code erstellt:** `docs/00-anzeige-nebentaetigkeit.md` (Vorlage für das Schreiben).

### 2.2 Gewerbeanmeldung 🙋
- **Wann:** formal mit Aufnahme der Tätigkeit (§ 14 GewO). Praktisch: am Tag des ersten Ja, jedenfalls vor Vertrag und Rechnung. Ein paar Wochen Sondierung vorher sind gängig; eine verspätete Anmeldung wäre höchstens eine Ordnungswidrigkeit (kein Rechtsrat).
- **Wo:** Stadt Pfaffenhofen a. d. Ilm (Gewerbeamt), persönlich oder online über das BayernPortal. **Gebühr 35 €** (geprüft 02.09.2026, siehe 10.2).
- **Angaben:** Tätigkeit „Erstellung, Gestaltung und Pflege von Internetseiten sowie damit verbundene Dienstleistungen"; Nebenerwerb ankreuzen; Betriebsstätte = deine Wohnung in Pfaffenhofen; Rechtsform Einzelunternehmen.
- Webdesign ist Gewerbe, nicht freiberuflich – also kein Weg am Gewerbeamt vorbei.
- Kein Handelsregister nötig (Kleingewerbe).

### 2.3 Finanzamt 🙋
- Innerhalb eines Monats nach Anmeldung: **Fragebogen zur steuerlichen Erfassung** über ELSTER (§ 138 AO). Du bekommst eine Steuernummer fürs Gewerbe.
- **Kleinunternehmerregelung § 19 UStG** ankreuzen: keine Umsatzsteuer auf Rechnungen, keine USt-Voranmeldung. Grenzen (seit 2025): 25.000 € Vorjahresumsatz, 100.000 € laufendes Jahr; im Gründungsjahr wird die 25.000-€-Grenze anteilig gerechnet (Start September 2026 = vier Monate = 8.333 €, siehe 10.1). Mit 5 Kunden liegst du weit darunter.
- Gewinn (Einnahmen minus Ausgaben, **EÜR**) kommt in deine private Einkommensteuererklärung (Anlage G + EÜR). Faustregel: vom Gewinn gehen dein persönlicher Grenzsteuersatz ab – bei deinem Gehalt grob 35–42 %.
- Gewerbesteuer: Freibetrag 24.500 € Gewerbeertrag – irrelevant.
- Belege sammeln: Domain, Visitenkarten, Fahrtkosten (0,30 €/km), anteilig Handy/Claude-Abo. Ordner oder einfacher Sheet reicht.

### 2.4 Sonstiges 🙋
- **IHK München und Oberbayern:** Mitgliedschaft automatisch; Kleingewerbe mit Gewerbeertrag ≤ 5.200 € zahlt keinen Beitrag.
- **Sozialversicherung:** Als hauptberuflich Angestellter mit klar untergeordneter Nebentätigkeit fallen keine zusätzlichen KV-/RV-Beiträge an. Einfach nichts tun.
- **Konto:** eigenes Konto fürs Gewerbe (getrennt vom Privatkonto, kann ein zweites Girokonto sein).
- **Versicherung:** Vermögensschadenhaftpflicht ist bei diesem Volumen optional – erst ab ~10 Kunden nochmal ansehen.
- **Rechnungen:** Pflichtangaben nach § 14 UStG + Satz „Gemäß § 19 UStG wird keine Umsatzsteuer berechnet." Kleinunternehmer müssen keine E-Rechnungen ausstellen, aber empfangen können (E-Mail-Adresse reicht). Vorlage reicht; kein Buchhaltungstool nötig.
- **Name:** Als Kleingewerbe trittst du mit Vor- und Nachname auf; eine Geschäftsbezeichnung ist nur Zusatz. ✅ Auftritt: **„Dennis [Nachname] – Websites für Betriebe vor Ort"** – branchenoffen, kein Domain-Roulette, und in einer Kleinstadt ist der Name die Marke. Domain: dennis-[nachname].de oder [nachname]-web.de 🔎. Ein Markenname kann später obendrauf; falls gewünscht, neutral halten (z. B. Seitenwerk, Ladenseite, Ortsweb – Domains prüfen).

### 2.5 Vertragspaket (Claude Code erstellt als Dateien in `docs/`)
1. **Auftrag Website** (2 Seiten): Leistung, Preis, Zahlung: Einmalbetrag (79 €, Pilot 49 €) mit dem Go-live, Mitwirkung des Kunden (Fototermin, Texte, Freigabe innerhalb 7 Tagen), eine Korrekturrunde inklusive, Nutzungsrecht am Ergebnis für den Kunden, Template bleibt bei Dennis.
2. **Pflegevereinbarung**: 39 €/Monat (Pilot 19 €/Monat), enthält Hosting, Domain, SSL, bis zu 2 kleine Änderungen/Monat, jährlicher Check; Mindestlaufzeit 12 Monate, danach monatlich kündbar (1 Monat Frist). Pilot-Zusatz: Gegenleistung ist eine ehrliche Google-Bewertung + Freigabe als Referenz – steht so im Vertrag. Abrechnung jährlich im Voraus per Dauerrechnung (468 € bzw. 228 €), auf Wunsch monatlich per Dauerauftrag. Grundlage der Monatsgebühr: Die Seite läuft auf Dennis' Hosting-Konto, die Domain gehört dem Kunden. **Exit-Regel:** Kunde nimmt Domain mit und bekommt auf Wunsch die statischen Dateien (90 €). Diese Regel nimmt die Angst „Und wenn du aufhörst?".
3. **AV-Vertrag (Art. 28 DSGVO)**: Dennis hostet für den Kunden → Auftragsverarbeiter. Standardtext + Netlify als Unterauftragsverarbeiter (Netlify-DPA verlinken).
4. **Foto-Einwilligung** für Mitarbeiter (KUG § 22) – eine halbe Seite.
5. **Rechnungsvorlage** mit Kleinunternehmer-Satz.
6. **Onboarding-Fragebogen** (siehe 6.1).

Hinweis: Vorlagen von Claude Code sind ein Startpunkt, kein Rechtsrat. Vor dem ersten echten Kunden einmal gegen IHK-Musterverträge prüfen; Anwalt optional.

---

## 3. Phase 1 – Das Produkt (Template)

### 3.1 Technik-Stack 💡
- **Astro** (statischer Site-Generator, schnell, ein Repo, pro Kunde nur Daten) + **Tailwind CSS**.
- **Ein Monorepo, viele Sites:** Kundendaten liegen in `kunden/<slug>/salon.json` + `kunden/<slug>/images/`. Build mit Umgebungsvariable `SITE=<slug>`. Pro Kunde eine Netlify-Site, die dasselbe GitHub-Repo mit anderem `SITE` baut. Template-Verbesserungen kommen so automatisch bei allen Kunden an.
- **Branchenneutral bauen:** Das Template heißt intern „Betrieb vor Ort", Friseur ist das erste Branchen-Preset (Begriffe, Leistungsgruppen, Beispieltexte, Impressumsfelder). Spätere Presets (Kosmetik, Bäckerei, Café, Physio) kommen ohne Umbau dazu – jetzt aber nur Friseur ausbauen.
- Hosting auf **Dennis' Konto** – eine Site pro Kunde, keine Konten im Namen des Kunden. Code auf **GitHub** (privates Repo).
  ⚠️ **Netlify Free trägt dieses Modell nicht** (Kreditsystem seit 09/2025, harte Grenze – Kundenseiten gehen bei Erschöpfung offline). Geprüft am 02.09.2026, Rechnung und Alternative in **10.3**. Vorschlag: **Cloudflare Pages** (unbegrenzte Bandbreite, 500 Builds/Monat). **Entscheidung offen 🙋** – am Template ändert sich dadurch nichts.
- Keine Datenbank, kein CMS, kein Login. Änderungen = Datei anpassen + Push, macht Claude Code.
- Bilder: WebP, max. 1.600 px Breite, per Build-Schritt automatisch optimiert.
- Schriften **lokal** eingebunden (keine Google-Fonts-CDN → DSGVO-Abmahnrisiko).
- **Keine Cookies, keine externen Scripts** → kein Cookie-Banner nötig. Google Maps nicht einbetten (lädt Google-Scripts), stattdessen Adresse + Button „Route in Google Maps öffnen". Terminbuchung als Link/Button in neuem Tab, nicht als iFrame.
- Kontakt: Telefon-Button, WhatsApp-Link (`https://wa.me/49…`), E-Mail. Kein Formular im Standard (Spam, Datenschutztext, Support) – optional später.
- Analytics: keine im Standard.

Repo-Struktur:
```
betrieb-vor-ort/
  CLAUDE.md            Arbeitsregeln für Claude Code (Kurzfassung von Abschnitt 11)
  FAHRPLAN.md          dieses Dokument
  STATUS.md            Fortschritt, offene Punkte, nächste Schritte
  docs/                Verträge, Fragebogen, Pitch, Rechnung, Fotocheckliste
  template/            Astro-Projekt (Layouts, Sektionen, 3 Themes)
  kunden/
    _demo/             Demo-Salon für Akquise (Stockfotos, erfundene Daten)
    <slug>/            pro Kunde: salon.json, images/, notizen.md
  leads/leads.md       Lead-Liste (nur Firmenname, Ort, Status, Datum – minimal)
  scripts/             Bildoptimierung, neuen Kunden anlegen, Vorschau bauen
```

### 3.2 Seitenaufbau (Onepager, Reihenfolge fix, Sektionen per Konfig an/aus)
1. **Hero:** Salonname, Claim (1 Satz), Aufmacherfoto, zwei Buttons: „Termin" / „Anrufen".
2. **Leistungen & Preise:** Gruppen (Damen, Herren, Kinder, Farbe, Extras) mit Preis „ab". Preise sind das, was Leute wirklich suchen.
3. **Über uns / Team:** 3–4 Sätze, Teamfotos mit Vorname + Rolle.
4. **Galerie:** 6–12 Fotos (Salon, Arbeitsplätze, Ergebnisse).
5. **Bewertungen:** Google-Sterne + 3–5 Zitate + Link „Alle Bewertungen auf Google".
6. **Öffnungszeiten & Anfahrt:** Tabelle, Adresse, Parken-Hinweis, Route-Button.
7. **Kontakt:** Telefon, WhatsApp, E-Mail, Instagram/Facebook.
8. **Footer:** Impressum, Datenschutz.
Optional (Upsell oder auf Wunsch): „Aktuelles/Aktionen", „Wir suchen Verstärkung" (Fachkräftemangel – zieht bei vielen Salons mehr als alles andere), Gutscheine, FAQ.

### 3.3 Design: drei Themes, per Konfig wählbar 💡
- **Klar** – hell, viel Weiß, moderne Sans-Serif, ein Akzent (Salbei/Schwarz).
- **Warm** – Creme/Erdtöne, Serifen-Headline, weich, „Wohlfühlsalon".
- **Nacht** – dunkel, Gold- oder Kupferakzent, edel, eher Barbershop/Premium.
Alle: mobil zuerst, große Buttons, Telefonnummer immer sichtbar, Lighthouse Mobile ≥ 95.

### 3.4 Konfigurationsdatei `salon.json` (alles, was pro Kunde variiert)
Branche (Preset: friseur), Name, Claim, Theme, Logo (optional), Farben-Override, Adresse, Telefon, WhatsApp, E-Mail, Social-Links, Öffnungszeiten, Leistungen mit Preisen, Team, Über-uns-Text, Fotos (Dateinamen + Alt-Texte), Bewertungen (Sternewert, Anzahl, Zitate, Google-Link, Place-ID), Terminbuchung (Typ: link | telefon | whatsapp; URL), Sektionen an/aus, Impressumsdaten (Inhaber, Rechtsform, USt-IdNr. falls vorhanden, zuständige Handwerkskammer, Berufsbezeichnung „Friseurmeister/in", Berufsordnung: Handwerksordnung), Domain.

### 3.5 Recht auf den Kundenseiten (aus der Konfig generiert)
- **Impressum § 5 DDG** (seit 2024 Nachfolger des TMG): Inhaber mit Vor-/Nachname, Anschrift, Telefon, E-Mail, USt-IdNr. falls vorhanden, Handwerkskammer (Oberbayern: HWK für München und Oberbayern; Lkr. Kelheim: HWK Niederbayern-Oberpfalz), Berufsbezeichnung + Handwerksordnung. Der Link zur EU-OS-Plattform **entfällt und darf nicht mehr drinstehen** (Plattform seit 20.07.2025 abgeschaltet, geprüft 02.09.2026, siehe 10.5); VSBG-Satz („nicht bereit/verpflichtet") kommt freiwillig rein.
- **Datenschutzerklärung Art. 13 DSGVO:** kurz, weil die Seite kaum Daten verarbeitet: Hosting (Netlify, Server-Logs), Kontakt per Telefon/WhatsApp/E-Mail, Links zu Google/Instagram/Buchungstool. Text von Claude Code generieren, einmal mit Generator (z. B. e-recht24) gegenprüfen.
- **Keine Cookie-Einwilligung nötig**, weil nichts Externes geladen wird (§ 25 TDDDG) – das ist ein Verkaufsargument.
- **Barrierefreiheit (BFSG seit 2025):** Kleinstunternehmen sind bei Dienstleistungen ausgenommen; trotzdem sauber bauen (Kontraste, Alt-Texte, Tastatur) – kostet nichts.
- **Fotos:** nur eigene Fotos; Mitarbeiter mit schriftlicher Einwilligung; keine Kunden im Bild; keine Google-/Instagram-Fotos des Salons auf die Live-Seite übernehmen.

### 3.6 Google-Bewertungen – zwei Wege
- **Standard (empfohlen für 3–5 Kunden):** Sternewert + Anzahl + 3–5 Zitate (Vorname, Datum, „Quelle: Google") manuell in die Konfig, Link zum Google-Profil. Alle 3 Monate beim Check aktualisieren. Kostet nichts, keine API.
- **Upgrade (Places API): gestrichen am 02.09.2026.** Googles Bedingungen verbieten das Speichern von Places-Inhalten (nur die Place-ID darf bleiben) – genau das täte ein Build, der Bewertungen in eine statische Seite backt. Dazu 40 $ je 1.000 Abrufe für das Bewertungsfeld. Kein Script, auch nicht vorbereitet. Begründung und Quelle in **10.6**.

### 3.7 Lokales SEO (eingebaut, nicht als Extra)
- Title/Description mit „Friseur [Ort]", H1 mit Salonname + Ort.
- Strukturierte Daten `schema.org/HairSalon` (Adresse, Öffnungszeiten, Telefon, Preisspanne, Bewertung).
- Website im **Google-Unternehmensprofil** eintragen (Teil des Go-live, macht Dennis mit dem Kunden – 5 Minuten, größter SEO-Hebel).
- Sitemap, robots.txt, saubere Ladezeit.

### 3.8 Fototermin-Checkliste (`docs/fotocheckliste.md`)
- Handy reicht (Querformat, HDR aus, Objektiv putzen). Tageslicht + alle Lampen an. Vorher aufräumen, Kabel/Handtücher weg.
- Pflichtmotive: Außenansicht (ohne parkende Autos), Empfang, 2–3 Arbeitsplätze, Waschplatz, Produktregal, 2–3 Detailaufnahmen (Werkzeug, Pflanzen, Deko), Team einzeln + Gruppe (mit Einwilligung), optional Inhaber bei der Arbeit an einem Model (kein Kunde).
- 30–50 Fotos machen, 10–15 nutzen. Claude Code optimiert (Helligkeit, Zuschnitt, WebP).
- Dauer: 30–45 Minuten, am besten zu Randzeiten.

### 3.9 Definition of Done (Phase 1)
- [ ] Alle 8 Sektionen + Optionale bauen aus `salon.json`
- [ ] 3 Themes umschaltbar, mobil geprüft (iPhone-Breite, Android-Breite)
- [ ] Demo-Salon `_demo` live unter Netlify-URL (Stockfotos mit freier Lizenz, erfundener Salon „Salon Anna – Pfaffenhofen")
- [ ] Impressum + Datenschutz generiert
- [ ] Lighthouse Mobile ≥ 95, keine externen Requests
- [ ] Script `neuer-kunde <slug>` legt Ordner + Konfig + Netlify-Site-Anleitung an
- [ ] Vorschau für einen Lead in < 30 Minuten erzeugbar (öffentliche Daten + Platzhalterfotos)

---

## 4. Phase 2 – Eigene Präsenz

- **Landingpage** (gleiches Template, eigener Inhalt): „Websites für Betriebe vor Ort – Friseure, Läden, Praxen in Pfaffenhofen & Umgebung. Fertig in 7 Tagen. 79 € einmalig + 39 €/Monat, alles inklusive. Ihr müsst nur 30 Minuten für Fotos Zeit haben." Beispiele zeigen zunächst nur Friseure; das ist okay. Mit Demo-Link, 3 Argumenten (kein Cookie-Banner, alles inklusive, persönlich vor Ort), Kontakt, Impressum (dein eigenes).
- Domain: dennis-[nachname].de oder [nachname]-web.de 🔎.
- **Visitenkarte + Din-A5-Flyer** (Claude Code liefert Druck-PDF): Vorderseite Demo-Screenshot, Rückseite 3 Argumente + Preis + QR-Code zur Demo. Druck online ~30 €.
- Eigene WhatsApp-Business-Nummer (kostenlos, zweite SIM/eSIM oder Business-App auf der privaten Nummer) – hält Privates und Gewerbe getrennt. 💡

---

## 5. Phase 3 – Akquise (der Teil, den nur du kannst)

### 5.1 Lead-Liste (Claude Code recherchiert, `leads/leads.md`)
Quelle: Google Maps „Friseur" je Ort aus Abschnitt 1, plus Instagram, plus Branchenbuch.
Kriterien für einen guten Lead:
- Keine Website, oder: nicht mobiltauglich, kein https, Baukasten-Subdomain, nur Facebook/Instagram als „Website", Preise fehlen.
- Google-Bewertung ≥ 4,3 mit ≥ 15 Bewertungen (Salon läuft und legt Wert auf Ruf).
- Inhabergeführt, 1–5 Mitarbeiter, keine Kette.
Ziel: 30 Leads, davon Top 10 markiert. Nur Firmenname, Ort, Ist-Zustand, Status – keine Privatdaten.

### 5.2 Ablauf pro Lead
1. **Vorschau bauen** (Claude Code, 20–30 Min.): echte öffentliche Daten (Name, Adresse, Öffnungszeiten, Leistungen aus dem Google-Profil), Platzhalterfotos, Hinweisbanner „Entwurf – Fotos folgen". Unter `vorschau-<slug>.netlify.app`, nicht indexiert.
2. **Besuch** (nicht anmelden, kein Termin – Friseure sind zwischen Kunden ansprechbar): Dienstag–Donnerstag 10–12 oder 14–16 Uhr. **Montags sind viele Salons zu, Freitag/Samstag ist Hochbetrieb – nie.** Mit Gleitzeit: früh anfangen, um 15:30 raus, zwei bis drei Salons. Am Homeoffice-Tag in Aiglsbach: Mainburg/Hallertau.
3. Vorschau auf dem Handy zeigen (60 Sekunden), Karte/Flyer dalassen, Vorschau-Link per WhatsApp schicken.
4. **Follow-up** nach 3–4 Tagen per WhatsApp, nach 3 Wochen einmal persönlich. Danach Lead auf „später" und in 3 Monaten nochmal.
5. Zusage → noch am selben Tag Anzeige an die Sparkasse und Gewerbeanmeldung anstoßen; dem Salon Vertrag + Fototermin in zwei Wochen zusagen; Vertrag dann auf Papier vor Ort → Phase 4.

### 5.3 Pitch (`docs/pitch.md`, auf eine Karte passend)
Kurzfassung (20 Sekunden):
„Hallo, ich bin Dennis aus Pfaffenhofen. Ich baue Websites für Friseursalons hier in der Gegend. Ich hab gesehen, ihr habt noch keine [bzw.: eure ist am Handy schwer zu lesen] – und hab euch einfach mal einen Entwurf gebaut. Darf ich kurz zeigen? Dauert eine Minute."
Dann Handy zeigen, dann:
Pilotphase (Salon 1–3): „Ich starte gerade hier in der Gegend und suche drei Salons als Referenz. Für die sind's einmalig 49 € und dann 19 € im Monat – weniger als ein Haarschnitt – und alles ist drin: Hosting, Domain, Änderungen, zwölf Monate. Ihr müsst nur einmal 30 Minuten für Fotos Zeit haben. Dafür wünsch ich mir eine ehrliche Google-Bewertung."
Ab Salon 4: „Einmalig 79 € fürs Einrichten, dann 39 € im Monat, alles drin: Hosting, Domain, Änderungen – Preise oder Urlaubszeiten ändere ich euch am selben Tag. Ihr müsst nur einmal 30 Minuten für Fotos Zeit haben, ich mache den Rest. Zwölf Monate Laufzeit, danach monatlich kündbar."

Drei Argumente, immer dieselben:
1. Wer „Friseur [Ort]" googelt, findet euch – mit Preisen, Öffnungszeiten, Termin-Button.
2. Ihr habt keine Arbeit damit. Keine Baukästen, kein Passwort, keine Updates.
3. Alles inklusive, fester Preis, ich bin hier vor Ort.

Einwände:
- „Wir haben Instagram/Facebook." → „Perfekt, das verlinken wir. Aber googel mal ‚Friseur [Ort]' – da kommt Instagram nicht, da kommen die anderen."
- „Zu teuer." (Pilotphase) → „49 € und 19 € im Monat – das ist weniger als ein Haarschnitt. Ab dem vierten Salon sind's 39 €, deshalb jetzt." (Normalpreis) → „Eine Agentur nimmt 2.000–4.000 € und danach nochmal Hosting. Ein Baukasten kostet 20–30 € im Monat plus eure Abende. Bei mir sind's 39 € und ihr rührt keinen Finger."
- „Wir sind eh voll." → „Dann ist die Seite für Personal: ‚Wir suchen Verstärkung' – Bewerber googeln euch zuerst. Und für die Zeit, wenn's mal nicht voll ist."
- „Mein Neffe macht das." → „Super. Wenn er in vier Wochen noch nicht fertig ist, meld dich – der Entwurf bleibt online." Karte dalassen.
- „Muss ich mit meinem Mann/Partner besprechen." → „Klar. Ich schick dir den Link, schau's euch heute Abend an. Ich komm Donnerstag nochmal vorbei."
- „Was, wenn du aufhörst?" → „Die Seite läuft ohne mich weiter, die Domain gehört euch, und ihr bekommt alle Dateien. Steht so im Vertrag."

Pilot-Angebot (erste 3 Salons) ✅: 49 € einmalig + 19 €/Monat, 12 Monate Laufzeit, gegen Google-Bewertung + Referenzfreigabe. Steht **nicht** auf Flyer oder Landingpage – dort steht der Normalpreis. Das Pilotangebot machst du mündlich, damit es wie ein Deal wirkt und nicht wie ein Billigprodukt. Ab Salon 4 gilt 79 € + 39 €/Monat.

### 5.4 Wochenrhythmus bei 2–5 Std./Woche
- Jede Woche 1 Std. „Büro": Leads pflegen, Follow-ups, Vorschau-Seiten in Claude Code.
- Alle 2 Wochen 1 Akquise-Slot (2 Std., 3–5 Besuche).
- Nach Auftrag: Fototermin (1 Std.) + Build/Abnahme (2 Std.) in dieser oder der nächsten Woche.
- Erwartung: ca. 10 % Abschluss bei persönlichem Besuch mit Vorschau. 30–40 Besuche → 3–5 Kunden. Das passt in 12 Wochen Akquise.

---

## 6. Phase 4 – Auslieferung pro Kunde (Standardprozess, ca. 4 Std.)

### 6.1 Onboarding-Fragebogen (`docs/fragebogen.md`, mit dem Kunden in 15 Min. ausfüllen)
Salonname · Inhaber · Adresse · Telefon · WhatsApp-Nummer · E-Mail · Öffnungszeiten · Leistungen + Preise (Liste oder Foto der Preisliste) · Team (Vorname, Rolle) · Über uns (Gründungsjahr, was euch ausmacht, 3 Sätze) · Instagram/Facebook · Terminbuchungstool (ja/nein, Link) · Theme (Klar/Warm/Nacht) · Logo vorhanden? · Impressumsdaten (USt-IdNr., Handwerkskammer, Meistertitel) · Wunschdomain · Extras (Stellenanzeige, Aktionen).

### 6.2 Schritte
1. Auftrag unterschrieben, Fragebogen ausgefüllt. Keine Anzahlung – die Rechnung kommt mit dem Go-live.
2. Fototermin (30–45 Min.) + Foto-Einwilligungen.
3. Build in Claude Code: `neuer-kunde <slug>`, Konfig füllen, Fotos einspielen, Netlify-Site anlegen (1–2 Std.).
4. Vorschau-Link an Kunden, eine Korrekturrunde (Kunde hat 7 Tage).
5. Domain registrieren (**Inhaber = Kunde**, Registrar-Konto von Dennis; Empfehlung **INWX**, ~5–7 €/Jahr, siehe 10.4), DNS auf den Hoster, HTTPS automatisch.
6. Go-live + Website ins Google-Unternehmensprofil eintragen + Instagram-Bio-Link setzen.
7. Rechnung mit dem Go-live: Einmalbetrag (79 € / Pilot 49 €) plus Dauerrechnung für die Pflege (12 × 39 € / 12 × 19 €), jährlich im Voraus oder monatlich per Dauerauftrag. Pilot: zusätzlich den Google-Bewertungslink per WhatsApp schicken und freundlich um die Bewertung bitten.
8. `kunden/<slug>/notizen.md`: Datum Go-live, Besonderheiten, nächster Check.

---

## 7. Phase 5 – Betrieb & Pflege

- Änderungswunsch per WhatsApp → Claude Code ändert Konfig → Push → live in 2 Minuten. Zusage an Kunden: „am selben Werktag".
- Alle 3 Monate pro Kunde 10 Minuten: Bewertungen aktualisieren, Öffnungszeiten/Preise abfragen, Seite kurz prüfen.
- Jährlich: Domain verlängert sich automatisch (Kosten aus der Monatsgebühr gedeckt), Template-Update einmal pro Jahr für alle.
- Backup = GitHub-Repo. Nichts weiter nötig.
- Kündigung: Domain übertragen, Netlify-Site löschen, Exportdateien liefern (90 €), Kundenordner nach 6 Monaten löschen.
- Kein Support-Kanal außer WhatsApp/E-Mail; keine Telefonhotline versprechen.

---

## 8. Zeitplan (12 Wochen, 2–5 Std./Woche)

| Woche | Dennis 🙋 | Claude Code |
|---|---|---|
| 1 | Domain-Namen freigeben; Design-Richtung am Handy bestätigen | Repo anlegen, Konfigschema, Theme „Klar", Hero + Leistungen + Kontakt |
| 2–3 | Feedback zum Design am Handy | restliche Sektionen, Themes „Warm" + „Nacht", Impressum/Datenschutz-Generator, Demo-Salon live |
| 4 | Netlify/GitHub/Registrar-Konten; Formalien nur vorbereiten (Anzeige-Schreiben und Gewerbeamt-Formular fertig in der Schublade) | Landingpage, Flyer/Visitenkarte-PDF, Vertragspaket, Fragebogen, Pitch-Karte |
| 5 | Visitenkarten bestellen; Lead-Liste durchsehen | 30 Leads, Top 10 Vorschau-Seiten |
| 6–7 | Akquise-Runde 1 (2 Slots, 6–10 Besuche), Follow-ups | Vorschauen nachziehen, Notizen |
| 8–9 | Erstes Ja → Anzeige, Gewerbeanmeldung, ELSTER, Konto; zwei Wochen später Fototermin, Abnahme, Go-live | Build Kunde 1, Prozess-Script verfeinern |
| 10–12 | Akquise-Runde 2, Kunde 2–3 | Builds, Referenz auf Landingpage, STATUS.md |
| danach | Rhythmus aus 5.4 | Betrieb, Vorschauen, Änderungen |

Falls die Sparkasse Auflagen macht oder länger braucht: Salon informieren, Fototermin verschieben – die Vorschau bleibt online. Nichts unterschreiben, bevor die Anzeige raus und die Frist verstrichen ist.

---

## 9. Wirtschaftlichkeit (ehrlich gerechnet)

Jahr 1 mit 5 Kunden: 3 Piloten × 49 € + 2 × 79 € = 305 € einmalig, plus Pflege anteilig (im Schnitt ein halbes Jahr) ca. 800 € → ca. 1.100 € Umsatz.
Kosten Jahr 1: Domains ~60 €, Gewerbeanmeldung ~40 €, Druck ~60 €, Netlify 0 €, Fahrtkosten ~150 €, anteilig Claude-Abo. Gewinn ca. 800 €, nach Steuer ca. 500 €.
Jahr 2 mit denselben 5 Kunden: 3 × 228 € + 2 × 468 € = 1.620 € Pflege fast ohne Arbeit; jeder weitere Kunde bringt 79 € plus 468 € im Jahr.
Das Mietmodell lebt von der Anzahl: 10 Kunden ≈ 4.700 €/Jahr, 20 Kunden ≈ 9.400 €/Jahr wiederkehrend, bei 2–4 Std. Betreuung im Monat. Jahr 1 ist reine Investition in Referenzen (Stundenlohn unter 10 €); ab Jahr 2 dreht sich das.
Fazit: Mit 3–5 Kunden bleibt es ein Taschengeld – das Modell rechnet sich ab etwa 10 Kunden, und die kommen über Referenzen und weitere Branchen. Spätere Preiserhöhungen (z. B. 149 € / 49 €) gelten nur für Neukunden; Bestandskunden behalten ihren Preis.

---

## 10. Vor Start prüfen — erledigt am 02.09.2026

Alle zehn Punkte recherchiert. **Zwei Ergebnisse ändern etwas am Plan**
(Punkt 3 und Punkt 6), der Rest bestätigt ihn.

### 10.1 Kleinunternehmergrenzen ✅ bestätigt
25.000 € Vorjahresumsatz und 100.000 € laufendes Jahr, beide Bedingungen
zusammen, seit 01.01.2025. **Im Gründungsjahr wird die 25.000 € anteilig
gerechnet:** Gründung im September 2026 = vier Monate = 8.333 € erlaubt.
Wird die 100.000 € gerissen, ist schon der Umsatz steuerpflichtig, mit dem
sie gerissen wird — nicht erst der des Folgejahrs.
Für 3–5 Kunden vollkommen irrelevant; die Regel greift nie.
Quelle: [IHK Region Stuttgart](https://www.ihk.de/stuttgart/fuer-unternehmen/recht-und-steuern/steuerrecht/umsatzsteuer-national/kleinunternehmerregelung-in-der-umsatzsteuer-1843632)

### 10.2 Gewerbeanmeldung Pfaffenhofen ✅ bestätigt
**35 €** für Einzelunternehmen (Ummeldung/Abmeldung 30 €). Online möglich
über das BayernPortal — dort ausfüllen, PDF erzeugen, elektronisch oder
auf Papier ans Bürgerbüro der Stadt Pfaffenhofen. Formular liegt auch im
Download-Bereich von pfaffenhofen.de.
Damit ist die Schätzung „20–60 €" durch 35 € ersetzt.
Quellen: [Stadt Pfaffenhofen](https://pfaffenhofen.de/artikel/gewerbe-an-ab-und-ummeldungen/) ·
[BayernPortal](https://www.bayernportal.de/dokumente/leistung/762865582502?plz=85276&behoerde=23442297463&gemeinde=610968773673)

### 10.3 Netlify ⚠️ **ÄNDERT DEN PLAN — Entscheidung nötig**
Netlify hat am 04.09.2025 auf ein Kreditsystem umgestellt und am
14.04.2026 nachgeschärft. Der kostenlose Tarif hat **300 Credits im Monat
mit harter Grenze** (kein Nachladen möglich):

| Verbrauch | Kosten |
|---|---|
| ein Produktions-Deploy | 15 Credits |
| Bandbreite | 20 Credits je GB |
| Web-Anfragen | 2 Credits je 10.000 |

Was das für dieses Modell heißt, durchgerechnet:

- Eine Friseurseite mit ~2.000 Besuchen im Monat verbraucht grob 2 GB =
  **40 Credits allein an Bandbreite**.
- **Bei 5 Kunden** sind das 200 Credits nur fürs Ausliefern. Es bleiben
  100 Credits = **6 Deploys im Monat für alle Sites zusammen.** Die Zusage
  „Änderungen am selben Werktag" ist damit nicht haltbar.
- **Bei 10 Kunden** ist das Kontingent allein durch Besucher aufgebraucht.

**Und die harte Grenze ist das eigentliche Problem:** Ist das Kontingent
weg, geht die Seite eines zahlenden Kunden offline, bis der Monat
umspringt. Ein Kunde, der 39 €/Monat zahlt und dessen Seite am 20. des
Monats tot ist, ist ein verlorener Kunde plus eine schlechte Bewertung im
Ort — genau das Gegenteil des Ziels.

**Die Alternative: Cloudflare Pages.** Kostenlos, und zwar dauerhaft
passend zu diesem Modell:

| | Netlify Free | Cloudflare Pages Free |
|---|---|---|
| Bandbreite | 20 Credits/GB, hart gedeckelt | **unbegrenzt** |
| Builds | 15 Credits pro Deploy (≈20/Monat gesamt) | **500 im Monat** |
| Sites | aus demselben Topf | **unbegrenzt** |
| Eigene Domains | — | 100 pro Projekt |
| Bei Überschreitung | **Seite offline** | Nachfrage nach Upgrade |

Cloudflare deckelt die Bandbreite nicht hart, sondern bittet bei
unangemessener Last um ein Upgrade — statt abzuschalten.

**🙋 Deine Entscheidung, weil es um Geld und ein Versprechen an Kunden
geht:** Cloudflare Pages statt Netlify? Technisch ist es für uns dasselbe
(statische Dateien, Git-Anbindung, kostenloses SSL, eigene Domains), das
Template ändert sich dadurch nicht. Empfehlung: ja, wechseln — und zwar
jetzt, solange noch kein Kunde drauf liegt.
Quellen: [Netlify Docs — Credit-based pricing](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/) ·
[Cloudflare Pages Limits](https://developers.cloudflare.com/pages/platform/limits/)

### 10.4 Domain-Registrar ✅ geklärt
**.de-Domain kostet 5–7 € im Jahr** bei netcup (≈0,42 €/Monat) oder INWX
(≈0,50 €/Monat). Beide taugen; INWX hat die bessere API und ist bei
Wiederverkäufern verbreitet, netcup ist einen Tick billiger.
united-domains verlangt keine Transfergebühr und macht Inhaberwechsel
kostenlos — teurer im laufenden Preis, aber der sauberste Ausstieg.

Für die Exit-Regel im Vertrag („Kunde nimmt die Domain mit") ist wichtig,
dass der Kunde als **Inhaber (Domain-Owner)** eingetragen ist und Dennis
nur als administrativer Kontakt. Das können alle drei.
Empfehlung: **INWX**, wegen API (später automatisch anlegen) und
etabliertem Inhaberwechsel.
Quellen: [hosttest.de Preisvergleich](https://www.hosttest.de/vergleich/de-domain.html) ·
[EXPERTE.de](https://www.experte.de/domains/de)

### 10.5 Impressum 2026 ✅ bestätigt, mit einer Korrektur
§ 5 DDG hat § 5 TMG abgelöst; die Pflichtangaben sind inhaltlich
unverändert, nur „Telemedien" heißt jetzt „digitale Dienste".

**Der OS-Plattform-Link ist seit dem 20.07.2025 endgültig weg** — die EU
hat die Plattform eingestellt. Er darf nicht mehr im Impressum stehen: ein
Link auf eine tote Pflichtangabe ist selbst wieder angreifbar. Der
VSBG-Satz („nicht bereit und nicht verpflichtet, an einem
Streitbeilegungsverfahren teilzunehmen") bleibt freiwillig und schadet
nicht — kommt bei uns rein.

Fehlende oder falsche Angaben sind eine Ordnungswidrigkeit nach § 33 DDG.
Der Generator muss also vollständig sein, nicht nur hübsch.
Quellen: [IHK Chemnitz](https://www.ihk.de/chemnitz/recht-und-steuern/rechtsinformationen/internetrecht/pflichtangaben-im-internet-die-impressumspflicht-4401580) ·
[Handelskammer Hamburg](https://www.handelskammer-hamburg.de/innovation-neue-maerkte/digitalisierung/impressumspflicht-6787984)

### 10.6 Google Places API ⚠️ **Upgrade fällt weg**
- Das Feld mit Bewertungen liegt in der teuersten Stufe: **40 $ je 1.000
  Abrufe**, Freikontingent dort nur ~1.000 Abrufe im Monat. Maximal
  5 Bewertungen je Ort.
- **Entscheidend: Googles Bedingungen verbieten das Zwischenspeichern von
  Places-Inhalten.** Dauerhaft speichern darf man nur die Place-ID.
  Genau das würde der geplante Weg aber tun — Bewertungen zur Build-Zeit
  abrufen und in eine statische Seite backen ist Speicherung.
- Attribution („Google") ist bei Bewertungen Pflicht.

**Folge: Das Upgrade aus 3.6 wird nicht gebaut, auch nicht vorbereitet.**
Der Standardweg bleibt — Sternewert, Anzahl und 3–5 Zitate manuell in die
Konfig, mit Quellenangabe und Link aufs Google-Profil, alle drei Monate
beim Check aktualisiert. Das ist kein Notbehelf, sondern der einzige
saubere Weg.
Quelle: [Google Places API — Usage and Billing](https://developers.google.com/maps/documentation/places/web-service/usage-and-billing)

### 10.7 Terminbuchungstools bei Friseuren ✅ geklärt
Verbreitet 2026: **Treatwell** (39 €/Monat plus Provision), **Shore** (ab
39,90 €/Monat), **Salonkee** (ab 49 €/Monat plus 499 € Einrichtung),
**Planity** (ab 69 €/Monat), dazu Fresha und Cituro.

**Alle bieten einen direkten Buchungslink**, den man auf einer Website
verlinken kann — genau das, was der Plan vorsieht (Button in neuem Tab,
kein iFrame). Die Annahme aus Abschnitt 0.5 trägt also.

Nebenbefund fürs Verkaufsgespräch: Viele Salons zahlen für so ein Tool
schon 40–70 € im Monat. 39 € für die komplette Website daneben wirkt in
dem Vergleich klein — das ist ein Argument, kein Einwand.
Quellen: [studiolution Vergleich 2026](https://www.studiolution.com/vergleich/) ·
[Shore](https://www.shore.com/us/industries/hair-salon-software)

### 10.8 Marktpreise ✅ Preis ist plausibel — eher zu niedrig
| Weg | Was der Markt nimmt |
|---|---|
| Baukasten (Wix, Jimdo, IONOS, Strato) | 15–50 €/Monat, Arbeit macht der Kunde |
| Freelancer | 800–2.500 € einmalig, Betreuung 49–99 €/Monat |
| Agentur-Mietmodell | 149–399 €/Monat |

**79 € einmalig + 39 €/Monat liegt unter dem billigsten Betreuungsangebot
am Markt** und auf Baukasten-Niveau — obwohl der Kunde bei uns gar nichts
selbst machen muss. Der Preis ist nicht zu hoch, er ist gut verteidigbar.

Die Einwandbehandlung „Zu teuer" im Pitch stimmt damit sachlich; die
genannten 2.000–4.000 € für eine Agentur sind für eine einmalige Website
realistisch, das Mietmodell liegt bei 149–399 €/Monat.
Quellen: [websitewissen.com](https://websitewissen.com/handwerker-website) ·
[webu.at](https://webu.at/blog/website-mieten/)

### 10.9 Domain-Verfügbarkeit ⏸️ wartet auf dich 🙋
Kann ich nicht prüfen — dein Nachname steht nirgends im Fahrplan. Sag ihn
mir, dann prüfe ich `dennis-[nachname].de` und `[nachname]-web.de` sowie
zwei, drei neutrale Alternativen.

### 10.10 Stockfotos für den Demo-Salon ✅ bestätigt
**Unsplash und Pexels erlauben beide die kommerzielle Nutzung ohne
Namensnennung.** Für den Demo-Salon „Salon Anna" also unbedenklich.

Zwei Grenzen, die eingehalten werden: Bilder dürfen nicht unbearbeitet
weiterverkauft werden, und man darf keine konkurrierende Bilddatenbank
daraus bauen — beides betrifft uns nicht.

Trotzdem gilt weiter: **Auf echten Kundenseiten keine Stockfotos.** Ein
Friseursalon mit Model-Fotos aus New York fällt in einer Kleinstadt sofort
auf und beschädigt genau das Vertrauen, das die Seite herstellen soll.
Stockfotos nur im Demo und in Lead-Vorschauen, dort mit Hinweisbanner.
Quellen: [Unsplash Lizenz](https://unsplash.com/de/lizenz) ·
[Pexels Lizenz](https://www.pexels.com/license/)

---

### Was sich am Plan ändert

1. **Hosting:** Netlify Free trägt dieses Modell nicht (harte Grenze,
   Seiten gehen offline). Vorschlag Cloudflare Pages — **deine
   Entscheidung**, siehe 10.3.
2. **Bewertungs-Upgrade (3.6):** entfällt ersatzlos, Googles Bedingungen
   verbieten es. Der manuelle Weg bleibt.
3. **Gewerbeanmeldung:** 35 €, nicht „20–60 €".
4. **Impressum:** kein OS-Plattform-Link mehr, VSBG-Satz freiwillig drin.
5. **Preis:** bestätigt, eher am unteren Rand des Marktes.

---

## 11. Arbeitsanweisungen für Claude Code

Lies zuerst dieses Dokument komplett, dann `STATUS.md`. Danach gilt:

1. **Dennis codet nicht.** Du führst alles Technische aus. Du erklärst nur, was er entscheiden oder außerhalb des Rechners tun muss – kurz, konkret, mit Deadline.
2. **Vor jeder Phase** eine Checkliste mit maximal 7 Punkten; **nach jedem Arbeitsblock** `STATUS.md` fortschreiben: erledigt / offen / nächster Schritt für Dennis.
3. **Fragen statt raten** bei allem, was Geld, Recht, Kundenkontakt oder Design-Geschmack betrifft. Technische Details entscheidest du selbst und erwähnst sie nur, wenn sie ihn betreffen.
4. **Kleine Schritte.** Ein Feature, ein Commit, ein Deploy. Nichts nebenbei umbauen. Vorschau-Links zum Prüfen am Handy schicken.
5. **Datenschutz und Sparkasse:** keine Daten aus Dennis' Arbeitgeberkontext, nie. Leads nur aus öffentlichen Quellen, minimal speichern. Auf Kundenseiten keine externen Scripts, keine Cookies, keine fremden Fotos.
6. **Alle Dokumente als Dateien** in `docs/` (Markdown; Verträge zusätzlich als PDF/DOCX). Nichts nur im Chat.
7. **Reihenfolge:** Phase 1 sofort, Akquise-Material (Phase 2/3) sobald die Demo live ist. Formalien (Abschnitt 2) nur vorbereiten; sie werden fällig, sobald Dennis in `STATUS.md` „Erstes Ja" einträgt – dann erinnere ihn sofort an Anzeige, Gewerbeanmeldung, ELSTER, Konto und die zwei Wochen Vorlauf vor der Unterschrift.
8. **Recherche-Punkte aus Abschnitt 10** in der ersten Session abarbeiten und die Ergebnisse direkt in diesem Dokument eintragen (🔎 entfernen, Wert eintragen, Quelle nennen).
9. **Kein Over-Engineering.** Kein CMS, keine Datenbank, keine Buchungslogik, kein Framework-Wechsel. Branchenneutral denken (Presets), aber nur das Friseur-Preset ausbauen. Wenn etwas 30 Minuten zu lange dauert, erst fragen.
10. Sprache: Deutsch, per Du, kurz.

### Erster Prompt für Claude Code (kopieren)
```
Lies FAHRPLAN.md vollständig. Lege STATUS.md an. Arbeite Abschnitt 10 (Recherche) ab
und trage die Ergebnisse in FAHRPLAN.md ein. Starte dann Phase 1, Woche 1:
Repo-Struktur nach 3.1, Astro + Tailwind, salon.json-Schema nach 3.4 (branchenneutral, Preset „friseur"),
Theme „Klar", Sektionen Hero + Leistungen + Kontakt, Demo-Daten für
„Salon Anna – Pfaffenhofen". Deploy auf Netlify und schick mir den Vorschau-Link.
Frag mich vorher nur, wenn es um Geld, Recht oder Design-Geschmack geht.
```
