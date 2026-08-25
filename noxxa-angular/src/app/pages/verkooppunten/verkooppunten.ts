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
