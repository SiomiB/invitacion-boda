import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invite-event-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invite-event-card.component.html',
  styleUrl: './invite-event-card.component.scss'
})
export class InviteEventCardComponent implements AfterViewInit, OnDestroy {
  @Input() ornament: 'none' | 'stars' | 'clock' = 'none';
  @Input() title = '';
  @Input() dateText = '';
  @Input() timeText = '';
  @Input() place = '';
  @Input() address = '';
  @Input() mapsUrl = '';

  @Input() variant: 'default' | 'cinderella' = 'default';

  @ViewChild('reveal') revealRef!: ElementRef<HTMLElement>;
  private io?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add('is-visible');
        }
      },
      { threshold: 0.15 }
    );

    this.io.observe(this.revealRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
