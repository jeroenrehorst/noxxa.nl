import { Component } from '@angular/core';

@Component({
  selector: 'nx-privacybeleid',
  imports: [],
  templateUrl: './privacybeleid.html',
  styleUrl: './privacybeleid.scss',
})
export class Privacybeleid {
  protected readonly sections = [
    { anchor: 'anchor1', label: '1. Belangrijke informatie en wie wij zijn' },
    { anchor: 'anchor2', label: '2. De gegevens die wij over u verzamelen' },
    { anchor: 'anchor3', label: '3. Hoe worden uw persoonlijke gegevens verzameld?' },
    { anchor: 'anchor4', label: '4. Hoe gebruiken wij uw persoonlijke gegevens?' },
    { anchor: 'anchor5', label: '5. Bekendmaking van uw persoonlijke gegevens' },
    { anchor: 'anchor6', label: '6. Overdracht van uw persoonlijke gegevens' },
    { anchor: 'anchor7', label: '7. Gegevensbeveiliging' },
    { anchor: 'anchor8', label: '8. Gegevensbewaring' },
    { anchor: 'anchor9', label: '9. Uw wettelijke rechten' },
    { anchor: 'anchor10', label: '10. Toezicht' },
  ];

  protected scrollToAnchor(event: Event, anchor: string): void {
    event.preventDefault();
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  protected handlePrivacyTextClick(event: MouseEvent): void {
    const target = event.target;
    if (!(target instanceof Element) || !target.closest('a[href="#top"]')) {
      return;
    }

    this.scrollToAnchor(event, 'top');
  }
}
