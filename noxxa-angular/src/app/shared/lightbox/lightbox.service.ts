import { Injectable, computed, signal } from '@angular/core';

export interface LightboxImage {
  src: string;
  alt: string;
}

// App-wide, single-instance lightbox state so any component (sliders, static
// block images, etc.) can open one shared full-size overlay. When opened with a
// gallery, the overlay also exposes thumbnails to switch between images.
@Injectable({ providedIn: 'root' })
export class LightboxService {
  private readonly _images = signal<LightboxImage[]>([]);
  private readonly _index = signal(0);

  readonly images = this._images.asReadonly();
  readonly index = this._index.asReadonly();
  readonly image = computed(() => this._images()[this._index()] ?? null);

  open(src: string, alt = ''): void {
    this._images.set([{ src, alt }]);
    this._index.set(0);
  }

  openGallery(images: LightboxImage[], index = 0): void {
    if (!images.length) {
      return;
    }
    this._images.set(images);
    this._index.set(Math.min(Math.max(index, 0), images.length - 1));
  }

  goTo(index: number): void {
    const count = this._images().length;
    if (count === 0) {
      return;
    }
    this._index.set(((index % count) + count) % count);
  }

  next(): void {
    this.goTo(this._index() + 1);
  }

  prev(): void {
    this.goTo(this._index() - 1);
  }

  close(): void {
    this._images.set([]);
    this._index.set(0);
  }

  isOpen(): boolean {
    return this._images().length > 0;
  }
}
