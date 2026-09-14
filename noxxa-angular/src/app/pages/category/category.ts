import { Component, computed, HostBinding, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { CATEGORIES, getCategory } from '../../data/categories';
import {
  CATEGORY_CONTENT,
  CategoryContent,
  ContentBlock,
} from '../../data/category-content';
import { ImageSlider } from '../../shared/image-slider/image-slider';
import { LightboxService } from '../../shared/lightbox/lightbox.service';

// Per-category sliders, keyed by slug and then by block index. Blocks listed
// here render a slider instead of their single static image.
const CATEGORY_SLIDERS: Record<string, Record<number, string[]>> = {
  binnendeurbeslag: {
    1: [
      'assets/products/binnendeurbeslag/NX100133.webp',
      'assets/products/binnendeurbeslag/NX100657.webp',
      'assets/products/binnendeurbeslag/NX100670.webp',
      'assets/products/binnendeurbeslag/NX100679.webp',
      'assets/products/binnendeurbeslag/NX102175.webp',
    ],
    3: [
      'assets/products/binnendeurbeslag-slider2/NX100982.webp',
      'assets/products/binnendeurbeslag-slider2/NX101065.webp',
      'assets/products/binnendeurbeslag-slider2/NX104881.webp',
      'assets/products/binnendeurbeslag-slider2/NX105582.webp',
      'assets/products/binnendeurbeslag-slider2/usp-rubberringen.webp',
    ],
  },
  buitendeurbeslag: {
    3: [
      'assets/products/buitendeurbeslag-slider-premium/NX101148.webp',
      'assets/products/buitendeurbeslag-slider-premium/NX101207_3.webp',
      'assets/products/buitendeurbeslag-slider-premium/NX105573.webp',
      'assets/products/buitendeurbeslag-slider-premium/NX105573_3.webp',
      'assets/products/buitendeurbeslag-slider-premium/wisselstift_detail_v2.webp',
      'assets/products/buitendeurbeslag-slider-premium/wisselstift_v2.webp',
    ],
    4: [
      'assets/products/buitendeurbeslag-slider-excellent/NX105358.webp',
      'assets/products/buitendeurbeslag-slider-excellent/sdc-schroefdraadconstructie.webp',
    ],
  },
  sloten: {
    4: [
      'assets/products/sloten/sloten-slider1/NX100682.webp',
      'assets/products/sloten/sloten-slider1/NX100685.webp',
    ],
    5: [
      'assets/products/sloten/sloten-slider2/NX105149.webp',
      'assets/products/sloten/sloten-slider2/NX105151.webp',
      'assets/products/sloten/sloten-slider2/NX105153.webp',
      'assets/products/sloten/sloten-slider2/NX105155.webp',
    ],
  },
  deurdrangers: {
    1: [
      'assets/products/deurdrangers-slider1/NX200SA_NX100592.webp',
      'assets/products/deurdrangers-slider1/NX101SA.webp',
      'assets/products/deurdrangers-slider1/NX3400GA-B_NX100594-1.webp',
    ],
    2: [
      'assets/products/deurdrangers-slider2/NX3500GA-B-zwart_NX104457.webp',
      'assets/products/deurdrangers-slider2/NX100883.webp',
    ],
  },
  schuifdeurbeslag: {
    0: [
      'assets/products/schuifdeurbeslag/schuifdeurbeslag-slider1/softclose.webp',
      'assets/products/schuifdeurbeslag/schuifdeurbeslag-slider1/zelfreinigend.webp',
    ],
    2: [
      'assets/products/schuifdeurbeslag/schuifdeurbeslag-slider2/NX100601.png',
      'assets/products/schuifdeurbeslag/schuifdeurbeslag-slider2/NX100616.webp',
    ],
    4: [
      'assets/products/schuifdeurbeslag/schuifdeurbeslag-slider3/Looprail-voorgemonteerde-haken.png',
      'assets/products/schuifdeurbeslag/schuifdeurbeslag-slider3/Montagerail.webp',
      'assets/products/schuifdeurbeslag/schuifdeurbeslag-slider3/push-to-open-vrijstaand-landscape-blue.png',
    ],
  },
  scharnieren: {
    1: [
      'assets/products/scharnieren/scharnieren-image1.webp',
      'assets/products/scharnieren/scharnieren-image2.webp',
    ],
    3: [
      'assets/products/scharnieren/scharnieren-second-slider/NX100766.webp',
      'assets/products/scharnieren/scharnieren-second-slider/NX100768.webp',
    ],
  },
  valdorpels: {
    1: [
      'assets/products/valdorpels/valdorpels-slider1/image-valdorpel-borstel.webp',
      'assets/products/valdorpels/valdorpels-slider1/image-valdorpel-kunststof.webp',
    ],
    2: [
      'assets/products/valdorpels/valdorpels-slider2/Noxxa-premium_geluid_brandwerend-inbouw.webp',
      'assets/products/valdorpels/valdorpels-slider2/Noxxa-premium_geluid_brandwerend-opbouw.webp',
      'assets/products/valdorpels/valdorpels-slider2/PLV-014-3442807-06v2.webp',
    ],
  },
  'hang-en-discussloten': {
    1: [
      'assets/products/hang-discus-sloten/hang-discus-sloten-slider1/Detail-cijferhangslot-messingV2.webp',
      'assets/products/hang-discus-sloten/hang-discus-sloten-slider1/detailfoto-rubber-beugelringV2.webp',
      'assets/products/hang-discus-sloten/hang-discus-sloten-slider1/foto-condensgat-noxxa-hangslotV2.webp',
    ],
  },
  deurgrepen: {
    1: [
      'assets/products/deurgrepen/deurgrepen-slider1/NX100962.webp',
      'assets/products/deurgrepen/deurgrepen-slider1/NX100964.webp',
    ],
    2: [
      'assets/products/deurgrepen/deurgrepen-slider2/NX105523.webp',
      'assets/products/deurgrepen/deurgrepen-slider2/NX105526.webp',
      'assets/products/deurgrepen/deurgrepen-slider2/NX105529.webp',
      'assets/products/deurgrepen/deurgrepen-slider2/NX105547.webp',
      'assets/products/deurgrepen/deurgrepen-slider2/NX105551.webp',
      'assets/products/deurgrepen/deurgrepen-slider2/NX105556.webp',
      'assets/products/deurgrepen/deurgrepen-slider2/NX105564.webp',
      'assets/products/deurgrepen/deurgrepen-slider2/NX105567.webp',
    ],
  },
  deuraccessoires: {
    1: [
      'assets/products/deuraccessoires/deuraccessoires-slider1/NX100596.webp',
      'assets/products/deuraccessoires/deuraccessoires-slider1/NX100599.webp',
      'assets/products/deuraccessoires/deuraccessoires-slider1/NX100600.webp',
      'assets/products/deuraccessoires/deuraccessoires-slider1/NX105320.webp',
      'assets/products/deuraccessoires/deuraccessoires-slider1/NX105321.webp',
      'assets/products/deuraccessoires/deuraccessoires-slider1/NX105322.webp',
      'assets/products/deuraccessoires/deuraccessoires-slider1/NX105323.webp',
      'assets/products/deuraccessoires/deuraccessoires-slider1/NX105435.webp',
    ],
    2: [
      'assets/products/deuraccessoires/deuraccessoires-slider2/NX105316.webp',
      'assets/products/deuraccessoires/deuraccessoires-slider2/NX105842.webp',
      'assets/products/deuraccessoires/deuraccessoires-slider2/NX105844.webp',
      'assets/products/deuraccessoires/deuraccessoires-slider2/NX105845.webp',
    ],
    4: [
      'assets/products/deuraccessoires/deuraccessoires-slider3/NX105326.webp',
      'assets/products/deuraccessoires/deuraccessoires-slider3/NX105327.webp',
    ],
    5: [
      'assets/products/deuraccessoires/deuraccessoires-slider4/NX100154.webp',
      'assets/products/deuraccessoires/deuraccessoires-slider4/NX100157.webp',
      'assets/products/deuraccessoires/deuraccessoires-slider4/NX100183.webp',
      'assets/products/deuraccessoires/deuraccessoires-slider4/NX104041.webp',
    ],
  },
  meerpuntssluitingen: {
    7: [
      'assets/products/meerpuntssluitingen/1-rolnok-detail.webp',
      'assets/products/meerpuntssluitingen/2-penschoot-detail.webp',
      'assets/products/meerpuntssluitingen/3-sluithaak-detail.webp',
      'assets/products/meerpuntssluitingen/4-blokschoot-detail.webp',
    ],
  },
};

// Labels for sliders whose navigation should show numbered captions instead of
// dots, keyed by slug and then by block index (indices align with CATEGORY_SLIDERS).
const CATEGORY_SLIDER_LABELS: Record<string, Record<number, string[]>> = {
  meerpuntssluitingen: {
    7: ['Rolnok', 'Penschoot', 'Sluithaak', 'Blokschoot'],
  },
};

// External webshop links per category, keyed by slug.
interface WebshopLinks {
  isero?: string;
  polvo?: string;
}

const CATEGORY_WEBSHOPS: Record<string, WebshopLinks> = {
  binnendeurbeslag: {
    isero:
      'https://www.isero.nl/nl-nl/c/assortiment/hang-en-sluitwerk/raam-en-deurbeslag/binnendeurbeslag?view=list&filters=ManufacturerName%3DNoxxa%2520Basic_or_Noxxa%2520Excellent_or_Noxxa%2520Premium%26productFilter%3Dfallback_searchquerydefinition%26category%3D0%252F05%252F05.09%252F05.09.01&page=1',
    polvo:
      'https://polvobv.nl/nl-nl/assortiment-1/hang-en-sluitwerk/raam-en-deurbeslag/binnendeurbeslag/merk=noxxa/',
  },
  buitendeurbeslag: {
    isero:
      'https://www.isero.nl/nl-nl/c/assortiment/hang-en-sluitwerk/raam-en-deurbeslag/buitendeurbeslag?view=list&filters=ManufacturerName%3DNoxxa%2520Excellent_or_Noxxa%2520Premium%26productFilter%3Dfallback_searchquerydefinition%26category%3D0%252F05%252F05.09%252F05.09.02&page=1',
    polvo:
      'https://polvobv.nl/nl-nl/assortiment-1/hang-en-sluitwerk/raam-en-deurbeslag/buitendeurbeslag/merk=noxxa/',
  },
  cilinders: {
    isero:
      'https://www.isero.nl/nl-nl/c/assortiment/hang-en-sluitwerk/cilinders/cilinders-en-sets?view=list&filters=ManufacturerName%3DNoxxa%2520Basic_or_Noxxa%2520Premium%26productFilter%3Dfallback_searchquerydefinition%26category%3D0%252F05%252F05.01%252F05.01.01&page=1',
    polvo:
      'https://polvobv.nl/nl-nl/assortiment-1/hang-en-sluitwerk/cilinders/cilinders-en-sets/merk=noxxa,noxxa-basic,noxxa-premium/',
  },
  sloten: {
    isero:
      'https://www.isero.nl/nl-nl/search/sloten?view=list&filters=searchTerm%3Dsloten%26ManufacturerName%3DNoxxa%2520Basic_or_Noxxa%2520Excellent_or_Noxxa%2520Premium&page=1',
    polvo:
      'https://polvobv.nl/nl-nl/search?q=NOXXA&merk=noxxa,noxxa-basic,noxxa-premium,noxxa-excellent&soort-product=oplegslot,loopslot,hekslot,dag-en-nachtslot,kastslot,vrij-bezetslot,klavierkastslot,vrij-en-bezetslot,magneet-vrij-en-bezetslot,cilinderkastslot,centraalslot,renovatie-hoofdslotkast,dag-en-nacht-smalslot,cilinderloopslot,veiligheidscilinderslot,paniekslot,magneet-loopslot,magneet-dag-en-nachtslot,cilinderskastslot,cilinderkastdeurslot,smaldeur-cilinderkastslot,kast-smalslot,magneet-vrij-bezetslot,magneetslotsluitplaat',
  },
  deurdrangers: {
    isero:
      'https://www.isero.nl/nl-nl/search/deurdranger?view=list&filters=searchTerm%3Ddeurdranger%26ManufacturerName%3DNoxxa%2520Premium&page=1',
    polvo: 'https://polvobv.nl/nl-nl/search?q=DRANGER&merk=noxxa,noxxa-premium',
  },
  'anti-paniekbeslag': {
    isero:
      'https://www.isero.nl/nl-nl/c/assortiment/hang-en-sluitwerk/sloten/panieksloten-en-sluitingen?view=list&filters=ManufacturerName%3DNoxxa%2520Premium%26productFilter%3Dfallback_searchquerydefinition%26category%3D0%252F05%252F05.11%252F05.11.09&page=1',
    polvo:
      'https://polvobv.nl/nl-nl/assortiment-1/hang-en-sluitwerk/sloten/panieksloten-en-sluitingen/merk=noxxa-premium,noxxa/',
  },
  schuifdeurbeslag: {
    isero:
      'https://www.isero.nl/nl-nl/search/schuifdeur?view=list&filters=searchTerm%3Dschuifdeur%26ManufacturerName%3DNoxxa%2520Excellent_or_Noxxa%2520Premium&page=1',
    polvo:
      'https://polvobv.nl/nl-nl/search?q=noxxa&merk=noxxa-basic,noxxa-premium,noxxa,noxxa-excellent&soort-product=schuifdeurkom,schuifdeurbeslag,schuifdeurrailset,schuifdeurrail,hefschuifdeurgarnituur,schuifdeurtoebehorenset,kantschuif&page=5',
  },
  scharnieren: {
    isero:
      'https://www.isero.nl/nl-nl/search/scharnieren%20en%20paumelles?filters=searchTerm%3Dscharnieren%2520en%2520paumelles%26ManufacturerName%3DNoxxa%2520Basic_or_Noxxa%2520Premium&page=1',
    polvo:
      'https://polvobv.nl/nl-nl/search?q=noxxa&merk=noxxa,noxxa-basic,noxxa-premium,noxxa-excellent&soort-product=glijlagerscharnier,smalscharnier,invisible-scharnier,taatsdeurscharnier,toebehorenset-taatsdeurscharnier,scharnieropvulplaat,scharnierpen,backflapscharnier,projectscharnier,scharnierpenlichter,kogelpaumelle,paumellering,kogelstiftpaumelle,inboorpaumelle,kogellagerscharnier,scharnier',
  },
  valdorpels: {
    isero:
      'https://www.isero.nl/nl-nl/search/valdorpels?filters=searchTerm%3Dvaldorpels%26ManufacturerName%3DNoxxa%2520Basic_or_Noxxa%2520Excellent_or_Noxxa%2520Premium&page=1',
    polvo:
      'https://polvobv.nl/nl-nl/search?q=noxxa&merk=noxxa,noxxa-basic,noxxa-premium,noxxa-excellent&soort-product=valdorpel',
  },
  'hang-en-discussloten': {
    isero:
      'https://www.isero.nl/nl-nl/search/hangsloten?view=list&filters=searchTerm%3Dhangsloten%26ManufacturerName%3DNoxxa%2520Basic_or_Noxxa%2520Premium&page=1',
    polvo:
      'https://polvobv.nl/nl-nl/search?q=noxxa&merk=noxxa,noxxa-basic,noxxa-premium,noxxa-excellent&soort-product=hangslot,discusslot,pantserhangslot,cijferhangslot',
  },
  sluitlijsten: {
    isero:
      'https://www.isero.nl/nl-nl/c/assortiment/hang-en-sluitwerk/sluitplaten-en-kommen/sluitlijsten?view=list&filters=ManufacturerName%3DNoxxa%2520Premium%26productFilter%3Dfallback_searchquerydefinition%26category%3D0%252F05%252F05.12%252F05.12.04&page=1',
    polvo:
      'https://polvobv.nl/nl-nl/search?q=noxxa&merk=noxxa,noxxa-basic,noxxa-premium,noxxa-excellent&soort-product=sluitlijst',
  },
  deurgrepen: {
    isero:
      'https://www.isero.nl/nl-nl/c/assortiment/hang-en-sluitwerk/raam-en-deurbeslag/grepen,-knoppen-en-kommen?view=list&filters=ManufacturerName%3DNoxxa%2520Basic_or_Noxxa%2520Excellent_or_Noxxa%2520Premium%26Soort%3Ddeurgreep%26productFilter%3Dfallback_searchquerydefinition%26category%3D0%252F05%252F05.09%252F05.09.09&page=1',
    polvo:
      'https://polvobv.nl/nl-nl/assortiment-1/hang-en-sluitwerk/raam-en-deurbeslag/deurkrukken/merk=noxxa,noxxa-basic/',
  },
  deuraccessoires: {
    isero:
      'https://www.isero.nl/nl-nl/search/noxxa?view=list&filters=searchTerm%3Dnoxxa%26Soort%3Dbriefplaat_or_briefplaatblokkeerder_or_deurstop_or_deurvastzetter&page=1#search-page-top',
    polvo:
      'https://polvobv.nl/nl-nl/search?q=noxxa&merk=noxxa,noxxa-basic,noxxa-premium,noxxa-excellent&soort-product=deurbuffer,deurvastzetter,briefplaatblokkeerder,briefplaat,deurstop,eindstop',
  },
  'frees-en-boormallen': {
    isero:
      'https://www.isero.nl/nl-nl/search/noxxa?view=list&page=1&filters=searchTerm%3Dnoxxa%26Soort%3Dboormal_or_freesmal',
    polvo:
      'https://polvobv.nl/nl-nl/search?q=noxxa&merk=noxxa,noxxa-basic,noxxa-premium,noxxa-excellent&soort-product=freesmal,boormal',
  },
  meerpuntssluitingen: {
    isero:
      'https://www.isero.nl/nl-nl/search/noxxa?view=list&page=1&filters=searchTerm%3Dnoxxa%26Soort%3Dmeerpuntssluiting',
    polvo:
      'https://polvobv.nl/nl-nl/assortiment-1/hang-en-sluitwerk/sloten/meerpuntssluitingen/merk=noxxa/',
  },

  'black-bluestone-onderdorpels': {
    isero:
      '',
    polvo:
      'https://polvobv.nl/nl-nl/search?q=onderdorpels&merk=noxxa',
  }



};

@Component({
  selector: 'nx-category',
  imports: [RouterLink, ImageSlider],
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class CategoryPage {
  private readonly route = inject(ActivatedRoute);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly lightbox = inject(LightboxService);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((p) => p.get('slug') ?? '')),
    { initialValue: '' },
  );

  // Exposes the current slug as a host class (e.g. "cat-binnendeurbeslag") so
  // per-category overrides in category.scss can target a single page.
  @HostBinding('class')
  protected get slugClass(): string {
    const slug = this.slug();
    return slug ? `cat-${slug}` : '';
  }

  protected readonly category = computed(() => getCategory(this.slug()));
  protected readonly content = computed<CategoryContent | undefined>(
    () => CATEGORY_CONTENT[this.slug()],
  );

  protected readonly blockGroups = computed(() => {
    const blocks = this.content()?.blocks ?? [];
    const groups: Array<Array<{ block: ContentBlock; index: number }>> = [];

    // Consecutive block indices that render together in one multi-column
    // section, keyed by slug. Each inner array is one grouped section.
    const groupedSections: Record<string, number[][]> = {
      'anti-paniekbeslag': [[3, 4]],
      cilinders: [[11, 12]],
      scharnieren: [[7, 8, 9]],
      schuifdeurbeslag: [[6, 7]],
    };
    const startToGroup = new Map<number, number[]>();
    const grouped = new Set<number>();
    for (const section of groupedSections[this.slug()] ?? []) {
      startToGroup.set(section[0], section);
      for (const i of section) grouped.add(i);
    }

    for (let index = 0; index < blocks.length; index += 1) {
      const section = startToGroup.get(index);
      if (section) {
        groups.push(section.map((i) => ({ block: blocks[i], index: i })));
        index = section[section.length - 1];
      } else if (!grouped.has(index)) {
        groups.push([{ block: blocks[index], index }]);
      }
    }

    return groups;
  });

  protected readonly related = computed(() => {
    const current = this.slug();
    return CATEGORIES.filter((c) => c.slug !== current).slice(0, 6);
  });

  private readonly sliders = computed(() => CATEGORY_SLIDERS[this.slug()] ?? null);

  protected sliderImagesFor(index: number): string[] | null {
    return this.sliders()?.[index] ?? null;
  }

  private readonly sliderLabels = computed(
    () => CATEGORY_SLIDER_LABELS[this.slug()] ?? null,
  );

  protected sliderLabelsFor(index: number): string[] | null {
    return this.sliderLabels()?.[index] ?? null;
  }

  protected readonly webshops = computed<WebshopLinks>(
    () => CATEGORY_WEBSHOPS[this.slug()] ?? {},
  );

  protected videoUrlFor(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  protected openImage(src: string, alt: string): void {
    this.lightbox.open(src, alt);
  }
}
