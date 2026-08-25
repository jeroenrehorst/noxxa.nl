import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nx-documentatie',
  imports: [RouterLink],
  templateUrl: './documentatie.html',
  styleUrl: './documentatie.scss',
})
export class Documentatie {
  protected readonly downloads = [
    {
      title: 'Montagehandleiding deur',
      description: 'Stapsgewijze montagehandleiding voor deurtoepassingen.',
      file: 'assets/docs/Noxxa_Montagehandleiding_deur_250919.pdf',
    },
    {
      title: 'Montagehandleiding raam',
      description: 'Stapsgewijze montagehandleiding voor raamtoepassingen.',
      file: 'assets/docs/Noxxa_Montagehandleiding_raam_20250908.pdf',
    },
  ];

  protected readonly docTypes = [
    {
      title: 'Brochures',
      text: 'Volledige productbrochures met het complete Noxxa assortiment en specificaties.',
      icon: '📘',
    },
    {
      title: 'Montagehandleidingen',
      text: 'Stapsgewijze handleidingen voor een correcte en snelle installatie.',
      icon: '🛠️',
    },
    {
      title: "Montagevideo's",
      text: 'Instructievideo’s die de montage van beslag en sluitwerk demonstreren.',
      icon: '🎬',
    },
    {
      title: 'Lijntekeningen',
      text: 'Technische lijntekeningen met exacte maatvoering per product.',
      icon: '📐',
    },
    {
      title: 'Productbladen',
      text: 'Gedetailleerde productbladen met alle technische eigenschappen.',
      icon: '📄',
    },
  ];
}
