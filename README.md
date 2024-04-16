# Moment3 i kursen Dt208g - Programmering i TypeScript

## Om sidan

Den här webbplatsen är en exempelwebbplats utvecklad i Angular och är ett delmoment i kursen DT208G - Programmering i TypeScript. Uppgiften gick ut på att skapa en webbplats i ramverket Angular. Webbplatsen innehåller TypeScript-kod för enhetsomvandlaren och använder scss för styling.

## Lösningar

**Undersidor**
Webbplatsen innehåller tre undersidor, en startsida med enkel information, en sida för enhetskonvertering och en sida som beskriver webbplatsen.

### Enhetskonvertering
Enhetskonverteraren är byggd som en egen komponent och är implementerad på en undersida. Konverteraren använder Angulars ngmodel och databinding för att hämta och skriva ut data. Jag valde dock att skriva ut svar och hämtad data i olika fäll med tillägg för enheter för att skapa tydlighet. Det blev dock lite rörigt att ha alla funktioner på en liten yta. Stylingen försöker likna miniräknaren på "hero"-bilden på startsidan. 

### Bilder
Bilder som är implementerade är en "hero"/banner-bild på startsidan, en namelogotyp i footern och en icon i headern. Bilderna lades till som vanliga HTML src-länkar. 

### Navigering
I header-komponenten är navigeringen skapad och i den en nav-tagg innehållandes en lista med länkar. Header-komponenten använder modulerna routerLink och routerLinkActive för att kunna länka mellan sidorna utan att hela sidan laddas om. routerLinkActive används för att en klass ska fetmarkera tillhörande länk till aktiv sida. 

### Styling
Scss används för styling. Styling används globalt men främst i .scss-filerna för respektive komponent. 

###K omponenter
Sex komponenter används på webbplatsen. En för varje undersida, en för enhetsomvandlaren, en för footer och en för header.


## Utveckling

Nedan är en beskrivning på engelska hur projektet kan köra. För det krävs också att Angular finns installarat på datorn och för att sedan skapa den färdiga versionen av webbplatsen skrivs "ng build" i terminalen i navigerad till projektets katalog.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
