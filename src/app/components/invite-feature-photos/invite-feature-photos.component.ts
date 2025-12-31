import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invite-feature-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invite-feature-photos.component.html',
  styleUrl: './invite-feature-photos.component.scss'
})
export class InviteFeaturePhotosComponent implements AfterViewInit, OnDestroy {
  @Input() leftSrc = 'assets/invite/feature/2.jpeg';
  @Input() rightSrc = 'assets/invite/feature/2.jpeg';

  @ViewChild('reveal') revealRef!: ElementRef<HTMLElement>;
  private io?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) e.target.classList.add('is-visible');
    }, { threshold: 0.15 });

    this.io.observe(this.revealRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
