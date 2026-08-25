import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { CATEGORIES, getCategory } from '../../data/categories';
import { CATEGORY_CONTENT, CategoryContent } from '../../data/category-content';

@Component({
  selector: 'nx-category',
  imports: [RouterLink],
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class CategoryPage {
  private readonly route = inject(ActivatedRoute);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((p) => p.get('slug') ?? '')),
    { initialValue: '' },
  );

  protected readonly category = computed(() => getCategory(this.slug()));
  protected readonly content = computed<CategoryContent | undefined>(
    () => CATEGORY_CONTENT[this.slug()],
  );

  protected readonly related = computed(() => {
    const current = this.slug();
    return CATEGORIES.filter((c) => c.slug !== current).slice(0, 6);
  });
}
