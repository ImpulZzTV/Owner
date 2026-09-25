# KMF MEDIA – Markenbuch & Pitchdeck

| Datei | Inhalt |
|---|---|
| `KMF-MEDIA_Markenbuch.pdf` | Markenlinie (14 Seiten, A4 quer): Haltung, Werte, Wortmarke, Farben, Schriften, Hierarchie, Elemente, Raster, Bildsprache, Tonalität, Checkliste |
| `KMF-MEDIA_Pitchdeck_Preise_2026.pdf` | Pitchdeck mit Preisliste (10 Seiten), neu gesetzt nach dem Markenbuch |
| `src/` | HTML-Quellen, `brand.css` (Design-Tokens), Schriften, Bilder |

Grundlage: Analyse von kmf-media.de (Stand 09/2026).

## Kern der Markenlinie

- **Farben:** Night `#08090A` (Grund), Graphite `#13161A` / Carbon `#0A0C0E` (Flächen), Line `#1C2024`, White, Steel `#7A8088`, Akzent Ice `#9AD7F7`
- **Schriften:** Archivo 500 (Headlines in Versalien, enge Laufweite), Instrument Sans 400/500 (Text, Labels, Buttons)
- **Claim:** Filme, die bleiben.

## PDFs neu erzeugen

```bash
cd src
node render.mjs pitchdeck.html ../KMF-MEDIA_Pitchdeck_Preise_2026.pdf
node render.mjs markenbuch.html ../KMF-MEDIA_Markenbuch.pdf
```

Das Skript `render.mjs` nutzt Playwright mit Chromium. Pfade im Skript ggf. anpassen.

## Bewerbungsvorlage (A4 hoch, 4 Seiten)

`src/bewerbung.html`: Deckblatt, Anschreiben, Lebenslauf, Arbeitsproben im Markenstil.

Persönliche Daten stehen in `src/bewerbung/profil.js`. Die Datei ist per `.gitignore` ausgeschlossen, weil dieses Repo öffentlich ist.
Zum Einrichten `profil.example.js` nach `profil.js` kopieren und ausfüllen. Das Lebenslauf-Foto liegt als `src/img/lebenslauf-foto.jpg` (ebenfalls ignoriert).

Pro Agentur über URL-Parameter anpassen:

```bash
cd src
node render.mjs "bewerbung.html?agentur=Pixelwerk GmbH&ansprechpartner=Frau Lehmann&strasse=Hauptstr. 1&ort=01067 Dresden&stelle=Videograf (m/w/d)&warum=...&eintritt=ab sofort" ../Bewerbung_Pixelwerk.pdf
```

| Parameter | Bedeutung |
|---|---|
| `agentur`, `strasse`, `ort` | Empfänger |
| `ansprechpartner` | „Frau …“ / „Herr …“ steuert die Anrede |
| `form=du` | Du-Form (Standard: Sie) |
| `vorname` | Vorname für „Hallo …“ in der Du-Form |
| `stelle` | Stellenbezeichnung (Standard: Videograf & Content Creator) |
| `initiativ=1` | Betreff „Initiativbewerbung als …“ |
| `warum` | Ein Satz, warum genau diese Agentur |
| `eintritt`, `datum` | Starttermin, Datum (Standard: heute) |

Nicht gesetzte Felder erscheinen als eisblau markierte Platzhalter.
