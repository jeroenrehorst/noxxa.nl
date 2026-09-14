// AUTO-GENERATED from the original noxxa.nl pages. Do not edit by hand.
export interface ContentGroup {
  heading: string;
  subheading?: string;
  paragraphs: string[];
}

export interface StrongParagraph {
  label: string;
  text: string;
}

export type ContentBullet = string | StrongParagraph;

export interface ContentDownload {
  // Path relative to the web root, e.g. "assets/documentatie-content/...pdf".
  file: string;
  label?: string;
}

export interface ContentVideo {
  src: string;
  title: string;
}

export interface ContentBlock {
  heading: string;
  // Optional secondary heading rendered under the main heading.
  subheading?: string;
  paragraphs: string[];
  bullets: ContentBullet[];
  // Optional heading rendered directly above the bullet list.
  bulletsHeading?: string;
  // Optional paragraphs rendered after the bullet list.
  afterBullets?: string[];
  image: string | null;
  // Optional file/URL the image links to when clicked (instead of opening the lightbox).
  imageHref?: string;
  // Paragraphs with an inline bold label.
  strongParagraphs?: StrongParagraph[];
  // Extra headed paragraph groups rendered inside the same section as the block.
  groups?: ContentGroup[];
  // Optional download links rendered at the end of the block text.
  downloads?: ContentDownload[];
  video?: ContentVideo;
}

export interface CategoryContent {
  slug: string;
  heroImage: string | null;
  blocks: ContentBlock[];
}

export const CATEGORY_CONTENT: Record<string, CategoryContent> = {
  "binnendeurbeslag": {
    "slug": "binnendeurbeslag",
    "heroImage": "assets/products/image-binnendeurbeslag.svg",
    "blocks": [
      {
        "heading": "",
        "paragraphs": [
          "Ben je op zoek naar hoogwaardig binnendeurbeslag dat geschikt is voor intensief gebruik? Overweeg dan de Noxxa collectie. Noxxa biedt een uitgebreid assortiment aan binnendeurbeslag, vervaardigd uit duurzame materialen met een slijt- en krasvaste afwerking.",
          "De Noxxa binnendeurbeslag collectie is onderverdeeld in drie productlijnen: Basic, Premium en Excellent. Alle binnendeurschilden hebben een uniform gatenpatroon, waardoor de verschillende lijnen uitwisselbaar zijn en eenvoudig te upgraden. Met de boormal (art. NX102158) is een snelle en foutloze montage mogelijk, wat vooral bij grote hoeveelheden voor aanzienlijke kostenbesparing kan zorgen."
        ],
        "bullets": [],
        "image": "assets/products/2439101.png"
      },
      {
        "heading": "Noxxa Basic",
        "paragraphs": [
          "De Basic lijn biedt uitgebreide keuzemogelijkheden voor elke deur. Gemaakt van aluminium met een mat geborstelde F1 afwerking, is deze lijn beschikbaar in ovaal of rechthoekig schild (195x43 mm) en ronde rozet. Deze zijn te combineren met een breed scala aan deurkrukken. De schilden zijn iets groter dan standaard, waardoor ze ideaal zijn voor renovaties en oude gaten netjes bedekken.",
        ],
        "bullets": [],
        "image": "assets/products/NX102175.png"
      },
        {
        "heading": "",
        "paragraphs": [
          "In geborsteld RVS biedt deze lijn de drie meest populaire krukken (D-model, L-model en haaks model) op rozet, allemaal voorzien van een veermechanisme op een stalen rozet met nokken, geschikt voor zeer intensief gebruik."
        ],
        "bullets": [],
        "image": "assets/products/Basic-usp.webp"
      },
      {
        "heading": "Noxxa Premium",
        "paragraphs": [
          "Het Noxxa Premium assortiment bevat een ruime keuze aan lang- en kortschilden, rozetten, deurkrukken, deurknoppen en deurgrepen, zowel geperst als gegoten. Ze zijn afgewerkt in een zwarte of mat geborstelde F1 finish, wat zorgt voor een onderhoudsarm en krasvast product. De rozetten hebben stalen onderrozetten voor een onzichtbare bevestiging, de gegoten beslagen hebben rubberen onderringen voor extra stevigheid en bescherming tegen lakbeschadigingen. De Premium kortschilden zijn 200x42 mm, ideaal voor het afdekken van bestaande gaten, met renovatie langschilden van 270x46 mm als optie. Als optie is er ook een vastdraaiende bevestiging van de deurkruk op de gegoten kortschilden mogelijk."
        ],
        "bullets": [],
        "image": "assets/products/usp-rubberringen.png"
      },
      {
        "heading": "Noxxa Excellent",
        "paragraphs": [
          "De Excellent lijn biedt een uitgebreid assortiment in geborsteld RVS deurbeslag van topkwaliteit. De SDC (schroefdraadconstructie) zorgt voor een stevige, spelingvrije verbinding tussen schild en deurkruk. Deze deurkrukken in combinatie met schild of rozet bieden een uitzonderlijk hoge trekweerstand. De Excellent schilden zijn verkrijgbaar in kort-, lang- en plaatschilden, en de rozetten in vierkant of rond. De deurkrukken zijn zowel links als rechts toepasbaar en hebben een strakke afwerking dankzij de unieke schroefdraadconstructie. De schilden en rozetten zijn beschikbaar met zowel verdekte als zichtbare bevestiging, en deurkrukken zijn verkrijgbaar in geveerde en ongeveerde uitvoeringen. Deze lijn is ideaal voor intensief gebruik in combinatie met een luxe uitstraling en is ook geschikt voor rook- en brandwerende deuren."
        ],
        "bullets": [],
        "image": "assets/products/Excellent-usp-met-tekst.png"
      }
    ]
  },
  "buitendeurbeslag": {
    "slug": "buitendeurbeslag",
    "heroImage": "assets/products/image-buitendeurbeslag.svg",
    "blocks": [
      {
        "heading": "",
        "paragraphs": [
          "Op zoek naar eigentijds buitendeurbeslag dat bestand is tegen intensief gebruik? Noxxa biedt een uitgebreide selectie die aan jouw behoeften voldoet. Het buitendeurbeslag van Noxxa is vervaardigd uit hoogwaardige materialen en heeft een duurzame, slijt- en krasvaste afwerking.",
          "Noxxa deurbeslag is verkrijgbaar in drie productlijnen: Basic, Premium en Excellent."
        ],
        "bullets": [],
        "image": null
      },
      {
        "heading": "SKG en PKVW - Veiligheid gegarandeerd",
        "paragraphs": [
          "Het veiligheidsbeslag van Noxxa voldoet aan de strengste veiligheidseisen en heeft een SKG*** certificering. De Basic en Premium lijnen voldoen tevens aan de normen van het Politie Keurmerk Veilig Wonen (PKVW). Dit biedt niet alleen maximale bescherming voor je woning, maar kan ook leiden tot een aanzienlijke korting op je verzekeringspremie. Bij een PKVW-gecertificeerde woning kan de premie tot wel 20% lager uitvallen."
        ],
        "bullets": [],
        "image": "assets/products/NX100000_v2.png",
        "groups": [
          {
            "heading": "Eenvoudige Montage",
            "paragraphs": [
              "De langschilden van de drie productlijnen worden standaard geleverd met twee bevestigingssetjes voor verschillende deurdiktes. Alle langschilden hebben hetzelfde gatenpatroon, waardoor ze eenvoudig te monteren en onderling uitwisselbaar zijn. Met de speciale boormal voor veiligheidslangschilden kun je de schilden snel en foutloos monteren. Dit kan zeker bij grotere aantallen al snel een flinke besparing opleveren."
            ]
          }
        ]
      },
      {
        "heading": "Noxxa Basic",
        "paragraphs": [
          "De Basic lijn biedt een compleet assortiment aluminium veiligheidsbeslag. Verkrijgbaar als langschild (250x50mm) in rechthoekige, curve of ovale modellen. Er zijn opties beschikbaar met en zonder kerntrekbeveiliging, evenals voor elektronische cilinders. De garnituren worden standaard zonder kruk geleverd, zodat je uit het brede assortiment een bijpassende deurkruk naar eigen smaak kunt kiezen. Door verschillende schilden, knoppen en krukken te combineren, zijn talloze combinaties mogelijk. Noxxa Basic veiligheidsbeslag is vervaardigd uit hoogwaardig aluminium profielmateriaal met een mat geborstelde F1 afwerking, die onderhoudsarm is en minder krasgevoelig."
        ],
        "bullets": [],
        "image": "assets/products/Afbeelding_basic.png"
      },
      {
        "heading": "Noxxa Premium",
        "paragraphs": [
          "Noxxa Premium deurbeslag biedt uitstekende kwaliteit en is beschikbaar als langschild (250x50), kortschild (200x50) en rozet in aluminium met een mat geborstelde F1 of zwarte afwerking. De unieke, ronde, gepatenteerde kerntrekbeveiliging beschermt optimaal tegen kerntrekken. De cilinder mag maximaal 11 mm uit de deur steken. Voordeurgarnituren hebben een verkropte schijfknop van 67 mm, geschikt voor zowel links als rechts gebruik, gemonteerd met een verstelbare rolwisselstift die een correcte montage garandeert."
        ],
        "bullets": [],
        "image": "assets/products/Naamloos-1_0005_NX101148.png"
      },
      {
        "heading": "Noxxa Excellent",
        "paragraphs": [
          "De Excellent lijn biedt geborsteld RVS projectbeslag van de hoogste kwaliteit met SKG*** keurmerk. Dankzij de unieke SDC (schroefdraadconstructie) blijven de deurkrukken stevig zonder enige speling. Deze veiligheidsbeslagen zijn geschikt voor diverse toepassingen, inclusief rook- en brandwerende deuren, en bieden hoge trekweerstand en luxe afwerking. Ze zijn ook compatibel met krukbediende meerpuntssluitingen. Hierdoor zijn ze ideaal voor hooggekwalificeerde utiliteitsbouw en luxe woningbouw. De garnituren worden standaard geleverd zonder deurkruk, maar het assortiment bevat diverse deurkrukken die perfect combineren met het ovale veiligheidsbeslag. Het beslag is leverbaar in ovalen langschild (250x50) of rozet en aan te vullen met een deurbel en/of brievenbus."
        ],
        "bullets": [],
        "image": "assets/products/NX105358.png"
      }
    ]
  },
  "cilinders": {
    "slug": "cilinders",
    "heroImage": "assets/products/Noxxa-basic_cilinder.png",
    "blocks": [
      {
        "heading": "Noxxa Profielcilinders: Uw Partner in Ongeevenaarde Veiligheid en Kwaliteit",
        "paragraphs": [
          "Met decennialange expertise in hang- en sluitwerk is Noxxa de toonaangevende specialist op het gebied van deurbeveiliging. Onze profielcilinders bieden de ultieme oplossing voor elke deur, of het nu gaat om particulier gebruik, utiliteitsbouw, of complexe sluitsystemen. Met ons uitgebreide assortiment kunnen wij altijd een advies op maat geven, perfect afgestemd op uw specifieke beveiligingseisen en wensen.",
          "Of u nu kiest voor verschillende of gelijksluitende cilinders, of een geavanceerd sluitsysteem met de hoogste veiligheidsnormen, Noxxa biedt altijd de ideale oplossing. Kies voor Noxxa en ervaar de geruststelling van topkwaliteit en voortreffelijke service."
        ],
        "bullets": [],
        "image": null
      },
      {
        "heading": "Relock: Duurzaam, Veilig en Kostenbesparend",
        "paragraphs": [
          "Bij Noxxa staat duurzaamheid voorop. Daarom bieden wij cilinderprofielen met de unieke \"Relock\" functie. Maar wat houdt deze functie precies in? Met een simpele handeling maakt u alle voorgaande sleutels onbruikbaar, wat betekent dat de cilinders na de bouwfase gewoon kunnen blijven zitten, zonder de noodzaak van tijdelijke cilinders. Dit minimaliseert de risico's van sleutelverlies of -diefstal, aangezien u de cilinder direct kunt omstellen."
        ],
        "bullets": [],
        "image": null,
        "strongParagraphs": [
          {
            "label": "Voordelen voor Aannemers:",
            "text": " Na de bouwfase hoeft u geen cilinders meer te vervangen, wat zorgt voor aanzienlijke tijd- en kostenbesparingen. Geen gedoe met administratie of het vervangen van tijdelijke cilinders. Tijdens de bouw opent en sluit u alle deuren met slechts een sleutel, wat de efficientie aanzienlijk verhoogt."
          },
          {
            "label": "Voordelen voor Huiseigenaren:",
            "text": " Bij sleutelverlies hoeft u geen nieuwe cilinders aan te schaffen, wat zorgt voor aanzienlijke kostenbesparingen. Met de Relock-functie kunt u direct de beveiliging verhogen door de cilinder om te stellen. U behoudt volledige controle over uw sluitsysteem, zonder complexe procedures."
          }
        ]
      },
      {
        "heading": "Noxxa Basic",
        "subheading": "Betrouwbare Veiligheid voor Woningbouw",
        "paragraphs": [
          "De Noxxa Basic cilinder, gecertificeerd met SKG**, biedt doeltreffende bescherming tegen gangbare inbraaktechnieken. De sleutels zijn vervaardigd uit nieuwzilver, wat zorgt voor minder slijtage en een comfortabele gebruikerservaring. Met een extra lange sleutelhals is deze cilinder ideaal in combinatie met veiligheidsbeslag met kerntrekbeveiliging. Deze kenmerken maken de Noxxa Basic cilinder een uitstekende keuze voor woningbouw, waar veiligheid en betrouwbaarheid centraal staan."
        ],
        "bullets": [],
        "image": "assets/products/Noxxa-basic_cilinder.png",
        "downloads": [
          {
            "file": "assets/documentatie-content/productbladen/Productblad_Noxxa_basic_cilinder-A4.pdf",
            "label": "Productblad Noxxa Basic cilinder"
          }
        ]
      },
      {
        "heading": "Noxxa Premium",
        "paragraphs": [
          "Flexibiliteit en Veiligheid op Maat. De Noxxa Premium lijn biedt diverse sleutelprofielen, elk met unieke eigenschappen."
        ],
        "bullets": [],
        "image": null
      },
      {
        "heading": "",
        "subheading": "Noxxa Vitess",
        "paragraphs": [
          "De veelzijdige Noxxa Vitess profielcilinder biedt zowel gelijksluitende als verschillend sluitende opties, evenals complete sluitsystemen. Ideaal voor woningbouw, middelgrote utiliteitsprojecten en standaard sluitplannen. De robuuste, moeilijk te kopieren sleutel van nieuwzilver biedt, in combinatie met het unieke gepatenteerde Intop-systeem, extra beveiliging en duurzaamheid. Optioneel verkrijgbaar met de Relock-functie."
        ],
        "bullets": [],
        "image": "assets/products/Noxxa-Vitess-sleutel.jpg"
      },
      {
        "heading": "",
        "subheading": "Noxxa 8900",
        "paragraphs": [
          "De Noxxa Premium 8900 cilinderlijn is flexibel toepasbaar in zowel woningbouw als utiliteitsbouw. Verkrijgbaar in SKG** en SKG*** uitvoeringen, biedt deze lijn opties voor zowel verschillende als gelijksluitende cilinders. De cilinders zijn beschikbaar in messing, mat vernikkeld en op aanvraag in andere kleuren."
        ],
        "bullets": [],
        "image": "assets/products/cilinders/8900-cilinder-en-sleutel.webp"
      },
      {
        "heading": "",
        "subheading": "Noxxa 1200",
        "paragraphs": [
          "De Noxxa Premium 1200 cilinder combineert SKG**, SKG*** en ongecertificeerde uitvoeringen binnen een sluitsysteem, ideaal voor zowel woningbouw als utiliteitsbouw. De complexe sleutelprofielen maken het kopieren van sleutels vrijwel onmogelijk en de cilinder wordt geleverd met een certificaat voor extra beveiliging."
        ],
        "bullets": [],
        "image": "assets/products/cilinders/1200-cilinder-en-sleutel.webp"
      },
      {
        "heading": "Noxxa Excellent",
        "paragraphs": [
          "Voldoet aan de Hoogste Veiligheidseisen. De Noxxa Excellent lijn is speciaal ontworpen voor de meest veeleisende situaties en biedt cilinders die aan de hoogste veiligheidseisen voldoen."
        ],
        "bullets": [],
        "image": null
      },
      {
        "heading": "",
        "paragraphs": [],
        "bullets": [],
        "image": "assets/products/dmb_cilinder_en_sleutel.png",
        "groups": [
          {
            "heading": "",
            "subheading": "Noxxa DMB profielcilinder",
            "paragraphs": [
              "De Noxxa DMB-cilinder combineert veiligheid, betrouwbaarheid en milieubewuste keuzes in een oplossing. De cilinder is SKG*** gecertificeerd, voorzien van magneetbeveiliging tegen ongewenst kopieren en gepatenteerd tot 2038. Met de optionele Relock 2-in-1 functie blijft de cilinder tijdens de bouwfase zitten en worden onnodige vervangingen voorkomen. Zo kies je voor een veilige en toekomstgerichte oplossing."
            ]
          },
          {
            "heading": "",
            "subheading": "Modulair systeem",
            "paragraphs": [
              "De cilinder is modulair op te bouwen. Tijdens het maken van sluitplannen wordt alles zorgvuldig afgestemd en gecontroleerd. Mocht er toch een verkeerde meting worden gedaan, dan kan de cilinder ter plekke worden aangepast met verlengstukken. Dankzij deze opbouw is hij geschikt voor middelgrote tot grote sluitsystemen en blijft hij flexibel bij wijzigingen tijdens of na de montage."
            ]
          },
          {
            "heading": "",
            "subheading": "Duurzaamheid",
            "paragraphs": [
              "De cilinder is klimaatneutraal en draagt actief bij aan CO2-reductie. Door het gebruik van zamak in plaats van lood wordt de uitstoot met 46% verlaagd; de resterende uitstoot wordt volledig gecompenseerd via een erkend klimaatproject."
            ]
          }
        ]
      },
      {
        "heading": "",
        "subheading": "Noxxa Bravus",
        "paragraphs": [
          "De Noxxa Bravus cilinders bieden maximale veiligheid met een keersleutelsysteem dat voldoet aan het SKG*** keurmerk. De cilinders en vormvaste sleutels zijn uitgerust met het gepatenteerde Intellitec-systeem voor optimale beveiliging. Deze cilinders worden geleverd met een veiligheidscertificaat om ongeautoriseerd kopieren te voorkomen en zijn geschikt voor zowel eengezinswoningen als complexe sluitsystemen. Optioneel leverbaar met Relock-functie."
        ],
        "bullets": [],
        "image": "assets/products/cilinders/Noxxa-bravus-excellent-cilinder-en-sleutel.webp",
        "downloads": [
          {
            "file": "assets/documentatie-content/productbladen/Noxxa-bravus-excellent-productblad.pdf",
            "label": "Productblad Noxxa Bravus Excellent"
          }
        ]
      },
      {
        "heading": "",
        "subheading": "Noxxa Look & Feel",
        "paragraphs": [
          "De Noxxa Look & Feel cilinder biedt een perfecte balans tussen veiligheid en stijl, met een keersleutel profiel en geavanceerde beveiligingstechnologieen zoals 3D-profieltechnologie en zijdelingse stiften. Ideaal voor locaties waar zowel functionaliteit, veiligheid als een eigentijds design gewenst zijn, zoals luxe appartementencomplexen en kantoren. Optioneel verkrijgbaar met Relock-functie."
        ],
        "bullets": [],
        "image": "assets/products/cilinders/Noxxa-Look-FeelV2.webp"
      },
      {
        "heading": "",
        "subheading": "Noxxa 8900",
        "paragraphs": [
          "De Noxxa 8900 MP cilinder biedt ongeevenaarde bescherming met een magneetsleutel die een extra vergrendeling in de cilinder activeert. Met SKG*** certificering en een meegeleverd veiligheidscertificaat is deze cilinder de ideale keuze voor toepassingen waar maximale veiligheid bij gelijksluitende cilinders vereist is."
        ],
        "bullets": [],
        "image": null
      },
      {
        "heading": "",
        "subheading": "Noxxa 1200",
        "paragraphs": [
          "De Noxxa 1200 MP cilinder biedt dezelfde innovatieve magneetfunctie, speciaal ontwikkeld voor sluitsystemen. Perfect geschikt voor zowel luxe woningbouw als utiliteitsbouw waar strenge veiligheidseisen gelden."
        ],
        "bullets": [],
        "image": null
      }
    ]
  },
  "sloten": {
    "slug": "sloten",
    "heroImage": "assets/products/Cilinderslotenv2.png",
    "blocks": [
      {
        "heading": "Sloten voor woningbouw en projecten",
        "paragraphs": [
          "Onze veelzijdige woningbouwsloten zijn de ideale keuze voor al uw binnendeuren. Of het nu een nieuwe woonkamerdeur, kastdeur, WC-deur, badkamerdeur of slaapkamerdeur van een slot wilt voorzien of bestaande hoofdsloten wilt vervangen bij een defect slot of interieur wijziging, onze sloten zijn eenvoudig te monteren en passen perfect."
        ],
        "bullets": [],
        "image": null
      },
      {
        "heading": "",
        "paragraphs": [
          "Onze binnendeursloten zijn universeel inzetbaar, wat betekent dat ze geschikt zijn voor zowel links- als rechtsdraaiende deuren. U kunt kiezen uit een voorplaat in zwarte, witte of geborsteld RVS-afwerking. De afgeronde voorplaat meet 174x20 mm en het slot heeft een doornmaat van 50 mm.",
          "Om verspilling te minimaliseren, worden onze sloten zonder sluitplaat geleverd. Mocht u deze toch nodig hebben, zijn ze uiteraard apart verkrijgbaar.",
          "Voor wie op zoek is naar een strakke afwerking, bieden wij ook woningbouwsloten met een magneetdagschoot. Bij het sluiten van de deur wordt de dagschoot door een magneet uitgetrokken, waardoor de deur vergrendelt. In geopende stand steekt de dagschoot niet uit. Dit voorkomt beschadigingen aan het kozijn en zorgt voor een nette uitstraling. Deze sloten worden geleverd met sluitkom en sluitplaat, aangezien ze vaak in nieuwe situaties worden toegepast."
        ],
        "bullets": [],
        "image": "assets/products/Cilinderslotenv2.png"
      },
      {
        "heading": "Projectsloten voor Utiliteitsbouw",
        "paragraphs": [],
        "bullets": [
          "Utiliteitsprojecten",
          "Brandwerende deuren",
          "Vochtige omgevingen"
        ],
        "afterBullets": [
          "Noxxa biedt een uitgebreid assortiment projectsloten, waaronder dag- en nachtsloten, toiletsloten, loopsloten, kastsloten en centraalsloten, met of zonder dagschootblokkering. Onze sloten hebben een uniforme slotkastsparing met een doornmaat van 60 mm en zijn verkrijgbaar met zowel afgeronde als rechthoekige voorplaten. Daarnaast bieden wij ook projectsloten met een magneetvariant."
        ],
        "image": "assets/products/sloten/Foto-dagschoot-keren-met-uitleg.webp"
      },
      {
        "heading": "",
        "paragraphs": [
          "Onze projectsloten zijn ontworpen voor uiteenlopende toepassingen zoals:",
          "Deze robuuste sloten zijn getest volgens de Europese norm (NEN)-EN 122090 en kunnen zware deuren tot 200 kg moeiteloos aan. Ze hebben een uitstekende corrosieweerstand, bewezen door een maximale score van 240 uur in de zoutsproeitest. Bovendien zijn ze geschikt voor brandwerende deuren volgens de (NEN-EN 1634-1) norm.",
          "Unieke kenmerken van Noxxa Projectsloten:"
        ],
        "bullets": [
          "Anti-frictiedagschoot met kunststof inzet voor fluisterstille werking",
          "Massieve RVS dag- en nachtschoten en klemtuimelaar voor duurzaamheid en kracht",
          "Voorzien van stofbussen in de patentgaten ter bescherming tegen vuil",
          "Geschikt voor zowel links- als rechtsdraaiende deuren dankzij de omkeerbare dagschoot"
        ],
        "image": "assets/products/sloten/Foto-USPs-projectslotenV3.webp",
        "downloads": [
          {
            "file": "assets/documentatie-content/productbladen/Productblad_noxxa_projectsloten_A4_LR.pdf",
            "label": "Productblad Noxxa Projectsloten"
          }
        ]
      },
      {
        "heading": "Smaldeursloten voor Smalle Deurstijlen",
        "paragraphs": [
          "Voor deuren met een smalle deurstijl biedt Noxxa speciale smaldeursloten. Deze insteeksloten hebben een ondiepe slotkast, ideaal voor montage in bijvoorbeeld stalen deuren met smalle stijlen en veel glaspartijen.",
          "De draairichting van de Noxxa smaldeursloten kan eenvoudig aangepast worden en de dagschoot is verstelbaar van 10 naar 14 mm voor een optimale pasvorm.",
          "De Noxxa smaldeursloten zijn beschikbaar in twee uitvoeringen en verschillende doornmaten:"
        ],
        "bullets": [
          "Dag- en nachtslot - PC92 - 240 x 22 mm",
          "Kastslot - PC - 168 x 22 mm"
        ],
        "image": "assets/products/NX100682.png"
      },
      {
        "heading": "Veiligheids Insteeksloten met SKG-certificering",
        "paragraphs": [
          "Noxxa veiligheidsloten zijn beschikbaar in vijf uitvoeringen met een doornmaat van 50 mm en pc-maten van 55 (voorplaat 174x25mm) en 72 mm (voorplaat 238x25 mm). De verstevigde voorplaten en gehard stalen beveiligingspennen in de nachtschoot bieden maximale bescherming, ondersteund door het SKG** keurmerk. De sloten zijn zowel met rechthoekige als met afgeronde voorplaten leverbaar.",
          "De sloten worden zonder sluitplaten en sluitkommen geleverd, maar zware RVS varianten zijn apart verkrijgbaar."
        ],
        "bullets": [],
        "image": "assets/products/NX105155.png"
      }
    ]
  },
  "deurdrangers": {
    "slug": "deurdrangers",
    "heroImage": "assets/products/image-deurdrangers.svg",
    "blocks": [
      {
        "heading": "Noxxa Premium Deurdrangers",
        "paragraphs": [
          "De Noxxa Premium deurdrangers zijn ontworpen om zowel functioneel als esthetisch aantrekkelijk te zijn, met opties voor verschillende deursituaties en -vereisten. Hier is een overzicht van de belangrijkste kenmerken en beschikbare opties:"
        ],
        "bullets": [],
        "image": ""
      },

      {
        "heading": "",
        "paragraphs": [
          ""
        ],
        "bullets": [
          "Schaararm deurdrangers: 3 modellen",
          "Glijarmdeurdrangers: 6 modellen beschikbaar in twee varianten:",
          {
            "label": "Uitvoering B:",
            "text": " Voor deurmontage aan de scharnierzijde of kozijndorpelmontage aan de niet-scharnierzijde."
          },
          {
            "label": "Uitvoering BG:",
            "text": " Voor deurmontage aan de niet-scharnierzijde of kozijndorpelmontage aan de scharnierzijde."
          },
            ],
        "image": "assets/products/NX200SA_NX100592.png"
      },


      {
        "heading": "",
        "paragraphs": [
          ""
        ],
        "bullets": [
          "Innovatieve Ellipsvormige As: Zorgt voor een verminderde openingsdruk, waardoor deuren soepeler openen zonder zware tegendruk.",
          "Kleuropties: Standaard zilver, met de NX3400 en NX3500 modellen ook beschikbaar in zwart voor een strakke, moderne uitstraling.",
          "Extra Opties: Openingsbegrenzers en vastzetinrichtingen zijn optioneel verkrijgbaar en eenvoudig te monteren in de glijarm voor extra functionaliteit."
        ],
        "image": "assets/products/NX200SA_NX100592.png"
      },


      {
        "heading": "Installatie en Gebruik",
        "paragraphs": [
          "Voor een optimale keuze en installatie wordt aangeraden om het stroomschema te volgen dat bij de producten wordt geleverd. Dit schema helpt bij het selecteren van de juiste deurdranger op basis van de specifieke installatievereisten en de gewenste functionaliteiten.",
          "De Noxxa Premium deurdrangers zijn dus geschikt voor diverse toepassingen en bieden gebruiksgemak, veelzijdigheid en een modern design dat past bij verschillende interieurs en exterieurs."
        ],
        "bullets": [],
        "image": null,
        "downloads": [
          {
            "file": "assets/documentatie-content/montagehandleidingen/Noxxa-Folder_Deurdrangers_stroomschema.webp",
            "label": "Stroomschema Noxxa Deurdrangers"
          }
        ]
      }
    ]
  },
  "anti-paniekbeslag": {
    "slug": "anti-paniekbeslag",
    "heroImage": "assets/products/image-anti-paniekbeslag.svg",
    "blocks": [
      {
        "heading": "Inbouw Anti-paniekbeslag voor Nooduitgangen",
        "paragraphs": [
          "Wanneer elke seconde telt, biedt Noxxa inbouw anti-paniekbeslag de zekerheid die u nodig heeft. Met Noxxa anti-paniekbeslag insteek bent u verzekerd van een veilige en snelle toegang tot nooduitgangen. Dit beslag is speciaal ontworpen voor maximale veiligheid en gebruiksgemak, zodat uw uitgangen altijd toegankelijk zijn, zelfs in de meest stressvolle situaties."
        ],
        "bullets": [],
        "image": "assets/products/nooduitgang.jpg"
      },
      {
        "heading": "Waarom Kiezen voor Noxxa Anti-paniekbeslag?",
        "paragraphs": [
          "Noxxa biedt geavanceerde anti-paniekoplossingen die essentieel zijn voor elk gebouw waar snelle evacuatie nodig is. Of het nu gaat om scholen, kantoren, winkelcentra of openbare gebouwen met Noxxa anti-paniekbeslag insteek kunt u erop vertrouwen dat nooduitgangen met een eenvoudige beweging geopend kunnen worden. Dit minimaliseert paniek en verzekert een vlotte evacuatie."
        ],
        "bullets": [],
        "image": null
      },
      {
        "heading": "Voldoet aan strenge Europese Veiligheidsnormen",
        "paragraphs": [
          "Bij Noxxa staat kwaliteit en betrouwbaarheid voorop. Ons anti-paniekbeslag voldoet aan de strengste Europese normen, waaronder EN 1125 en EN 179, om maximale veiligheid te garanderen."
        ],
        "bullets": [],
        "image":  "assets/products/vluchtwegtechniek/en1125_en179.jpg",
      },
      {
        "heading": "EN 1125",
        "paragraphs": [
          "De EN 1125 is specifiek ontwikkeld voor nooduitgangen in openbare gebouwen waar grote aantallen mensen door moeten. Deze norm is cruciaal voor situaties waarin paniek kan ontstaan en waar een snelle, intuitieve bediening van de deur noodzakelijk is. Hier mag alleen een paniekbalk of pushbar toegepast worden."
        ],
        "bullets": [],
        "image": "assets/products/anti-paniek-image1V2.jpg"
      },
      {
        "heading": "EN 179",
        "paragraphs": [
          "Voor kantoren en niet-openbare ruimten waar minder paniek verwacht wordt, is de EN 179 van toepassing. Deze norm vereist dat nooduitgangen met een enkele handeling, zoals een duwplaat of hendel, geopend kunnen worden."
        ],
        "bullets": [],
        "image": "assets/products/anti-paniek-image2V2.jpg"
      },
      {
        "heading": "Volledig Getest Hang- en Sluitwerk voor uw gemoedsrust",
        "paragraphs": [
          "Bij Noxxa worden alle componenten van het anti-paniekbeslag als een geheel getest, van het slotmechanisme tot de handgreep. Alleen dan kan het gecertificeerd worden volgens de NEN-EN 179 of de NEN-EN 1125 norm. Dit verzekert een naadloze werking in noodsituaties, zodat u kunt vertrouwen op een systeem dat onder druk presteert."
        ],
        "bullets": [],
        "image": null
      },
      {
        "heading": "13 standaard anti-paniekpakketten op voorraad",
        "paragraphs": [
          "Wij bieden anti-paniekpakketten voor zowel enkele als dubbele houten deuren. De meestgebruikte zijn direct uit voorraad leverbaar, zodat u snel kunt voldoen aan de veiligheidsvereisten van uw gebouw."
        ],
        "bullets": [],
        "image": null
      }
    ]
  },
  "schuifdeurbeslag": {
    "slug": "schuifdeurbeslag",
    "heroImage": "assets/products/image-schuifdeurbeslag.svg",
    "blocks": [
      {
        "heading": "Schuifdeurbeslag van Noxxa: Innovatieve Oplossingen voor Deuren en Meubels",
        "paragraphs": [
          "Bij Noxxa vindt u een uitgebreid assortiment schuifdeursystemen, perfect voor deuren, kasten en diverse meubels. Ons technisch geavanceerde schuifdeurbeslag is ontworpen voor zowel plafond-, wand- als in-de-wand toepassingen, waardoor het ideaal is voor verschillende interieurprojecten. De hoogwaardige kogelgelagerde loopwagens, uitgerust met geintegreerde reinigingsborstels, zorgen voor een soepele en geruisloze werking in de geanodiseerde aluminium F1 looprail. Alle Noxxa schuifdeursystemen zijn voorzien van een dubbelwerkende softclose loopwagen die ook voorzien is van borstels zodat de rail altijd stof- en vuil vrij is."
        ],
        "bullets": [],
        "image": "assets/products/softclose.png"
      },
      {
        "heading": "Montage: Eenvoudig, Snel en Efficient",
        "paragraphs": [
          "De montage van onze schuifdeursystemen is eenvoudig en efficient, waardoor u snel kunt genieten van een perfect werkend systeem."
        ],
        "bullets": [],
        "image": null,
        "video": {
          "src": "https://www.youtube.com/embed/FTysQphAyKY",
          "title": "Instructievideo Luxeslide NK100 aangepast v3"
        }
      },
      {
        "heading": "Luxeslide NK 100: Standaard en Luxe",
        "paragraphs": [
          "Het Noxxa schuifdeursysteem Luxeslide NK 100 biedt diverse voordelen:",
          "Tip: De NX100616 is de perfecte oplossing bij vloerverwarming!"
        ],
        "bullets": [
          "Geschikt voor deurgewichten tot 100 kg",
          "Deurbreedte vanaf 580 mm",
          "Geschikt voor deurdiktes van 35-45 mm",
          "Hoogteaanpassing van +/- 3 mm",
          "Softclose aan beide zijden",
          "Zelfreinigend borstelsysteem"
        ],
        "image": "assets/products/NX100616.png"
      },
      {
        "heading": "Luxeslide SK 100: Strakke Afwerking met Minimale Kier",
        "paragraphs": [
          "Het Luxeslide SK 100 schuifdeursysteem kenmerkt zich door een smalle kier van slechts 4 mm tussen de rail en de bovenkant van de deur, dankzij de inbouwophanging. Deze strakke afwerking maakt een kliklijst overbodig, wat bijdraagt aan een modern en minimalistisch design."
        ],
        "bullets": [],
        "image": "assets/products/SK100-smalle-kier.jpg",
          "downloads": [
          {
            "file": "assets/documentatie-content/ montagehandleidingen/Noxxa-Luxeslide-NKSK100-Mounting-Instruction_LR.pdf",
            "label": "Montagehandleiding Noxxa Luxeslide NK & SK 100"
          }
        ]
      },
      {
        "heading": "Luxeslide Pocket 100 NK & SK: Ideaal voor In-de-Wand Toepassingen",
        "paragraphs": [
          "Het Luxeslide Pocket 100 systeem is perfect voor schuifdeuren die in de wand verdwijnen. Dit systeem is toepasbaar voor zowel houten als metalen frames en biedt de keuze tussen de NK (normale kier van 28 mm) en SK (smalle kier van 4 mm) systemen. Beide opties kunnen worden uitgebreid met een Push to Open systeem, al dient u te weten dat de softclose functie wordt gedeactiveerd bij gebruik van dit systeem.",
          "Tip: U kunt de rails uit de wand halen zonder de muur te hoeven slopen, wat ideaal is voor aanpassingen aan het schuifdeurbeslag."
        ],
        "bullets": [],
        "image": "assets/products/Montagerail.png",
          "downloads": [
          {
            "file": "assets/documentatie-content/ montagehandleidingen/Noxxa-Luxeslide-NKSK100-Mounting-Instruction_LR.pdf",
            "label": "Montagehandleiding Noxxa Luxeslide NK & SK 100"
          }
        ]
      },
      {
        "heading": "Furnislide: Eenvoudig Te Installeren Kastdeurbeslag",
        "paragraphs": [
          "Het Furnislide schuifdeurbeslag is een eenvoudig te installeren systeem, ideaal voor walk-in closets, knieschotten en andere kasten. Dit onderlopende systeem is ontworpen voor houten deuren tot 50 kg per deur en kan worden gebruikt voor 2 of 3 deuren."
        ],
        "bullets": [
          "Dubbelwerkende softclose functie",
          "Geschikt voor deurbreedtes tussen 500 mm en 1200 mm",
          "Geschikt voor deurdiktes van 16 tot 19 mm",
          "Deurgewicht tot 50 kg",
          "Maximale hoogte van 2800 mm",
          "In hoogte verstelbaar met 3 mm"
        ],
        "image": null,
        "video": {
          "src": "https://www.youtube.com/embed/DZTyXzMzBYg",
          "title": "Instructievideo Furnislide 2 deurs"
        },
          "downloads": [
          {
            "file": "assets/documentatie-content/montagehandleidingen/Noxxa-Furnislide-LR.pdf",
            "label": "Montagehandleiding Noxxa Furnislide"
          }
        ]
      },
      {
        "heading": "",
        "paragraphs": [],
        "bullets": [],
        "image": "assets/products/schuifdeurbeslag/NX100618.5.webp"
      },
      {
        "heading": "",
        "paragraphs": [],
        "bullets": [],
        "image": "assets/products/schuifdeurbeslag/NX100618.6.webp"
      }
    ]
  },
  "scharnieren": {
    "slug": "scharnieren",
    "heroImage": "assets/products/image-scharnieren.svg",
    "blocks": [
      {
        "heading": "",
        "paragraphs": [
          "Noxxa biedt een compleet assortiment scharnieren en paumelles, beschikbaar in verschillende diktes en maten, zoals ongelagerde scharnieren, kogellagerscharnieren en glijlagerscharnieren. Voor elke deur is er een passende oplossing, of het nu gaat om een lichte binnendeur of een zware buitendeur. Twee innovaties die we graag extra in de spotlight zetten, zijn het Stiletto bevestigingssysteem en de Kogelstift paumelles."
        ],
        "bullets": [],
        "image": null
      },
      {
        "heading": "Stiletto - Gepatenteerd Bevestigingssysteem",
        "paragraphs": [
          "Het Stiletto scharnier is voorzien van een gepatenteerd bevestigingssysteem dat eenvoud en kracht combineert. Dit 3-knoops Slimline veiligheidsglijlagerscharnier biedt tal van voordelen, waardoor het voor zowel binnen- als buitendeuren een uitstekende keuze is."
        ],
        "bullets": [
          "SKG***/SKH ZONDER DIEVENPEN",
          "Toepasbaar voor binnen- en buitendeuren",
          "Een type scharnier lost vrijwel elke situatie op",
          "Gepatenteerd bevestigingssysteem",
          "Universeel toepasbaar voor links- en rechtsdraaiende deuren",
          "Hoog draagvermogen: tot 180 kg bij gebruik van 3 scharnieren",
          "CE-gecertificeerd volgens NEN-EN 1935",
          "Gelaste knoop voor extra stevigheid",
          "Geluidloos en onderhoudsarm dankzij zelfsmerende kunststof glijlagers",
          "Stervormige schroefgaten ter voorkoming van schroefbreuken",
          "Geschikt voor brand- en rookwerende deuren",
          "Spelingsvrij ontwerp voor nauwkeurige montage",
          "Verkrijgbaar in gegalvaniseerd staal en RVS"
        ],
        "image": "assets/products/scharnieren/scharnieren-image1.webp"
      },
      {
        "heading": "Kogelstift Paumelles SKG***",
        "paragraphs": [
          "De Kogelstift paumelles van Noxxa combineren veiligheid en functionaliteit. Deze paumelles zijn ideaal voor binnen- en buitendeuren en bieden extra veiligheid zonder dievenpen. Dankzij de kogelstift draaien de paumelles soepel en geruisloos, zelfs bij intensief gebruik."
        ],
        "bullets": [
          "SKG*** / SKH zonder dievenpen",
          "Toepasbaar voor zowel binnen- als buitendeuren",
          "Gelaste knoop voor verhoogde duurzaamheid",
          "Stervormige schroefgaten om het afbreken van schroefkoppen te voorkomen",
          "Geschikt voor brand- en rookwerende deuren",
          "Verkrijgbaar in gegalvaniseerd staal en RVS"
        ],
        "image": "assets/products/kogelstift-paumelle_400px.png"
      },
      {
        "heading": "Onzichtbare Scharnieren",
        "paragraphs": [
          "Noxxa onzichtbare scharnieren bieden een elegante en functionele oplossing voor moderne interieurs. De onzichtbare scharnieren zorgen ervoor dat deuren naadloos in het ontwerp opgaan. Verkrijgbaar in de kleuren zilver, vernikkeld en mat zwart."
        ],
        "bullets": [
          "30 minuten brandwerend",
          "Geschikt voor deuren van 35 mm tot 45 mm dik",
          "Deuropening tot 180 graden, zelfs bij plinten en opdeklijsten tot 15,5 mm",
          "3D-verstelbaar voor een perfecte afstelling",
          "Geschikt voor deuren tot 70 kg",
          "Corrosiebestendig door verzinkte zamak behuizing"
        ],
        "image": "assets/products/NX100766.png",
        "bulletsHeading": "Belangrijkste kenmerken:",

        "afterBullets": [ 
          "Tip: Gebruik de Noxxa freesmal (NX101687) voor snelle en nauwkeurige montage."
        ]
      },
      {
        "heading": "Taatsdeurscharnieren",
        "paragraphs": [
          "Noxxa taatsdeurscharnieren bieden een innovatieve oplossing voor zowel nieuwbouw als renovatie. Deze scharnieren vereisen geen uitsparing in de vloer, wat ze ideaal maakt voor toepassingen met vloerverwarming. Verkrijgbaar in zowel zwart als RVS, deze scharnieren zorgen voor een moderne uitstraling en zijn eenvoudig te monteren op afgewerkte vloeren."
        ],
        "bullets": [
          "Zelfsluitend met sluitvertraging, openingshoek van 150 graden en vastzetfunctie op 90 graden",
          "Geschikt voor deuren vanaf 40 mm dik en tot 950 mm breed",
          "Geschikt voor deuren tot 100 kg",
          "Minimale boorvereiste van 8 mm, waardoor kans op schade aan vloerverwarming wordt geminimaliseerd",
          "Getest volgens DIN EN 1154 op 500.000 cycli voor duurzaamheid"
        ],
        "image": "assets/products/NX101778.png",
         "bulletsHeading": "Belangrijkste kenmerken:"
      },
      {
        "heading": "Kogellagerscharnieren",
        "paragraphs": [
          "Voor deuren die intensief gebruikt worden of waar extra draagvermogen vereist is, biedt Noxxa kogellagerscharnieren. Dankzij de kogellagers draaien deze scharnieren soepel, zelfs bij zware belasting, en zijn ze extreem duurzaam."
        ],
        "bullets": [
          "Geschikt voor binnen- en buitendeuren",
          "Verkrijgbaar in diverse maten en materialen",
          "Soepele rotatie en minimale slijtage dankzij kogellagers"
        ],
        "image": "assets/products/Noxxa-kogellager-scharnierV2.png",
        "bulletsHeading": "Voordelen:"
      },
      {
        "heading": "Vierkante scharnieren",
        "paragraphs": [
          "Noxxa vierkante scharnieren met losse pen zijn veelzijdig en geschikt voor zowel lichte binnen- en buitendeuren als meubels. Ze zijn verkrijgbaar met rechte of afgeronde hoeken en in gegalvaniseerd staal of geborsteld RVS."
        ],
        "bullets": [
          "Eenvoudige montage dankzij de losse pen",
          "Geschikt voor diverse toepassingen",
          "Verkrijgbaar met of zonder SKG-keurmerk"
        ],
        "image": "assets/products/vierkant-scharnierV2.png",
        "bulletsHeading": "Kenmerken:"
      },
      {
        "heading": "Glijlagerscharnieren",
        "paragraphs": [
          "Noxxa glijlagerscharnieren hebben nylon glijbussen voor een gelijkmatige krachtverdeling en soepele, geruisloze rotatie. Deze scharnieren zijn onderhoudsvrij en zeer geschikt voor toepassingen met hoge belasting."
        ],
        "bullets": [
          "Verminderde wrijving en slijtage",
          "Verkrijgbaar in RVS, gegalvaniseerd staal en zwart gelakt staal",
          "Geschikt voor binnen- en buitendeuren, met of zonder SKG-keurmerk"
        ],
        "image": null
      },
      {
        "heading": "Scharnieren tot een dikte van 2 mm",
        "paragraphs": [
          "Deze ongelagerde scharnieren van Noxxa zijn perfect voor lichte toepassingen zoals meubels en kisten. Verkrijgbaar met rechte hoeken, in gegalvaniseerd staal of messing en met losse of vaste pen."
        ],
        "bullets": [],
        "image": null
      },
      {
        "heading": "Paumelles",
        "paragraphs": [
          "Noxxa paumelles zijn robuuste scharnieren, perfect voor zware deuren. Dankzij de kogellagers bieden ze een soepele en geruisloze werking. Paumelles zijn verkrijgbaar in RVS of gegalvaniseerd staal, met rechte of afgeronde hoeken en zowel met als zonder SKG-keurmerk."
        ],
        "bullets": [
          "Hoog draagvermogen en slijtvast",
          "Eenvoudig de deur uit het kozijn te tillen in geopende stand",
          "Leverbaar met dievenpen voor extra veiligheid"
        ],
        "image": null
      },
      {
        "heading": "Inboorpaumelles",
        "paragraphs": [
          "Noxxa inboorpaumelles maken het mogelijk om een opdekdeur snel en moeiteloos uit het kozijn te halen. Ook het monteren en vervangen van inboorpaumelles is relatief eenvoudig.",
          "Geschikt voor toepassing in:",
          "Met Noxxa inboorpaumelles ben je verzekerd van een betrouwbare en duurzame aansluiting tussen opdekdeur en kozijn."
        ],
        "bullets": [
          "Houten kozijnen",
          "Stalen metselkozijnen Hormann",
          "Stalen metselkozijnen Theuma (voorheen Polynorm)",
          "Stalen montagekozijnen Theuma (voorheen Polynorm)",
          "Universele stalen kozijnen",
          "Draagvermogen van 20 kg per paumelle",
          "Geschikt voor zowel links- als rechtsdraaiende deuren",
          "Nylon ring voor een geruisloze, soepele werking",
          "Verkrijgbaar in F1 mat, zwart gelakt en vernikkeld"
        ],
        "image": "assets/products/Diverse_Noxxa_paumelles_V2.png"
      }
    ]
  },
  "valdorpels": {
    "slug": "valdorpels",
    "heroImage": "assets/products/image-valdorpels.svg",
    "blocks": [
      {
        "heading": "",
        "paragraphs": [
          "De valdorpels van Noxxa zijn van hoogwaardige kwaliteit en beschikbaar binnen de 3 productlijnen Basic, Premium en Excellent.",
          "Er zijn diverse valdorpels voor; houten deuren, veiligheidsdeuren en branddeuren. Benieuwd welke valdorpel in uw situatie geschikt is? Bekijk dan de kieswijzer onderaan de pagina."
        ],
        "bullets": [],
        "image": null
      },
      {
        "heading": "BASIC UNIVERSEEL",
        "paragraphs": [
          "Basic valdorpels zijn perfect geschikt voor stof- en tochtdichting bij ruwe en oneffen vloeren door automatische scheefstelling. Er is een variant met een zachte borstel, welke toe te passen is bij tegels gezien de borstelharen aansluiten op de diepte van de voegen. Ook is er een kunststof variant die een geluids- en tochtwerende functie heeft."
        ],
        "bullets": [],
        "image": null
      },
      {
        "heading": "PREMIUM VALDORPELS",
        "paragraphs": [
          "Valdorpels met hoogwaardige, siliconen afdichting geschikt voor ruwe en oneffen vloeren zijn er in verschillende varianten. Een geluids- en brandwerende die voldoet aan de brand-en rookwerende norm voor deuren volgens NEN-EN 1634-3 en is geluidswerend tot 52dB. Een opbouw variant die makkelijk te monteren is en te bedienen aan zowel de scharnier- als de sluitzijde en een variant met tijdsvertragende sluiting, waardoor het vuil niet meer wordt meegenomen met de Valdorpel."
        ],
        "bullets": [],
        "image": "assets/products/premium-geluids-brandwerendv2.png"
      },
      {
        "heading": "EXCELLENT VALDORPELS",
        "paragraphs": [
          "Hoogwaardige siliconen afdichting en tevens geluids- en brandwerend. De valdorpel sluit pas als de deur dicht is, hierdoor wordt het vuil niet meer meegenomen met de valdorpel en is het de perfecte oplossing bij ruimtes met overdruk. Extreem duurzaam, met een levensduur van minimaal 200.000 cycli."
        ],
        "bullets": [],
        "image": "assets/products/valdorpels/premium-geluids-brandwerendv2.webp"
      },
            {
        "heading": "Op zoek naar de juiste valdorpel?",
        "paragraphs": [
          "Heb je twijfel over welke valdorpel je nodig hebt? Download hier de valdorpel kieswijzer."
        ],
        "bullets": [],
        "image": "assets/products/valdorpels/image-valdorpels-kieswijzer.webp",
        "imageHref": "assets/products/valdorpels/Kieswijzer_valdorpels_A5.pdf"
      }
    ]
  },
  "hang-en-discussloten": {
    "slug": "hang-en-discussloten",
    "heroImage": "assets/products/messing-hangslot-1.svg",
    "blocks": [
      {
        "heading": "Hang- en Discussloten: Maximale Veiligheid met Noxxa Sloten",
        "paragraphs": [
          "Ontdek de Premium hangsloten van Noxxa, ontworpen voor ultieme veiligheid en betrouwbaarheid in elke situatie. Of je nu je huis, werkplaats of bouwplaats wilt beveiligen, Noxxa biedt een breed scala aan hangsloten en discussloten die voldoen aan jouw specifieke beveiligingsbehoeften."
        ],
        "bullets": [],
        "image": null
      },
      {
        "heading": "Noxxa Messing Hangsloten",
        "paragraphs": [
          "Kies voor de duurzame en robuuste Noxxa messing hangsloten. Deze hangsloten zijn verkrijgbaar in zowel verschillend- als gelijksluitende varianten en zijn voorzien van een corrosiebestendig binnenwerk en RVS veertjes. De gehard stalen beugel is dubbel vergrendeld en hangsloten vanaf 40 mm zijn uitgerust met een condensgat en rubber beugelring om vocht te weren. Elk slot wordt standaard geleverd met 2 sleutels voor extra gebruiksgemak."
        ],
        "bullets": [],
        "image": "assets/products/Detail-cijferhangslot-messingV2.png"
      },
      {
        "heading": "Noxxa Cijferhangslot Messing",
        "paragraphs": [
          "Met het Noxxa cijferhangslot heb je een gebruiksvriendelijke en veilige oplossing zonder de noodzaak van sleutels. Dit slot werkt met een 4-cijferige code die onbeperkt gewijzigd kan worden. De messing kast en gehard stalen beugel zorgen voor langdurige veiligheid en betrouwbaarheid."
        ],
        "bullets": [],
        "image": "assets/products/NX104257.png"
      },
      {
        "heading": "Noxxa Discussloten RVS",
        "paragraphs": [
          "Voor maximale beveiliging in een robuuste vorm kies je voor de Noxxa discussloten. Deze sloten, beschikbaar in verschillend- en gelijksluitende opties, zijn voorzien van een messing cilinder en een gehard stalen beugel. Het condensgat voorkomt vochtproblemen en elk discusslot wordt geleverd met 2 sleutels."
        ],
        "bullets": [],
        "image": "assets/products/NX104261.png"
      },
      {
        "heading": "Noxxa Anti-diefstal Hardstalen Ketting",
        "paragraphs": [
          "Bescherm waardevolle bezittingen met de Noxxa anti-diefstal hardstalen ketting. Ideaal voor het beveiligen van gereedschap, voertuigen en bouwplaatsen, deze ketting heeft 10 mm dikke hardstalen schakels voor maximale veiligheid. Combineer deze ketting met een Noxxa hangslot of pantserhangslot voor een complete beveiligingsoplossing. De ketting wordt geleverd met een beschermhoes om schade te voorkomen."
        ],
        "bullets": [],
        "image": "assets/products/NX104255.png"
      },
      {
        "heading": "Noxxa Pantserhangslot RVS",
        "paragraphs": [
          "Voor ultieme beveiliging biedt het Noxxa pantserhangslot een ongeevenaarde bescherming. Dit slot, gemaakt van massief messing en omhuld met gehard RVS, beschikt over een hardstalen schoot met uitboorbeveiliging en gedwongen sluiting. Het Noxxa pantserhangslot wordt geleverd met 2 sleutels en biedt maximale gemoedsrust."
        ],
        "bullets": [],
        "image": "assets/products/NX104256.png",
        "downloads": [
          {
            "file": "assets/products/hang-discus-sloten/Productblad_Noxxa_hang-discussloten_A4_LR.pdf",
            "label": "Bekijk hier het productblad voor hang-, discus-, pantsersloten en kettingen."
          }
        ]
      }
    ]
  },
  "sluitlijsten": {
    "slug": "sluitlijsten",
    "heroImage": "assets/products/noxxa-sluitlijsten.png",
    "blocks": [
      {
        "heading": "Noxxa Sluitlijsten voor Dubbele Deuren - Maximale Veiligheid met Stijl",
        "paragraphs": [
          "De Noxxa sluitlijst is de oplossing voor wie op zoek is naar een combinatie van stijlvol design en maximale inbraakwerendheid (SKG***). Deze sluitlijst blinkt uit in gebruiksvriendelijkheid, waarbij zowel aan de verwerker als de eindgebruiker is gedacht."
        ],
        "bullets": [],
        "image": "" 
      },
      {
        "heading": "",
        "paragraphs": [
          ""
        ],
        "bullets": [
          "Verkrijgbaar in vier standaard lengtes, eenvoudig in te korten voor een perfecte pasvorm.",
          "Verstelbaar op drie sluitpunten, ideaal voor nauwkeurige afstelling.",
          "Voldoet aan de strengste veiligheidsnormen: SKG*** en PKVW.",
          "Onze sluitlijsten met een lengte van 3500 mm beschikken over 4 sluitpunten.",
          "Geschikt voor IBW2 en IBW3 toepassingen.",
          "Compatibel met zowel links- als rechtsdraaiende houten deuren.",
          "Montage in een smalle uitsparing, wat tijd en moeite bespaart.",
          "Leverbaar in geanodiseerd aluminium en gelakt zwart, passend bij elk interieur."
        ],
        "image": "assets/products/Noxxa-sluitlijst-aluminium-en-zwart.png"
      },
      {
        "heading": "Eenvoudige en Snelle Montage",
        "paragraphs": [
          "De Noxxa sluitlijst is ontworpen voor eenvoudig gebruik en installatie. Dankzij het slimme ontwerp hoeft er slechts een smalle uitsparing gefreesd te worden. De sluitlijst kan snel worden ingekort en de pen wordt eenvoudig bevestigd met schroefdraad. Dit maakt de montage niet alleen sneller, maar ook een stuk gemakkelijker."
        ],
        "bullets": [],
        "image": "assets/products/Noxxa-sluitlijst-eenvoudige-montage.png"
      },
      {
        "heading": "Maak Uw Dubbele Deuren Compleet",
        "paragraphs": [
          "Met slechts een handeling kunt u de hendel van de Noxxa sluitlijst zowel in de onder- als bovendorpel vergrendelen of openen. De hendel is ontworpen voor een soepele en lichte bediening, wat zorgt voor een moeiteloze gebruikerservaring."
        ],
        "bullets": [],
        "image": "assets/products/Noxxa-hendel-sluitlijstV2.png"
      },
      {
        "heading": "",
        "paragraphs": [
          "Voor een complete sluitoplossing kunt u kiezen voor de Noxxa sluitpotten. Elk setje bevat twee sluitpotjes en drie ringen, die geschikt zijn voor verschillende hoeken (0 graden, 6 graden, 10 graden), zodat u altijd de juiste afstelling kunt maken."
        ],
        "bullets": [],
        "image": null
      }
    ]
  },
  "deurgrepen": {
    "slug": "deurgrepen",
    "heroImage": "assets/products/image-deurgrepen.svg",
    "blocks": [
      {
        "heading": "",
        "paragraphs": [
          "Ontdek de hoogwaardige Noxxa deurgrepen, verkrijgbaar in twee exclusieve lijnen: Premium en Excellent. De Premium lijn biedt stijlvol en duurzaam aluminium, perfect voor een moderne uitstraling in zowel woningbouw als utiliteitsprojecten. De Excellent lijn, vervaardigd uit RVS, combineert robuustheid met elegantie voor een langdurige en luxe afwerking. Beide opties zijn ontworpen om elke deur een verfijnde touch te geven en zijn geschikt voor binnen en buitendeuren. Kies voor Noxxa deurgrepen en ervaar kwaliteit in elke aanraking."
        ],
        "bullets": [],
        "image": null
      },
      {
        "heading": "Noxxa Premium Aluminium Deurgrepen: Stijlvol en Duurzaam",
        "paragraphs": [
          "De Noxxa Premium aluminium deurgrepen zijn uitermate geschikt voor toepassing in zowel utiliteits- als woningbouw. Deze deurgrepen zijn verkrijgbaar in een mooie matte F1 finish en in de volgende modellen:",
          "Er zijn montagesetjes beschikbaar voor enkele montage (NX101099) en een universeel montagesetje toepasbaar voor enkele en dubbele deurgreepmontage (NX101100). Naar wens kunnen er ook deurgreeprozetjes bijbesteld worden (NX100968)."
        ],
        "bullets": [
          "Recht, in de maten: 250, 350 en 700 mm",
          "Dubbel gebogen, in de maten 250 en 350 mm"
        ],
        "image": "assets/products/NX100964.png"
      },
      {
        "heading": "Noxxa Excellent RVS Deurgrepen: Robuust en Elegant",
        "paragraphs": [
          "De Noxxa RVS deurgrepen zijn verkrijgbaar in 5 verschillende modellen, elk met varierende diameters en lengtes. Deze lijn wordt compleet gemaakt met universele bevestigingssetjes die voor extra gemak zorgen.",
          "Bestel vandaag nog uw Noxxa deurgrepen en geef uw deuren de hoogwaardige uitstraling die ze verdienen!"
        ],
        "bullets": [
          "RVS deurgreep AISI 304 mat geborsteld",
          "Snelle montage met basis schroef-gatdeel deurgrepen",
          "Extra preventie tegen roestvorming door het RVS bevestigingssysteem",
          "Voorkoming van rammelen met dubbele inbus-bevestiging en borgmiddel",
          "Extra stevige deurgreep dankzij een wanddikte van 1,5 mm i.p.v. de gangbare 1,1 mm",
          "Geschikt voor deurdiktes van 7-97 mm met de meegeleverde bevestigingsset",
          "Een schroefdraad maat (M8) voor alle greepdiameters"
        ],
          "afterBullets": [
            "Bestel vandaag nog uw Noxxa deurgrepen en geef uw deuren de hoogwaardige uitstraling die ze verdienen."
          ],
        "image": "assets/products/NX105523.png"
      }
    ]
  },
  "deuraccessoires": {
    "slug": "deuraccessoires",
    "heroImage": "assets/products/deuraccessoires-tile.svg",
    "blocks": [
      {
        "heading": "Deuraccessoires voor Stijl en Functionaliteit",
        "paragraphs": [
          "Bij Noxxa begrijpen we dat deuraccessoires essentieel zijn voor zowel de esthetiek als de functionaliteit van je deur. Ons uitgebreide assortiment deuraccessoires biedt alles wat je nodig hebt om je deur tot in de puntjes af te werken. Of je nu op zoek bent naar deurstoppers, deurvastzetters, deurbellen of brievenbussen, bij Noxxa vind je hoogwaardige producten die perfect passen bij jouw interieur en exterieur."
        ],
        "bullets": [],
        "image": null
      },
      {
        "heading": "Deurstoppers en Deurvastzetters: Bescherming en Gemak",
        "subheading": "Deurstoppers",
        "paragraphs": [
          "Deurstoppers en deurvastzetters zijn onmisbare accessoires voor elk huis. Deze kleine, maar cruciale onderdelen beschermen je muren en deuren tegen beschadigingen door te voorkomen dat deuren te ver openen of dichtslaan. Onze deurstoppers zijn robuust en blijven stevig op hun plaats, zelfs bij veelvuldig gebruik. Bovendien zijn ze verkrijgbaar in diverse stijlen en materialen, zodat je altijd een deurstopper vindt die perfect aansluit bij jouw interieur.",
        ],
        "bullets": [],
        "image": "assets/products/NX105323.png"
      },
      {
        "heading": "",
         "subheading": "Deurvastzetters",
        "paragraphs": [
          "Onze deurvastzetters bieden extra gemak door deuren stevig op hun plaats te houden. Dit is ideaal voor situaties waarin je de deur open wilt houden, zoals bij het in- en uitladen van spullen of voor ventilatie. De deurvastzetters van Noxxa zijn eenvoudig te bedienen en bieden betrouwbare stabiliteit, zodat je je geen zorgen hoeft te maken over onverwacht dichtslaande deuren.",
        ],
        "bullets": [],
        "image": "assets/products/deuraccessoires/deuraccessoires-slider2/NX105316.webp"
      },
      {
        "heading": "Noxxa briefplaten: Stijl en Functionaliteit Gecombineerd",
        "paragraphs": [
          "De Noxxa briefplaten zijn ontworpen om stijl en functionaliteit naadloos te combineren. Verkrijgbaar in verschillende materialen en afwerkingen, passen onze briefplaten perfect bij elke voordeur."
        ],
        "bullets": [],
        "image": null
      },
      {
        "heading": "",
        "subheading": "RVS Briefplaten",
        "paragraphs": [
          "Onze RVS briefplaten zijn beschikbaar in ovale en rechthoekige modellen en zijn voorzien van een praktische regenrand die je post beschermt tegen vocht en weersinvloeden. Deze regenrand zorgt ervoor dat je brieven en pakketjes droog en veilig blijven. Bovendien geeft de RVS afwerking je voordeur een tijdloze, luxe uitstraling die jarenlang meegaat."
        ],
        "bullets": [],
        "image": "assets/products/NX105327.png"
      },
      {
        "heading": "",
        "subheading": "Aluminium Briefplaten",
        "paragraphs": [
          "Voor wie de voorkeur geeft aan aluminium, biedt Noxxa geveerde aluminium briefplaten die zowel stevig als duurzaam zijn. Deze briefplaten zijn ontworpen om water-, wind- en geluidswerend te zijn, waardoor je huis beter beschermd blijft tegen de elementen en ongewenst geluid van buitenaf. Verkrijgbaar in zowel ronde als rechthoekige uitvoeringen, bieden wij aluminium briefplaten in de klassieke aluminium F1 kleur en een stijlvolle zwart gecoate variant."
        ],
        "bullets": [],
        "image": "assets/products/NX100154.png"
      }
    ]
  },
  "frees-en-boormallen": {
    "slug": "frees-en-boormallen",
    "heroImage": "assets/products/NX100000_v2.png",
    "blocks": [
      {
        "heading": "Boormallen voor Deurbeslag",
        "subheading": "Binnendeurbeslag",
        "paragraphs": [
          "De Noxxa binnendeurbeslag collectie biedt drie productlijnen: Basic, Premium en Excellent. Dankzij een uniform gatenpatroon zijn alle binnendeurschilden eenvoudig uitwisselbaar en te upgraden. Met de boormal (art. NX102158) zorg je voor een snelle en foutloze montage, ideaal voor projecten waarbij tijd en kosten belangrijk zijn."
        ],
        "bullets": [],
        "image": "assets/products/NX102158.png"
      },
      {
        "heading": "",
        "subheading": "Buitendeurbeslag",
        "paragraphs": [
          "Net als bij het binnendeurbeslag, is het buitendeurbeslag beschikbaar in Basic, Premium en Excellent. Alle langschilden hebben hetzelfde gatenpatroon, wat de montage eenvoudig maakt en onderlinge uitwisseling mogelijk maakt. Met de speciale boormal voor veiligheidlangschilden monteer je snel en accuraat, wat bij grotere aantallen aanzienlijke besparingen kan opleveren."
        ],
        "bullets": [],
        "image": "assets/products/NX100000.png"
      },
      {
        "heading": "Scharnieren freesmallen",
        "paragraphs": [
          "De Noxxa freesmallen zijn ontworpen voor het nauwkeurig infrezen van scharnieren (89x89 mm en 90x90 mm) in zowel kozijnen als deuren. Geschikt voor zowel linkse als rechtse deuren, inclusief deuren met voorgemonteerde tochtstrip. Deze mallen garanderen een perfecte pasvorm met een vaste afstand van 2 mm tussen de deur en de bovenste deurpost en 1 mm tussen deur en kozijn.",
          "Gebruik een frees met een diameter van 20 mm en een sjabloonring van 30 mm of 29 mm voor scharnieren van 90x90 mm. Deze mal is geschikt voor alle kozijnen van stompe deuren tot 2600 mm hoogte. Noxxa biedt ook een freesmal voor 76x76 mm scharnieren."
        ],
        "bullets": [
          "Eenmalige Setup: Stel de aanslag en sjablonen nauwkeurig in op de juiste afstanden. Gebruik een bolkop inbussleutel om de schroeven vast te draaien.",
          "Plaatsen op Kozijn: Positioneer de mal tegen de bovenste deurpost en zorg dat de sjablonen goed tegen de sponning liggen. Bevestig met 4 mm schroeven.",
          "Plaatsen op Deur: Leg de mal op de deur en zorg dat de deuraanslag correct zit. Laat de zwaartekrachtgestuurde aanslagen op hun plek vallen en bevestig met 4 mm schroeven."
        ],
        "image": "assets/products/NX105424.png"
      },
      {
        "heading": "Onzichtbare Scharnier Freesmal",
        "paragraphs": [
          "De Noxxa freesmal is specifiek ontworpen voor het nauwkeurig infrezen van onzichtbare scharnieren in zowel kozijnen als deuren, geschikt voor deuren tot 2600 mm hoogte. Het is van essentieel belang dat de sponningbreedte zorgvuldig wordt afgestemd: deze moet idealiter 1 mm breder zijn dan de deurdikte, met een maximum van 3 mm (exclusief tochtstrip). Vermijd het gebruik van een voorsponning om de juiste pasvorm te garanderen.",
          "Deze freesmal is geschikt voor zowel linkse als rechtse deuren en zorgt voor een vaste afstand van 2 mm tussen de deur en de bovenste deurpost. De afstand tussen de deur en de sponning kan eenvoudig worden aangepast via het scharnier. Voor een nauwkeurige installatie wordt de mal tegen de buitenzijde van zowel het kozijn als de deur geplaatst en vastgezet met schroeven of universele lijmklemmen. Het bovenste sjabloon wordt omgekeerd gemonteerd, wat het mogelijk maakt om het scharnier op een hogere positie te plaatsen.",
          "De mal is zo ontworpen dat de buitenzijde van de deur gelijk ligt met de buitenzijde van het kozijn. Voor extra stabiliteit worden de aanslagkokertjes tegen de onderzijde van de sjablonen geplaatst. Onderlegringen worden gebruikt om het scharnier nauwkeurig te positioneren; doorgaans moet het scharnier ongeveer 4 mm uitsteken aan de buitenzijde van de deur.",
          "Met de Noxxa freesmal behaal je een professioneel resultaat, waarbij de onzichtbare scharnieren perfect worden geintegreerd in zowel de deur als het kozijn."
        ],
        "bullets": [],
        "image": "assets/products/boor-freesmallen/NX101687.png"
      },
      {
        "heading": "Freesmal Sluitplaten en Sluitkommen",
        "paragraphs": [
          "Ook voor het infrezen van woningbouwsluitplaten heeft Noxxa een efficiente oplossing. De sluitplaten freesmal is ideaal voor het nauwkeurig infrezen van sluitkommen voor Noxxa meerpuntsluitingen in kozijnen, geschikt voor zowel kozijnen met als zonder tochtstrip. Deze freesmal is ontworpen voor deuren met een hoogte tussen 2 m en 2,5 m en biedt een snelle verstelling van het bovenste sjabloon voor zowel korte als lange uitvoeringen van meerpuntsluitingen.",
          "Een belangrijk kenmerk van deze mal is de mogelijkheid om de sluitplaat in een opspanning uit te frezen. Dit zorgt voor een nauwkeurige en consistente afwerking. Voor seniorenuitvoeringen kan de mal eenvoudig worden aangepast door het middelste sjabloon om te draaien, waardoor het perfect aansluit bij de specifieke behoeften van de installatie.",
          "Gebruik bij voorkeur een sjabloonring en frees met een diameterverschil van 5 mm, zoals bijvoorbeeld 17 mm en 12 mm, om het beste resultaat te bereiken."
        ],
        "bullets": [],
        "image": "assets/products/NX101278.png"
      }
    ]
  },
  "black-bluestone-onderdorpels": {
    "slug": "black-bluestone-onderdorpels",
    "heroImage": "assets/products/0000_Onderdorpel2.png",
    "blocks": [
      {
        "heading": "Lichtgewicht, sterk en breukvast",
        "paragraphs": [
          "De Noxxa Black- en Bluestone onderdorpels zijn samengesteld uit glasvezelversterkt kunststof. Het profiel bestaat voor een groot gedeelte uit glas en heeft een gestructureerd oppervlak door de zware UV-bestendige coating. De neuten worden gefreesd uit polyethyleen.",
          "Belangrijke voordelen zijn het lichte gewicht, de grote sterkte, breukvastheid en minimale uitzettingcoefficient. De onderdorpels hebben als basis een zeer gunstige isolatiewaarde omdat de aanwezige lucht in de holle kamers een perfecte isolator zijn. In de geisoleerde onderdorpel is de UFR waarde zelfs beter dan HR++ glas. Afhankelijk van de gekozen uitvoering en kozijnsamenstelling is een UFR waarde van 0.89 haalbaar."
        ],
        "bullets": [],
        "image": "assets/products/0000_Onderdorpel2.png"
      },
      {
        "heading": "Lange levensduur en minder faalkosten",
        "paragraphs": [
          "Glasvezelcomposiet (GVC) dorpels worden op een specifieke, unieke methode geproduceerd. Zo worden o.a. de glasvezelmatten in de massa gehouden d.m.v. een glasvlies. Deze unidirectionale methode inclusief glasvlies zorgen ervoor dat de glasvezels niet kunnen doordringen naar de oppervlakte door ozon en UV-belasting. GVC-onderdorpels zijn daarom zeer duurzaam en hebben hierdoor ook een zeer lange levensduur."
        ],
        "bullets": [],
        "image": null
      },
      {
        "heading": "Eigenschappen van Black- en Bluestone onderdorpels",
        "paragraphs": [],
        "bullets": [
          "Geschikt voor alle profielcombinaties",
          "Lichtgewicht, ijzersterk en breukvast",
          "Op maat gemaakt met een korte levertijd",
          "Hoge isolatiewaarde",
          "Gefreesde neuten",
          "Kleine CO2-voetafdruk"
        ],
        "image": "assets/products/0001_Onderdorpel1.png"
      }
    ]
  },
  "meerpuntssluitingen": {
    "slug": "meerpuntssluitingen",
    "heroImage": "assets/products/NX102652_V2.webp",
    "blocks": [
      {
        "heading": "Meerpuntssluitingen voor Extra Veiligheid",
        "paragraphs": [],
        "bullets": [
          "Leverbaar in krukbediende en cilinderbediende uitvoering",
          "Leverbaar met voorplaatlengte 1750 - 1935 en 2400 mm",
          "Voorplaatbreedte 24 mm",
          "Alle freesmacro's zijn voorhanden",
          "Sluitkommen links of rechts toepasbaar, met sluitplaten van 33 of 37,5 mm lange sluitlip"
        ],
        "image": null
      },
      {
        "heading": "Haakschoten",
        "paragraphs": [
          "De Noxxa meerpuntssluitingen met SKG*** keurmerk zijn voorzien van hakende schoten in de sluitplaten. Deze schoten vergrendelen naar boven, wat verhaken voorkomt, zelfs als de deur wat zakt."
        ],
        "bullets": [],
        "image": "assets/products/NX102652_V2.png"
      },
      {
        "heading": "Zelfvergrendelende Schoten",
        "paragraphs": [
          "Het Noxxa zelfvergrendelende meerpuntssysteem biedt een hoog beveiligingsniveau en gemak doordat direct bij het sluiten van de deur meerdere vergrendelpunten geactiveerd worden, zonder dat een sleutel nodig is. Dit systeem is optioneel uit te breiden met een automatische deuropener om de deur op afstand te kunnen vergrendelen of ontgrendelen. Dit kan eventueel geintegreerd worden in een domoticasysteem."
        ],
        "bullets": [],
        "image": "assets/products/NX102651_V2.png"
      },
      {
        "heading": "Freesmal voor Sluitkommen",
        "paragraphs": [
          "De Noxxa freesmal is ontworpen voor het nauwkeurig infrezen van sluitkommen en sluitplaten in het kozijn, geschikt voor deuren van 2 tot 2,5 meter hoogte."
        ],
        "bullets": [],
        "image": "assets/products/NX101277_V2.png"
      },
      {
        "heading": "Renovatie meerpuntsluitingen",
        "paragraphs": [
          "De oplossing voor meer dan 2000 bestaande deursituaties."
        ],
        "bullets": [],
        "image": null
      },
      {
        "heading": "Slim vervangen zonder aanpassingen",
        "paragraphs": [
          "Wie ooit een meerpuntssluiting heeft vervangen, weet het: dat is zelden eenvoudig. Het demonteren is nog te doen, maar een passend vervangend model vinden is vaak een uitdaging. Types zijn niet meer verkrijgbaar, maatvoeringen wijken af en aanpassingen aan deur of kozijn kosten tijd en geld.",
          "De renovatie-meerpuntssluitingen maakt vervangen eenvoudig, zonder aanpassingen aan deur of kozijn. Deze sluitingen zijn speciaal ontwikkeld om bestaande sloten te vervangen zonder frezen of aanpassingen aan deur of kozijn.",
          "De modulaire opbouw met losse componenten zorgt voor maximale flexibiliteit. In de meeste gevallen kun je het systeem een-op-een overzetten, ongeacht merk of type. Dankzij de handige verbindingspunten is montage eenvoudig en snel. De verlengingen kunnen naar wens worden ingekort met een ijzerzaag, zodat de sluiting perfect past."
        ],
        "bullets": [],
        "image": "assets/products/GU-SECURY-MR.jpg"
      },
      {
        "heading": "Uitvoeringen",
        "paragraphs": [],
        "bullets": [
          "Doornmaten: 35, 40, 45, 50, 55mm",
          "Voorplaten: vlak verzinkt 16mm, vlak verzinkt 20mm, vlak RVS 24mm, U-voorplaat",
          "Verzinkt 24 X 6PC-afmetingen: PC72 & PC92",
          "Vergrendelingstypes: rolnok, penschoot, sluithaak, massieve blokschoot"
        ],
        "image": null
      },
      {
        "heading": "Vergrendelingstypes",
        "paragraphs": [],
        "bullets": [],
        "image": "assets/products/rolnok-detail.png",
        "strongParagraphs": [
          {
            "label": "1. Rolnok:",
            "text": " De instelbare rolnokken zorgen voor een optimale aanpersdruk boven- en onderaan de deur."
          },
          {
            "label": "2. Penschoot:",
            "text": " De geharde stalen penschoten met een sluitlengte van 20mm en een diameter van 11mm passen precies in de sluitplaat en het deurkozijn. Zij zorgen voor een veilig gebruik in stalen DIN-deurkozijnen."
          },
          {
            "label": "3. Sluithaak:",
            "text": " Veilige vergrendeling dankzij de sluithaak. Dit meerpuntsslot vergrendelt door een haak die stevig in de sluitplaat grijpt. Dankzij de opwaarts werkende vergrendeling wordt bij het verzakken van de deur voorkomen dat de haak zich vastzet of klemt in de sluitplaat."
          },
          {
            "label": "4. Blokschoot:",
            "text": " Met dit systeem krijg je een beveiligd meerpuntsslot, voorzien van massieve schoten."
          }
        ]
      }
    ]
  }
};
