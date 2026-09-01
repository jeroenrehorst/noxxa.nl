import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MAIN_CATEGORY_SLUGS, getCategory, Category } from '../data/categories';

@Component({
  selector: 'nx-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly menuOpen = signal(false);
  protected readonly categoriesOpen = signal(false);

  protected readonly categories: Category[] = MAIN_CATEGORY_SLUGS.map(
    (slug) => getCategory(slug)!,
  );

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    this.categoriesOpen.set(false);
  }

  toggleCategories(): void {
    if (!window.matchMedia('(max-width: 991px)').matches) {
      return;
    }

    this.categoriesOpen.update((v) => !v);
  }
}
