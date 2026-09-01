import { Component } from '@angular/core';

interface SalesPoint {
  name: string;
  logo: string;
  description: string;
  url: string;
}

@Component({
  selector: 'nx-verkooppunten',
  imports: [],
  templateUrl: './verkooppunten.html',
  styleUrl: './verkooppunten.scss',
})
export class Verkooppunten {
  protected readonly points: SalesPoint[] = [
    {
      name: 'Isero',
      logo: 'assets/isero-logo.svg',
      description: 'Landelijke ijzerwaren- en gereedschapsspecialist met vestigingen door heel Nederland.',
      url: 'https://www.isero.nl/nl-nl/store-finder',
    },
    {
      name: 'Polvo',
      logo: 'assets/polvo-logo.svg',
      description: 'Groothandel in gereedschappen, bevestigingsmiddelen, hang- en sluitwerk voor de professional.',
      url: 'https://polvobv.nl/nl-nl/storelocator',
    },
    {
      name: 'Weijntjes',
      logo: 'assets/weijntjes-logo.svg',
      description: 'Sinds 1884, de speciaalzaak voor uniek hang- en sluitwerk',
      url: 'https://www.weijntjes.nl/onze-winkels',
    },
  ];
}
