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
