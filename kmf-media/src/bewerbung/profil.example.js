// Beispiel-Profil. Kopieren nach "profil.js" und mit echten Daten füllen.
// profil.js ist per .gitignore ausgeschlossen, damit Kontaktdaten nicht ins öffentliche Repo gelangen.
window.PROFIL = {
  vorname: "Vorname",
  nachname: "Nachname",
  rolle: "Videograf & Content Creator",
  strasse: "Musterstraße 1",
  ort: "01234 Musterstadt",
  stadt: "Musterstadt",
  telefon: "0170 0000000",
  email: "name@beispiel.de",
  web: "kmf-media.de",
  instagram: "@kmf_media",

  profil: "Zwei, drei Sätze über dich: Was du machst, seit wann und für wen.",

  erfahrung: [
    { zeit: "2021 – heute", titel: "Position", ort: "Firma", punkte: ["Aufgabe", "Aufgabe"] },
  ],
  bildung: [
    { zeit: "2009 – 2015", titel: "Ausbildung", ort: "Schule / Kammer", punkte: [] },
  ],
  software: ["DaVinci Resolve", "Final Cut Pro"],
  technik: ["Kamera", "Gimbal"],
  formate: ["Reels", "TikTok", "YouTube"],
  sprachen: [ { name: "Deutsch", stufe: "Muttersprache" } ],
  anschreiben: {
    einstieg: (stelle, agentur) => `Einstieg: Wer du bist, was du machst – und dass du dich als ${stelle} bei ${agentur} bewirbst.`,
    punkte: [
      "<b>Stärke 1.</b> Konkretes Beispiel aus deiner Arbeit.",
      "<b>Stärke 2.</b> Konkretes Beispiel aus deiner Arbeit.",
      "<b>Stärke 3.</b> Konkretes Beispiel aus deiner Arbeit.",
    ],
    haltung: "Ein Absatz zu deiner Arbeitsweise und was dich von anderen unterscheidet.",
  },
};
