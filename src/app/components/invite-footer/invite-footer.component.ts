import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invite-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invite-footer.component.html',
  styleUrl: './invite-footer.component.scss'
})
export class InviteFooterComponent implements AfterViewInit, OnDestroy {
  @Input() bride = '';
  @Input() groom = '';

  @ViewChild('reveal') revealRef!: ElementRef<HTMLElement>;
  private io?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) e.target.classList.add('is-visible');
    }, { threshold: 0.1 });

    this.io.observe(this.revealRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }

  top() {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
