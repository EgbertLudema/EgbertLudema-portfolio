---
title: Tool Steunpunt Friesland
description: Als lead developer was ik verantwoordelijk voor het ontwikkelen van deze webapplicatie tijdens een schoolproject. 
thumbnail: /assets/projects/steunpunt-friesland/Screenshot_Tool_SteunpuntFriesland.png
finished: Jul 2024
date: 2024-07-01
tags: ["Front-end", "Back-end"]
links:
  - url: "https://github.com/EgbertLudema/Steunpunt-Friesland"
    caption: "github"
  - url: "https://www.youtube.com/watch?v=by2yV81nWoo"
    caption: "video"
gallery:
  - src: "/assets/projects/steunpunt-friesland/login.png"
    alt: "Login Steunpunt Friesland"
    caption: "Login scherm"
  - src: "/assets/projects/steunpunt-friesland/dashboard.png"
    alt: "Dashboard Steunpunt Friesland"
    caption: "Dashboard/landings pagina"
  - src: "/assets/projects/steunpunt-friesland/locations.png"
    alt: "Alle locaties Steunpunt Friesland"
    caption: "Alle locaties"
  - src: "/assets/projects/steunpunt-friesland/locations_filtered.png"
    alt: "Gefilterde locaties Steunpunt Friesland"
    caption: "Gefilterde locaties"

---

## Waarom Steunpunt Friesland?

Tijdens het schoolproject voor de minor *The Next Web* op CMD NHL Stenden kreeg ons groepje de opdracht om een probleem van **Steunpunt Friesland** op te lossen. Om dit effectief aan te pakken, moesten we eerst begrijpen wat Steunpunt Friesland doet en waar de knelpunten lagen.

### Wat is Steunpunt Friesland?

**Steunpunt Friesland** is een stichting die mensen ondersteunt bij het vinden van een geschikte opvang- of zorgboerderij. Momenteel beheert de organisatie meer dan 200 locaties waar cliënten naartoe worden verwezen.

**Het probleem:**
Steunpunt Friesland had geen goed overzicht van al hun 200+ locaties. Dit maakte het lastig voor medewerkers om efficiënt te werken en cliënten naar de juiste plekken te sturen.

<hr class="hr_secondair">

## Onze oplossing

Om dit probleem op te lossen, hebben we een tool ontwikkeld waarmee medewerkers eenvoudig locaties kunnen filteren op verschillende factoren, zoals:
- **Locatie**
- **Interesses/sectoren**
- **Maximale leeftijd** (bijvoorbeeld tot 15 jaar)
- **Naam van de locatie**

### Hoe hebben we dit gerealiseerd?

We gebruikten het [Laravel framework](https://laravel.com/) in combinatie met [Filament](https://filamentphp.com/) om de tool te ontwikkelen. Dankzij de ingebouwde CRUD-functionaliteiten (Create, Read, Update, Delete) van Filament konden we snel een gebruiksvriendelijk adminpaneel bouwen. Hierdoor kunnen medewerkers eenvoudig:
- Nieuwe locaties toevoegen
- Bestaande locaties aanpassen
- Locaties verwijderen
- Sectoren aanpassen
- Sectoren toevoegen
- Sectoren verwijderen

Binnen korte tijd hebben we een werkende versie van de tool opgeleverd, waarmee Steunpunt Friesland nu efficiënter en overzichtelijker kan werken.