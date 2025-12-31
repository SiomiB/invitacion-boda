import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invite-gifts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invite-gifts.component.html',
  styleUrl: './invite-gifts.component.scss'
})
export class InviteGiftsComponent implements AfterViewInit, OnDestroy {
  @Input() liverpoolUrl = 'https://mesaderegalos.liverpool.com.mx/milistaderegalos/51823831';

  @ViewChild('reveal') revealRef!: ElementRef<HTMLElement>;
  private io?: IntersectionObserver;

  copied = false;
  private copiedTimer?: number;

  ngAfterViewInit(): void {
    this.io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) e.target.classList.add('is-visible');
    }, { threshold: 0.15 });

    this.io.observe(this.revealRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
    if (this.copiedTimer) window.clearTimeout(this.copiedTimer);
  }

  async copyLink() {
    try {
      await navigator.clipboard.writeText(this.liverpoolUrl);
      this.copied = true;
      if (this.copiedTimer) window.clearTimeout(this.copiedTimer);
      this.copiedTimer = window.setTimeout(() => (this.copied = false), 1600);
    } catch {
      window.prompt('Copia este enlace:', this.liverpoolUrl);
    }
  }
}
