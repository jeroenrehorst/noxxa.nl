import { Component, computed, HostBinding, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { CATEGORIES, getCategory } from '../../data/categories';
import { CATEGORY_CONTENT, CategoryContent } from '../../data/category-content';
import { ImageSlider } from '../../shared/image-slider/image-slider';

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
};

@Component({
  selector: 'nx-category',
  imports: [RouterLink, ImageSlider],
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class CategoryPage {
  private readonly route = inject(ActivatedRoute);

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

  protected readonly related = computed(() => {
    const current = this.slug();
    return CATEGORIES.filter((c) => c.slug !== current).slice(0, 6);
  });

  private readonly sliders = computed(() => CATEGORY_SLIDERS[this.slug()] ?? null);

  protected sliderImagesFor(index: number): string[] | null {
    return this.sliders()?.[index] ?? null;
  }
}
