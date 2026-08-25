import { Component } from '@angular/core';

@Component({
  selector: 'nx-privacybeleid',
  imports: [],
  templateUrl: './privacybeleid.html',
  styleUrl: './privacybeleid.scss',
})
export class Privacybeleid {
  protected readonly sections = [
    '1. Belangrijke informatie en wie wij zijn',
    '2. De gegevens die wij over u verzamelen',
    '3. Hoe worden uw persoonlijke gegevens verzameld?',
    '4. Hoe gebruiken wij uw persoonlijke gegevens?',
    '5. Bekendmaking van uw persoonlijke gegevens',
    '6. Overdracht van uw persoonlijke gegevens',
    '7. Gegevensbeveiliging',
    '8. Gegevensbewaring',
    '9. Uw wettelijke rechten',
    '10. Toezicht',
  ];
}
