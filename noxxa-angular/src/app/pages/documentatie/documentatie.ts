import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'nx-documentatie',
  templateUrl: './documentatie.html',
  styleUrl: './documentatie.scss',
})
export class Documentatie {
  protected readonly documentSearch = signal('');
  protected readonly uncategorizedOpen = signal(false);
  protected readonly searchActive = computed(() => this.documentSearch().trim().length > 0);

  protected readonly downloads = [
    {
      title: '1200 serie binnendeursloten',
      file: 'assets/documentatie-content/montagehandleidingen/Noxxa-montagehandleiding-1200-serie.pdf',
    },
    {
      title: '4000 serie veiligheidsslot / sluitkom',
      file: 'assets/documentatie-content/montagehandleidingen/Noxxa-montagehandleiding-4000-serie_Veiligheidsdeurslot-NX105149-NX105150-NX105151-NX105152-NX105153-NX105154-NX105155-NX105156_Sluitkom-NX105605.pdf',
    },
    {
      title: 'Veiligheidssluitkommen',
      file: 'assets/documentatie-content/montagehandleidingen/Noxxa-montagehandleiding-veiligheidssluitkom-NX105605-NX105604.pdf',
    },
    {
      title: 'Inbouwsluitlijst Serie 3809 Raam',
      file: 'assets/documentatie-content/montagehandleidingen/Noxxa_Montagehandleiding_raam_20250908-SERIE NX-3809-RAAM.pdf',
    },
    {
      title: 'Inbouwsluitlijst Serie 3809 Deur',
      file: 'assets/documentatie-content/montagehandleidingen/Noxxa_Montagehandleiding_deur_250919-SERIE-NX-3809-DEUR.pdf',
    },
    {
      title: 'Cilinder- en krukbediende meerpuntssluitingen',
      file: 'assets/documentatie-content/montagehandleidingen/Montagehandleiding_Noxxa-MPS_cb-NX102652-NX102662-NX102664-NX102665-NX102666-NX104028_kb-NX102653-NX102663-NX102667-NX102668.pdf',
    },
    {
      title: 'Veiligheidsdeurslot - sluitkom',
      file: 'assets/documentatie-content/montagehandleidingen/Noxxa-montagehandleiding-Veiligheidsdeurslot-NX100894.pdf',
    },
  ];
  


  protected readonly docTypes = [
    {
      image: 'assets/documentatie-content/brochures/Noxxa-algemene-brochure-image.png',
      title: 'Algemene brochure',
      file: 'assets/documentatie-content/brochures/Noxxa-brochure_algemeen_LR.pdf',
    },
    {
      image: 'assets/documentatie-content/brochures/image-folder-noxxa-basic-deurbeslag.png',
      title: 'Basic deurbeslag',
      file: 'assets/documentatie-content/brochures/Deurbeslag_Noxxa_BASIC_lowres.pdf',
    },
    {
      image: 'assets/documentatie-content/brochures/image-folder-noxxa-aluline.png',
      title: "Aluline deurbeslag",
      file: 'assets/documentatie-content/brochures/Noxxa-Folder-ALULINE_lowres.pdf',
    },
    {
      image: 'assets/documentatie-content/brochures/image-folder-noxxa-inoxline-rvs-deurbeslag.png',
      title: 'Inoxline deurbeslag',
      file: 'assets/documentatie-content/brochures/Noxxa-brochure_inoxline_lowres.pdf',
    },
    {
      image: 'assets/documentatie-content/brochures/noxxa-renovatie-meerpuntssluitingen-folder.png',
      title: 'Meerpuntssluitingen',
      file: 'assets/documentatie-content/brochures/Noxxa-brochure_Meerpuntssluiting_LR.pdf',
    },
    {
      image: 'assets/documentatie-content/brochures/Brochure-schuifdeurbeslag-26.png',
      title: 'Schuifdeurbeslag',
      file: 'assets/documentatie-content/brochures/Noxxa-brochure_schuifdeurbeslag_2026_LR.pdf',
    },
    {
      image: 'assets/documentatie-content/brochures/image-folder-noxxa-deurdrangers.png',
      title: 'Deurdrangers',
      file: 'assets/documentatie-content/brochures/Noxxa-Folder_Deurdrangers_LowResNew.pdf',
    },
    {
      image: 'assets/documentatie-content/brochures/image-folder-noxxa-projectsloten.png',
    title: 'Projectsloten',
      file: 'assets/documentatie-content/brochures/Noxxa_Folder_Projectsloten_lowres.pdf',
    },
    {
      image: 'assets/documentatie-content/brochures/image-folder-noxxa-scharnieren.png',
      title: 'Scharnieren',
      file: 'assets/documentatie-content/brochures/Noxxa_scharnieren_lowres.pdf',
    },
    {
      image: 'assets/documentatie-content/brochures/noxxa-onderdorpels-folder.png',
      title: 'Onderdorpels',
      file: 'assets/documentatie-content/brochures/Noxxa-brochure_Onderdorpels_A4-2-LR.pdf',  
    }
  ];

  protected readonly filteredDownloads = computed(() => this.filterDocuments(this.downloads));
  protected readonly uncategorizedExpanded = computed(
    () => this.uncategorizedOpen() || (this.searchActive() && this.filteredDownloads().length > 0),
  );

  protected updateDocumentSearch(event: Event): void {
    this.documentSearch.set((event.target as HTMLInputElement).value);
  }

  protected toggleUncategorized(): void {
    this.uncategorizedOpen.update((value) => !value);
  }

  private filterDocuments<T extends { title: string; file: string; description?: string }>(documents: T[]): T[] {
    const query = this.documentSearch().trim().toLowerCase();

    if (!query) {
      return documents;
    }

    return documents.filter((document) =>
      [document.title, document.description, document.file]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(query)),
    );
  }
}
