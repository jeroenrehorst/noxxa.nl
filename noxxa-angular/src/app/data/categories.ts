export interface Category {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  sections: string[];
}

export const CATEGORIES: Category[] = [
  {
    slug: 'binnendeurbeslag',
    name: 'Binnendeurbeslag',
    tagline: 'Duurzaam beslag voor elke binnendeur',
    intro:
      'Ben je op zoek naar hoogwaardig binnendeurbeslag dat geschikt is voor intensief gebruik? Overweeg dan de Noxxa collectie. Noxxa biedt een uitgebreid assortiment aan binnendeurbeslag, vervaardigd uit duurzame materialen met een slijt- en krasvaste afwerking.',
    sections: ['Noxxa Basic', 'Noxxa Premium', 'Noxxa Excellent'],
  },
  {
    slug: 'buitendeurbeslag',
    name: 'Buitendeurbeslag',
    tagline: 'Veilig en eigentijds buitendeurbeslag',
    intro:
      'Op zoek naar eigentijds buitendeurbeslag dat bestand is tegen intensief gebruik? Noxxa biedt een uitgebreide selectie die aan jouw behoeften voldoet. Het buitendeurbeslag van Noxxa is vervaardigd uit hoogwaardige materialen en heeft een duurzame, slijt- en krasvaste afwerking.',
    sections: [
      'SKG en PKVW – Veiligheid gegarandeerd',
      'Eenvoudige Montage',
      'Noxxa Basic',
      'Noxxa Premium',
      'Noxxa Excellent',
    ],
  },
  {
    slug: 'cilinders',
    name: 'Cilinders',
    tagline: 'Ongeëvenaarde veiligheid en kwaliteit',
    intro:
      'Met decennialange expertise in hang- en sluitwerk is Noxxa dé toonaangevende specialist op het gebied van deurbeveiliging. Onze profielcilinders bieden de ultieme oplossing voor elke deur, of het nu gaat om particulier gebruik, utiliteitsbouw, of complexe sluitsystemen. Met ons uitgebreide assortiment kunnen wij altijd een advies op maat geven, perfect afgestemd op uw specifieke beveiligingseisen en wensen.',
    sections: [
      'Noxxa Profielcilinders: Uw Partner in Ongeëvenaarde Veiligheid en Kwaliteit',
      'Relock: Duurzaam, Veilig en Kostenbesparend',
      'Noxxa Basic',
      'Noxxa Premium',
      'Noxxa Excellent',
    ],
  },
  {
    slug: 'sloten',
    name: 'Sloten',
    tagline: 'Veelzijdige sloten voor woningbouw en projecten',
    intro:
      'Onze veelzijdige woningbouwsloten zijn de ideale keuze voor al uw binnendeuren. Of u nu een nieuwe woonkamerdeur, kastdeur, WC-deur, badkamerdeur of slaapkamerdeur van een slot wilt voorzien of bestaande hoofdsloten wilt vervangen bij een defect slot of interieurwijziging, onze sloten zijn eenvoudig te monteren en passen perfect.',
    sections: [
      'Sloten voor woningbouw en projecten',
      'Projectsloten voor Utiliteitsbouw',
      'Smaldeursloten voor Smalle Deurstijlen',
      'Veiligheids Insteeksloten met SKG-certificering',
    ],
  },
  {
    slug: 'deurdrangers',
    name: 'Deurdrangers',
    tagline: 'Functioneel en esthetisch',
    intro:
      'De Noxxa Premium deurdrangers zijn ontworpen om zowel functioneel als esthetisch aantrekkelijk te zijn, met opties voor verschillende deursituaties en -vereisten.',
    sections: ['Noxxa Premium Deurdrangers', 'Installatie en Gebruik'],
  },
  {
    slug: 'anti-paniekbeslag',
    name: 'Vluchtwegtechniek',
    tagline: 'Veiligheid wanneer elke seconde telt',
    intro:
      'Anti-paniekbeslag van Noxxa Premium: veiligheid wanneer elke seconde telt. Betrouwbaar inbouw anti-paniekbeslag voor nooduitgangen dat voldoet aan de strenge Europese veiligheidsnormen.',
    sections: [
      'Inbouw Anti-paniekbeslag voor Nooduitgangen',
      'Waarom Kiezen voor Noxxa Anti-paniekbeslag?',
      'Voldoet aan strenge Europese Veiligheidsnormen',
      '13 standaard anti-paniekpakketten op voorraad',
    ],
  },
  {
    slug: 'schuifdeurbeslag',
    name: 'Schuifdeurbeslag',
    tagline: 'Innovatieve oplossingen voor deuren en meubels',
    intro:
      'Bij Noxxa vindt u een uitgebreid assortiment schuifdeursystemen, perfect voor deuren, kasten en diverse meubels. Ons technisch geavanceerde schuifdeurbeslag is ontworpen voor zowel plafond-, wand- als in-de-wand toepassingen. De hoogwaardige kogelgelagerde loopwagens, uitgerust met geïntegreerde reinigingsborstels, zorgen voor een soepele en geruisloze werking.',
    sections: [
      'Schuifdeurbeslag van Noxxa: Innovatieve Oplossingen voor Deuren en Meubels',
      'Montage: Eenvoudig, Snel en Efficiënt',
      'Luxeslide NK 100: Standaard en Luxe',
      'Luxeslide SK 100: Strakke Afwerking met Minimale Kier',
      'Luxeslide Pocket 100 NK & SK: Ideaal voor In-de-Wand Toepassingen',
      'Furnislide: Eenvoudig Te Installeren Kastdeurbeslag',
    ],
  },
  {
    slug: 'scharnieren',
    name: 'Scharnieren en paumelles',
    tagline: 'Een passende oplossing voor elke deur',
    intro:
      'Noxxa biedt een compleet assortiment scharnieren en paumelles, beschikbaar in verschillende diktes en maten, zoals ongelagerde scharnieren, kogellagerscharnieren en glijlagerscharnieren. Voor elke deur is er een passende oplossing, of het nu gaat om een lichte binnendeur of een zware buitendeur.',
    sections: [
      'Stiletto® – Gepatenteerd Bevestigingssysteem',
      'Kogelstift Paumelles SKG***',
      'Onzichtbare Scharnieren',
      'Taatsdeurscharnieren',
      'Kogellagerscharnieren',
      'Vierkante scharnieren',
      'Glijlagerscharnieren',
      'Paumelles',
      'Inboorpaumelles',
    ],
  },
  {
    slug: 'valdorpels',
    name: 'Valdorpels',
    tagline: 'Hoogwaardige valdorpels in drie productlijnen',
    intro:
      'De valdorpels van Noxxa zijn van hoogwaardige kwaliteit en beschikbaar binnen de 3 productlijnen Basic, Premium en Excellent. Er zijn diverse valdorpels voor houten deuren, veiligheidsdeuren en branddeuren.',
    sections: ['Basic universeel', 'Premium valdorpels', 'Excellent valdorpel'],
  },
  {
    slug: 'hang-en-discussloten',
    name: 'Hang- en discussloten',
    tagline: 'Maximale veiligheid met Noxxa sloten',
    intro:
      'Ontdek de Premium hangsloten van Noxxa, ontworpen voor ultieme veiligheid en betrouwbaarheid in elke situatie. Of u nu uw huis, werkplaats of bouwplaats wilt beveiligen, Noxxa biedt een breed scala aan hangsloten en discussloten die voldoen aan uw specifieke beveiligingsbehoeften.',
    sections: [
      'Noxxa Messing Hangsloten',
      'Noxxa Cijferhangslot Messing',
      'Noxxa Discussloten RVS',
      'Noxxa Anti-diefstal Hardstalen Ketting',
      'Noxxa Pantserhangslot RVS',
    ],
  },
  {
    slug: 'sluitlijsten',
    name: 'Sluitlijsten',
    tagline: 'Stijlvol design en maximale inbraakwerendheid',
    intro:
      'De Noxxa sluitlijst is dé oplossing voor wie op zoek is naar een combinatie van stijlvol design en maximale inbraakwerendheid (SKG***). Deze sluitlijst blinkt uit in gebruiksvriendelijkheid, waarbij zowel aan de verwerker als de eindgebruiker is gedacht.',
    sections: ['Noxxa Sluitlijsten voor Dubbele Deuren – Maximale Veiligheid met Stijl'],
  },
  {
    slug: 'deurgrepen',
    name: 'Deurgrepen',
    tagline: 'Kwaliteit in elke aanraking',
    intro:
      'Ontdek de hoogwaardige Noxxa deurgrepen, verkrijgbaar in twee exclusieve lijnen: Premium en Excellent. De Premium lijn biedt stijlvol en duurzaam aluminium, terwijl de Excellent lijn — vervaardigd uit RVS — robuustheid combineert met elegantie voor een langdurige en luxe afwerking.',
    sections: [
      'Noxxa Premium Aluminium Deurgrepen: Stijlvol en Duurzaam',
      'Noxxa Excellent RVS Deurgrepen: Robuust en Elegant',
    ],
  },
  {
    slug: 'deuraccessoires',
    name: 'Deuraccessoires',
    tagline: 'De perfecte afwerking voor elke deur',
    intro:
      'Bij Noxxa begrijpen we dat deuraccessoires essentieel zijn voor zowel de esthetiek als de functionaliteit van uw deur. Ons uitgebreide assortiment biedt alles wat u nodig heeft om uw deur tot in de puntjes af te werken, van deurstoppers en deurvastzetters tot deurbellen en brievenbussen.',
    sections: [
      'Deuraccessoires voor Stijl en Functionaliteit',
      'Deurstoppers en Deurvastzetters: Bescherming en Gemak',
      'Noxxa briefplaten: Stijl en Functionaliteit Gecombineerd',
    ],
  },
  {
    slug: 'frees-en-boormallen',
    name: 'Frees- en boormallen',
    tagline: 'Nauwkeurig frezen en boren van deurbeslag',
    intro:
      'Noxxa biedt een compleet assortiment frees- en boormallen voor deurbeslag en scharnieren. Hiermee freest en boort u nauwkeurig en snel, voor een strakke montage van beslag, sluitplaten en sluitkommen.',
    sections: [
      'Frees- en boormallen voor deurbeslag en scharnieren',
      'Scharnieren freesmallen',
      'Freesmal Sluitplaten en Sluitkommen',
    ],
  },
  {
    slug: 'meerpuntssluitingen',
    name: 'Renovatie Meerpuntssluitingen',
    tagline: 'Extra veiligheid met SKG*** keurmerk',
    intro:
      'De Noxxa meerpuntssluitingen met SKG*** keurmerk zijn voorzien van hakende schoten in de sluitplaten. Deze schoten vergrendelen naar boven, wat verhaken voorkomt, zelfs als de deur wat zakt. Leverbaar in krukbediende en cilinderbediende uitvoering.',
    sections: [
      'Meerpuntssluitingen voor Extra Veiligheid',
      'Renovatie meerpuntssluitingen',
      'Uitvoeringen',
    ],
  },
  {
    slug: 'black-bluestone-onderdorpels',
    name: 'Black & Bluestone onderdorpels',
    tagline: 'Sterk, isolerend én lichtgewicht',
    intro:
      'De Noxxa Black- en Bluestone onderdorpels zijn samengesteld uit glasvezelversterkt kunststof. Het profiel bestaat voor een groot gedeelte uit glas en heeft een gestructureerd oppervlak door de zware UV-bestendige coating. De neuten worden gefreesd uit polyethyleen.',
    sections: [
      'Sterk, Isolerend EN Lichtgewicht',
      'Lange levensduur en minder faalkosten',
      'Eigenschappen van Black- en Bluestone onderdorpels',
    ],
  },
];

export const MAIN_CATEGORY_SLUGS = [
  'binnendeurbeslag',
  'buitendeurbeslag',
  'cilinders',
  'sloten',
  'deurdrangers',
  'anti-paniekbeslag',
  'schuifdeurbeslag',
  'scharnieren',
  'valdorpels',
  'hang-en-discussloten',
  'sluitlijsten',
  'deurgrepen',
  'deuraccessoires',
  'frees-en-boormallen',
  'meerpuntssluitingen',
  'black-bluestone-onderdorpels',
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
