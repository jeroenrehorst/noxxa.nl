import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'nx-image-slider',
  templateUrl: './image-slider.html',
  styleUrl: './image-slider.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageSlider implements OnInit {
  readonly images = input.required<string[]>();
  readonly alt = input<string>('');
  readonly interval = input<number>(5000);

  protected readonly current = signal(0);

  private timer: ReturnType<typeof setInterval> | undefined;
  private paused = false;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.stop());

    // Keeps the active index valid when the image list changes at runtime.
    effect(() => {
      const count = this.images().length;
      if (this.current() >= count) {
        this.current.set(0);
      }
    });
  }

  ngOnInit(): void {
    this.start();
  }

  protected goTo(index: number): void {
    this.current.set(index);
    this.restart();
  }

  protected onMouseEnter(): void {
    this.paused = true;
  }

  protected onMouseLeave(): void {
    this.paused = false;
  }

  private start(): void {
    // Autoplay only runs in the browser; SSR/prerender has no timers to drive it.
    if (typeof window === 'undefined') {
      return;
    }

    const delay = this.interval();
    if (delay <= 0 || this.images().length < 2) {
      return;
    }

    this.timer = setInterval(() => {
      if (this.paused || this.isHidden()) {
        return;
      }
      this.current.update((i) => (i + 1) % this.images().length);
    }, delay);
  }

  private isHidden(): boolean {
    return typeof document !== 'undefined' && document.hidden;
  }

  private restart(): void {
    this.stop();
    this.start();
  }

  private stop(): void {
    if (this.timer !== undefined) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }
}
