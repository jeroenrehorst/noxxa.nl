import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORIES, MAIN_CATEGORY_SLUGS, getCategory, Category } from '../../data/categories';
import { CATEGORY_CONTENT } from '../../data/category-content';

interface CategoryCard extends Category {
  image: string | null;
}

interface SalesPoint {
  name: string;
  logo: string;
  description: string;
  url: string;
}

@Component({
  selector: 'nx-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly categories: CategoryCard[] = MAIN_CATEGORY_SLUGS.map((s) => {
    const cat = getCategory(s)!;
    return { ...cat, image: CATEGORY_CONTENT[s]?.heroImage ?? null };
  });
  protected readonly featured: CategoryCard[] = ['cilinders', 'buitendeurbeslag', 'meerpuntssluitingen'].map(
    (s) => {
      const cat = getCategory(s)!;
      return { ...cat, image: CATEGORY_CONTENT[s]?.heroImage ?? null };
    },
  );
  protected readonly total = CATEGORIES.length;

  protected readonly productLines = [
    {
      name: 'Basic',
      image: 'assets/Label_Basic.png',
      text: 'Een robuuste hang- en sluitwerk lijn, geschikt voor woningbouwprojecten. Deze lijn voldoet aan de hoge kwaliteitseisen die Noxxa aan haar assortiment stelt, met vooral artikelen die in de standaard woningbouw gebruikt worden.',
    },
    {
      name: 'Premium',
      image: 'assets/Label_Premium.png',
      text: 'Een zeer brede hang- en sluitwerk lijn, geschikt voor utiliteits- en middensegment woningbouw. De artikelen binnen deze lijn hebben meer functionaliteiten en er is meer gelet op de uitstraling van de producten.',
    },
    {
      name: 'Excellent',
      image: 'assets/Label_Excellent.png',
      text: 'Een fraaie en hoogwaardige hang- en sluitwerk lijn, geschikt voor utiliteits- en luxere woningbouw. Standaard voorzien van unieke eigenschappen, gemaakt van de beste materialen en met een luxe uitstraling.',
    },
  ];

  protected readonly about = [
    'Met meer dan 1500 artikelen van het merk Noxxa hoef je je geen zorgen te maken. \nJe bent bij ons aan het juiste adres voor advies voor diverse toepassingen in verschillende branches.',
    'Wij adviseren bouw- en aannemingsbedrijven, woningbouwcoöperaties, VvE’s, timmerfabrieken en andere verwerkers graag op het gebied van hang- en sluitwerk om tot de beste oplossing te komen. \nUiteraard is de particulier ook van harte welkom voor het beste hang- en sluitwerk van Noxxa.',
    'Het label Noxxa is geïntroduceerd met diverse modellen in verschillende productlijnen zoals: Noxxa Basic, Noxxa Premium en Noxxa Excellent. Deze productlijnen bieden veel gebruiksvoordelen.',
    'Wij zijn Noxxa en staan klaar om je te helpen',
  ];

  protected readonly points: SalesPoint[] = [
    {
      name: 'Isero',
      logo: 'assets/isero-logo.svg',
      description: 'Landelijke ijzerwaren- en gereedschapsspecialist met vestigingen door heel Nederland.',
      url: 'https://www.isero.nl',
    },
    {
      name: 'Polvo',
      logo: 'assets/polvo-logo.svg',
      description: 'Groothandel in bevestigings-, hang- en sluitwerk voor de professional.',
      url: 'https://www.polvobv.nl',
    },
    {
      name: 'Weijntjes',
      logo: 'assets/weijntjes-logo.svg',
      description: 'Specialist in gereedschappen, bevestiging en hang- en sluitwerk.',
      url: 'https://www.weijntjes.nl',
    },
  ];
}
