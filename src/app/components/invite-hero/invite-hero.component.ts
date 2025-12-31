import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invite-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invite-hero.component.html',
  styleUrl: './invite-hero.component.scss'
})
export class InviteHeroComponent implements AfterViewInit, OnDestroy {
  @Input() bride = '';
  @Input() groom = '';
  @Input() eventDate!: Date;
  @Input() musicSrc = '';

  @ViewChild('audio') audioRef!: ElementRef<HTMLAudioElement>;

  now = new Date();
  timer?: number;
  playing = false;

  get cd() {
    const diff = this.eventDate.getTime() - this.now.getTime();
    const total = Math.max(diff, 0);
    const d = Math.floor(total / (1000 * 60 * 60 * 24));
    const h = Math.floor((total / (1000 * 60 * 60)) % 24);
    const m = Math.floor((total / (1000 * 60)) % 60);
    const s = Math.floor((total / 1000) % 60);
    return { d, h, m, s };
  }

  ngAfterViewInit(): void {
    this.timer = window.setInterval(() => (this.now = new Date()), 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) window.clearInterval(this.timer);
  }

  scrollToInfo() {
    document.querySelector('app-invite-event-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  async openInvitation() {
    await this.ensureMusicOn();

    this.scrollToInfo();
  }

  private async ensureMusicOn() {
    const a = this.audioRef?.nativeElement;
    if (!a) return;

    if (this.playing) return;

    try {
      a.muted = false;
      await a.play();
      this.playing = true;
    } catch (err) {
      this.playing = false;

    }
  }

  async toggleMusic() {
    const a = this.audioRef?.nativeElement;
    if (!a) return;

    if (!this.playing) {
      try {
        a.muted = false;
        await a.play();
        this.playing = true;
      } catch (err) {
        this.playing = false;
      }
    } else {
      a.pause();
      this.playing = false;
    }
  }
}
