import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invite-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invite-gallery.component.html',
  styleUrl: './invite-gallery.component.scss'
})
export class InviteGalleryComponent implements AfterViewInit, OnDestroy {
  @ViewChild('reveal') revealRef!: ElementRef<HTMLElement>;
  private io?: IntersectionObserver;

  photos = [
    'assets/invite/gallery/1.jpeg',
    //'assets/invite/gallery/2.jpeg',
    'assets/invite/gallery/3.jpeg',
    'assets/invite/gallery/4.jpeg',
    'assets/invite/gallery/5.jpeg',
    'assets/invite/gallery/6.jpeg',
  ];

  isOpen = false;
  index = 0;

  private touchStartX = 0;
  private touchEndX = 0;

  get currentSrc() {
    return this.photos[this.index];
  }

  ngAfterViewInit(): void {
    this.io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) e.target.classList.add('is-visible');
    }, { threshold: 0.15 });

    this.io.observe(this.revealRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
    this.unlockScroll();
  }

  open(i: number) {
    this.index = i;
    this.isOpen = true;
    this.lockScroll();
  }

  close() {
    this.isOpen = false;
    this.unlockScroll();
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    if (!this.isOpen) return;

    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowRight') this.next();
    if (e.key === 'ArrowLeft') this.prev();
  }

  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.changedTouches[0].screenX;
  }

  onTouchEnd(e: TouchEvent) {
    this.touchEndX = e.changedTouches[0].screenX;
    const dx = this.touchEndX - this.touchStartX;

    if (Math.abs(dx) < 40) return;

    if (dx < 0) this.next();
    else this.prev();
  }

  private lockScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  }

  private unlockScroll() {
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
  }

  imgFade = false;

  next() {
    this.swapTo((this.index + 1) % this.photos.length);
  }

  prev() {
    this.swapTo((this.index - 1 + this.photos.length) % this.photos.length);
  }

  private swapTo(i: number) {
    this.imgFade = true;
    window.setTimeout(() => {
      this.index = i;
      this.imgFade = false;
    }, 140);
  }
}