import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
} from '@angular/core';
import { LightboxService } from './lightbox.service';

@Component({
  selector: 'nx-lightbox',
  templateUrl: './lightbox.html',
  styleUrl: './lightbox.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lightbox {
  protected readonly lightbox = inject(LightboxService);

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.lightbox.close();
  }

  @HostListener('document:keydown.arrowright')
  protected onNext(): void {
    if (this.lightbox.isOpen()) {
      this.lightbox.next();
    }
  }

  @HostListener('document:keydown.arrowleft')
  protected onPrev(): void {
    if (this.lightbox.isOpen()) {
      this.lightbox.prev();
    }
  }
}
