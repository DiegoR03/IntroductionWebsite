# IntroductionWebsite

## Leerdoelen
1. Leren animeren met JavaScript en CSS
2 - Vormen maken met CSS
3 - DOM manipulatie (met API-data)
4 - Het genereren van html-elementen op basis 

## Checkout vragen?
- Wat heb ik vandaag gedaan?
- Hoe lang duurde het?
- Wat heb ik geleerd?
- Wat ga ik morgen doen?

## 02-02/2026
Maandag 02/02 ben ik begonnen met het uitwerken van het basis idee van de website. Ik heb nagedacht over hoe ik de informatie wil vertonen en welk thema ik wil gaan uitwerken. Ik heb uiteindelijk gekozen voor:
- Thema: Een ruimte thema, uit mijn eigen interesse voor de ruimte.
- Reden: Leuk om voor een one-pager uit te werken + goede light/dark mode.

Daarnaast heb ik de eerste CSS uitgewerkt zodat er een verschil was tussen de verschillende sections. Dit was de eerste dag dus ik had nog niet veel specifieke doelen voor mijzelf, maar de doelen die ik heb behaald zijn:
- Simpele CSS basis opgezet
- Basis HTML opgezet, link gemaakt tussen de HTML en CSS
- Eerste Javascript bestand gemaakt.

## 03-02/2026
Dinsdag heb ik mij gefocust op het uitwerken van mijn idee in CSS. Ik ben begonnen op deze dag met het toevoegen van geanimeerde objecten om de website zelf meer tot leven te brengen. Door middel van @keyframes in het CSS bestand kon ik de objecten van links naar rechts laten bewegen binnen een bepaalde tijd. Animeren binnen CSS is ook één van mijn leerdoelen, dus ik was blij dat ik dit meteen kon oppakken. Ik ben begonnen met het animeren van een satteliet. Dit heb ik gedaan met:

       @keyframes flyClose {
        from {
            transform: translateX(calc(50vw)) rotate(360deg) translateY(calc(-5vh));
            opacity: 1;
        }
        to {
            transform: translateX(calc(-100vw)) rotate(0deg);
            opacity: 1;
        }
    }

    @keyframes flyFar {
        from {
            transform: translateX(calc(-100vw)) rotate(0deg);
            opacity: 1;
        }

        to {
            transform: translateX(calc(50vw)) rotate(360deg) translateY(calc(7vh));
            opacity: 1;
        }
    }
Deze twee verschillende animaties lieten mij makkelijk twee verschillende soorten groepen sattelieten maken zonder dat ik rekening hoefte te houden met de richting. Hoewel deze animatie vrij simpel is, was het voor mij vrij nieuw om mee te werken en ben ik best blij met het resultaat. Daarnaast heb ik ook gewerkt aan het toevoegen van tekst binnen de website. Ik wilde alles in het midden van de pagina hebben op een natuurlijke manier zonder het voelde als een forms document. De doelen die ik heb gehaald vandaag zijn:
- Leren animeren met CSS
- Stijlen van typografie

## 04-02/2026
Ik ben de dag begonnen, voor ongeveer een uur, met het verwerken van een nieuw idee voor de achtergrond van de eerste paar sections van de website. Om het gevoel te geven dat je in de ruimte zit wil ik op de achtergrond sterren maken die random te voorschijn komen en verdwijnen binnen een bepaalde periode aan tijd. Dit heb ik gedaan tot ongeveer 10:30. Na dit kort uurtje heb ik een workshop gevolgd over de 'Basics van API'. Dit was een hele nuttige workshop. Ik heb hier geleerd hoe we niet alleen de data van onszelf kunnen zien en gebruiken, maar ook hoe we filters kunnen gebruiken in de url van een pagina en hoe we zelfs data van andere personen kunnen gebruiken in onze website. 

<img width="1433" height="42" alt="image" src="https://github.com/user-attachments/assets/c7c56224-6332-4bbf-8437-51a9bc53a4a3" />

### Check-out
- 09:30 begonnen met introductie website verder uitwerken, css verbeterd en html elementen toegevoegd. 
- 10:30 Ik heb een workshop gevolgd over de basics van een API verwerken op een web pagina.
- 12:30 Daar na heb ik verder gewerkt van  tot 15:00 aan mijn website. Ik heb animaties toegevoegd doormiddel van CSS en Javascript, ik heb flikkerende sterren toegevoegd, CSS wolken, een maan image en het noorderlicht.
- Ik heb geleerd om met een svg 'lines' te tekenen van punt naar punt, ik heb het noorderlicht weten temkane met achtergrond kleuren en een 'blur' en ik heb wolken toegevoegd die schaalbaar zijn en makkelijk toe te voegen zijn.  Daarnaast heb ik geleerd hoe ik sneller en beter animaties kan maken met CSS.
- Morgen ga ik verder werken aan het toevoegen van de informatie op mijn website. Op dit moment staan er placeholders van informatie, maar ik wil morgen gebruik maken van de API. 

Deze workshop gaf mij niet alleen een geweldige opzet om mijn eigen informatie te verwerken in mijn website, maar kregen wij ook te horen tijdens deze workshop dat wij de informatie van andere studenten moeten gaan verwerken ergens later in het project. De doelen die ik heb behaald vandaag zijn:
- Een begin maken aan complexere CSS in combinatie met Javascript
- Een begin maken aan het uitwerken van het API gedeelte van mijn website

## 05/02/2026
Ik begon deze dag met het verder uitwerken van het API gedeelte van mijn website. De workshop van 04/02 heeft mij een hele goede opzet gegeven, en ik ben hier verder mee gaan werken. Het eerste gedeelte dat ik wilde uitwerken van de API was mijn eigen gedeelte. De workshop heeft mij al ver op weg geholpen, maar nu was het aan mij om deze informatie goed te werken op mijn website. Uiteindelijk heb ik ervoor gekozen om mijn API informatie te verwerken via DOM-manipulatie in javascript. Dit was makkelijker te verwerken voor mij zonder dat ik constant tussen de html en javascript heen moet switchen.

<img width="610" height="191" alt="image" src="https://github.com/user-attachments/assets/10eaa9be-6d8a-4738-ae89-d20dc5724ad5" />

Naast het uitwerken van deze API informatie heb ik ook een workshop gevolgt over responsiveness van een website. Tijdens deze workshops kwam ik erachter datik best veel informatie al wist, maar er waren ook nieuwe elementen waar ik nog nooit van heb gehoord. Deze workshop was verder wel goede herhaling voor mij en heeft mij genoeg opgefrist dat ik zelf weer helemaal aan de gang kan gaan. Ik heb naast de workshop ook nog twee andere elementen uitgewerkt, light/dark mode en een table of content. Ik heb een media query gebruikt om light en dark mode toe te voegen in mijn website, zo is mijn website qua visualiteit altijd naar wens. Ook heb ik eent able of content gemaakt, boven aan mijn website heb ik een sterrenbeeld gemaakt met alle punten die je binnen mijn website kan bezoeken, zo hoef jezelf niet lang te scrollen en hoef je maar één keer op een knop te klikken.
<img width="1634" height="870" alt="image" src="https://github.com/user-attachments/assets/afa39bb4-fdd5-4759-964a-4b3de1448c4d" />


### Check-out
- 09:30 Verder gaan werken aan het uitbreiden en opvullen van mijn introductie website
- 10:00 API werkend gekregen op de website
- 11:00 Workshop gevolgd over responsiveness van Sanne.
- 12:30 Korte pauze genomen om te eten
- 13:00 Verder gewerkt aan de website, animaties gemaakt, placeholder vervangen met nieuwe foto's en informatie + Light/dark mode toegevoegd
- 16:00 Gesprek gehad met Jeppe over mijn progessie en mijn plannen voor morgen.

- Ik heb geleerd dat CSS en Javascript snel op kunnen bouwen waardoor de website langzamer/laggy aan kan voelen. Ik moet duidelijk meer gaan opletten op de optimalisatie van mijn website. Ook ben ik erachter gekomen dat sommige elementen op schaal maken best ingewikkeld kan zijn om goed te krijgen op een website.
- Morgen ga ik verder werken aan het verbeteren en optimaliseren van mijn website, en ik wil meer informatie uit de API laten zien op de website en dit goed vertonen en niet in de vorm van losse tekst.

## 06-02/2026
Op  vrijdag 06/02 ben ik in de ochtend gelijk begonnen met coderen, vandaag is namelijk de tussentijdse presentatie; ik wilde zo ver mogelijk zijn zodat ik eventuele feedback kon verzamelen over mijn website. Ik ben gelijk begonnen met het afronden van de sterren waar ik mee bezig was op 04/02, deze had ik binnen een uur afgerond omdat ik een stukje code heb gebruikt die ik een jaar geleden heb geschreven:
<img width="915" height="455" alt="image" src="https://github.com/user-attachments/assets/847bff21-1185-4391-812c-5ab83083b78c" />
Na het afronden van de sterren ben ik verder gegaan met het tentoonstellen van de API informatie, en dit was meer ingewikkeld dan ik had gepland. Op de eerste dag had ik als plan gemaakt dat elke section zijn eigen container zou hebben met een thema dat heeft te maken met de section, maar tijdens het uitwerken liep ik tegen probleme op. Het uitwerken van deze specifieke containers was net iets te moeilijk voor mijn niveau, uiteindelijk heb ik maar 1 container af kunne krijgen voor het moeten presenteren van mijn website.

Na deze korte maar stressvolle periode hebben wij onze tussentijdense presentatie gehad in de vorm van een mini-markt. Hier kon je zelf rond lopen en kon je ook naar andere websites kijken van andere klasgenoten. Het was interessant om te zien hoe ver andere klasgenoten waren en het gaf mij ook een gevoel dat ik het uiteindelijk niet super slecht deed. Ook heb ik wat feedback ontvangen over mijn website:
- Heel leuk thema!
- Content containers nog niet afgerond/netjes (Zoals verwacht)
- Light en darkmode toggle button toevoegen
Op basis van deze feedback heb ik plannen gemaakt voor volgende week:
- Content containers afmaken en verduidelijken
- Light en dark toggle button verwerken in de maan/zon

Aan het eind van de dag heb ik meerdere doelen behaald:
- Meerder CSS elementen afgerond
- Feedback opgehaald over mijn website
- Plannen voor volgende week vast gelegd

## Samenvatting Week 1
Ik vond mijn eerst week op deze minor heel erg leuk en super leerzaam. Hoewel ik van al best wat informatie afwist, had ik vaak een goede opfrisser of heb ik zelfs nieuwe dingen geleerd. Ik heb nu al tijdens deze minor meer geleerd over animaties dan ik ooit dacht dat ik zou leren en ik ben heel trots op wat ik tot nu toe heb bereikt. Elke workshop heeft tot nu toe echt veel nut gehad en heeft mij ook zeer geholpen tijdens het ontwikkelen van mijn website. Naar de workshop heeft de 'lecture' van Killian Valkhof ook heel erg geholpen met het verwerken van CSS binnen mijn website. Hij liets duidelijk zien wanneer ik CSS moest gebruiken en wanneer je echt Javascript moet gebruiken op je website. 

## 09-02/2026
Op deze dag heb ik helaas niet veel bereikt... Ik ben in de ochtend naar school gegaan om de presentatie te bekijken over de extra eis voor onze website, hier kreeg ik te horen dat wij andere studenten ook een plaats moeten geven binnen onze website. Hoe we het doen mogen wij zelf bepalen, zolang wij deze data uit de API halen. Helaas ben ik daarna ziek naar huis gegaan...

Eenmaal thuis heb ik nog kort doorgewerkt het verbeteren van de andere sections en de content containers voor andere sections mooier maken zodat de website voelt als één geheel. Ik heb ook een start gemaakt aan het uitwerken van de API-data van andere studenten, maar kwam helaas niet ver doordat ik zware hoofdpijn kreeg...

## 10-02/2026
Op dinsdag 10/02 voelde ik mij een stuk beter, helaas had ik nog wel veel last van hoofdpijn en hoesten, maar ik heb toch geprobeert verder te werken aan mijn website.
Op deze da ben ik veel bezig geweest met het bijwerken van mijn API data en deze te verwerken binnen mijn website. De docent heeft aangekondigd dat er nieuwe API velden worden gemaakt in de bestaande API die wij gebruiken om onze website op te vullen, hier zag ik mijn kans om meer verschillende velden te gebruiken binnen mijn website.

<img width="1073" height="893" alt="image" src="https://github.com/user-attachments/assets/4e1d1818-c4ac-4d42-8236-a4be214928fa" />
Door middel van een switch case kan ik nu per section makkelijk kiezen welke informatie waar wordt geplaats zonder dat ik mij zorgen hoef te maken over een rommelige bende in het html document. Om ervoor te zorgen dat deze informatie ind e goede elementen belanden heb ik een functie aangemaakt die alleen de elementen met een bepaalde ID selecten:

<img width="563" height="240" alt="image" src="https://github.com/user-attachments/assets/f5d7241c-1757-4a3e-8711-4911f15d3e61" />

Toen ik mijn eigen API-data had verwerkt in mijn website ben ik verder gegaan met een begin maken aan het uitwerken van de API-data van andere studenten. Mijn idee is om elke student een eigen 'planeet' te geven in een zonnestelsel, hoewel dit plan er was had ik geen idee waar ik moest beginnen. Ik begon met het opzoeken van de data van mijn eigen klas. In eerste instantie gebruikte ik de kennis van de workshop die ik eerder in week 1 heb gevolgd over het gebruiken van API-data. Eenmaal bezig met de code realiseerde ik me dat het meer complex ging zijn dan ik dacht, dus in combinatie met de kennis die ik eerder heb opgedaan en wat hulp van mijn andere klasgenoten heb ik uiteindelijk de correcte API-link gekregen waarmee ik mijn planeten kon maken. Daarna was het een kwestie van CSS-styling en een extratje toevoegen. Elke planeet volgt de favoriete kleur van de student die in de API staat aangegeven.

<img width="1834" height="879" alt="image" src="https://github.com/user-attachments/assets/ae3a6542-f3db-4d02-9f16-3719b9d53087" />

Aan het eind van de dag heb ik meerdere doelen bereikt, maar helaas niet zoveel als ik had gehoopt:
- Mijn eigen API-data compleet gemaakt
- API-data van andere studenten verwerkt in mijn website op een creatieve manier
- Een nette en herbruikbare manier gemaakt om mijn APOI-data door middel van DOM-manipulatie toe te passen in mijn html bestand

## 11-02/2026
Dit is mijn laatste dag om mijn website af te maken, deze dag voelde ik mij alweer een stuk beter, maar de eerste helft van de dag begon ik slecht met veel hoofdpijn. Toen de hoofdpijn eenmaal stopte ben ik gelijk verder gegaan aan het developen van mijn website.
Ik begon met mijn eerste doel verwerken van Week 1: Content containers afmaken en verduidelijken. Ik begon met de containers voor de tweede section. Inplaats van platte tekst paragraven heb ik elk stukje tekst verstopt achter een satteliet waar je op moet klikken, als je op de satteliet klikt dan komt er een overlay tevoorschijn waar je kort wat informatie over mij ziet. 
<img width="618" height="314" alt="image" src="https://github.com/user-attachments/assets/f9190f33-4481-4edf-8c5f-2511d0119bc4" />
<img width="496" height="339" alt="image" src="https://github.com/user-attachments/assets/f9a98449-79c7-498a-b0b7-f42a00e239b2" />

Als tweede ben ik verder gegaan met het uitwerken van mijn leerdoelen binnen mijn website. Voor deze section kon ik niet veel unieks verzinnen om er geen containers van te maken sinds ik vier leerdoelen heb, maar ik heb de leerdoelen wel overzichtelijk gemaakt en zelfs de zelfde achtergrond kleur gegeven als het noorderlicht
<img width="922" height="458" alt="image" src="https://github.com/user-attachments/assets/e1fe3b1f-4fb4-4a7f-bef9-3d50feaa728d" />

Voor mijn derde section heb ik qua opmaak niet veel verandert vergeleken met week 1. Ik heb kleuren aangepast om de pagina wat meer leesbaar te maken en heb de inhoud van de <li> items aangemaakt naar meer relevante informatie die passen op dit stuk van de pagina. Ook heb ik de animatie van de tekstvlakken wat rustiger gemaakt zodat je niet afgeeidt raakt van de drukke bewegingen.
<img width="924" height="493" alt="image" src="https://github.com/user-attachments/assets/b76f3d0a-a0a0-414e-93ee-baccf83be46d" />

En onderaan de pagina heb ik de landing zone verewerkt, hier land je op meer persoonlijke data die weinig mensen van mij weten. Met deze section had ik het meest moeite om leuk te maken binnen te tijd die ik had, dus kan het ook wat simpeler en 'unfinished' overkomen met wat simpele shading en animaties vergeleken met de rest van de website. Ondanks het feit dat ik wat minder trots ben op dit gedeelte ben ik wel blij dat ik het alsnog af heb gekregen ondanks dat ik ziek ben geweest.
<img width="922" height="451" alt="image" src="https://github.com/user-attachments/assets/ce0d10cb-af14-48e6-ae44-149fed5abcd1" />

Als laatst heb ik gewerkt aan de toggle button voor light en dark mode. Dit was één van mijn andere doelenv an week 1 en vond ik wel belangrijk om te halen voor het eind van de odpracht. Deze knop heb ik verwerkt in de zon/maan boven aan de pagfina en is makkelijk te vinden en te bedienen.
<img width="924" height="436" alt="image" src="https://github.com/user-attachments/assets/ab21672c-d192-4e2f-a91c-0efec398f0ba" />
<img width="924" height="436" alt="image" src="https://github.com/user-attachments/assets/e1a3bddb-76e8-4092-9435-ea18cc4fb639" />

Dit was één van de snelste onderdelen die ik heb gemaakt voor mijn website maar was wel één van de interessante onderdelen. Ik dacht dat het veel makkelijker kon gaan in de code, maar uiteindelijk moest ik wel wat omweggetjes maken in de code zodat alles soepell  verliep tijdens het overstappen tussen de thema's.

Ik heb gelukkig al mijn doelen bereikt en heb zelfs mijn website af kunnen krijgen binnen de tijd die mij is gegeven ondanks ziekte tijd:
- Alle sections mooie opmaak gegeven
- Teksten hebben een mooie container
- Light en Dark mode geimplementeerd
- Responsive
- Andere studenten hun API-data

## Samenvatting Week 2
Deze week was best pittig voor mij. Grotendeels van de week ben ik ziek geweest en niet aanwezig geweest op school, het was best moeilijk om alles bij te houden ondanks dat ik afwezig was. Wel heb ik alsnog veel geleerd over Javascript en CSs in mijn eigen tijd. Mij site heeft hele grote sprongen genomen waar ik heel trots over ben en ik kan met zekerheid zeggen dat ik niet meer had kunnen doen in de gegeven tijd die wij hebben gehad. 

