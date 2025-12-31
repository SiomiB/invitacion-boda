import { Component, AfterViewInit, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InviteHeroComponent } from '../../components/invite-hero/invite-hero.component';
import { InviteEventCardComponent } from '../../components/invite-event-card/invite-event-card.component';
import { InviteGalleryComponent } from '../../components/invite-gallery/invite-gallery.component';
import { InviteRsvpComponent } from '../../components/invite-rsvp/invite-rsvp.component';
import { InviteFooterComponent } from '../../components/invite-footer/invite-footer.component';
import { InviteFeaturePhotosComponent } from '../../components/invite-feature-photos/invite-feature-photos.component';
import { InviteGiftsComponent } from '../../components/invite-gifts/invite-gifts.component';

@Component({
  selector: 'app-wedding-invite',
  standalone: true,
  imports: [CommonModule, InviteFeaturePhotosComponent, InviteHeroComponent, InviteEventCardComponent, InviteGalleryComponent, InviteRsvpComponent, InviteFooterComponent, InviteGiftsComponent],
  templateUrl: './wedding-invite.component.html',
  styleUrl: './wedding-invite.component.scss'
})
export class WeddingInviteComponent implements AfterViewInit, OnDestroy {
  @ViewChild('blessingReveal') blessingReveal!: ElementRef<HTMLElement>;
  private io?: IntersectionObserver;

  couple = {
    bride: 'Ali Fernanda López Luna',
    groom: 'Óscar Octavio Martinez Herrera'
  };

  eventDate = new Date('2026-02-14T14:00:00');

  parentsBride = [
    'Fernando Fco. López Jiménez',
    'Juana Luna Pineda (Q.E.P.D.)',
  ];

  parentsGroom = [
    'Alejandra Herrera García-'
  ];

  events = [
    {
      title: 'Ceremonia Religiosa',
      time: '14:00 hrs',
      dateText: '14 de febrero 2026',
      place: 'Parroquia de San Cristobal Mártir',
      address: 'Pl. de La Constitución 8, La Cabecera, 54660 Coyotepec, Méx',
      mapsUrl: 'https://maps.google.com/?q=Pl.%20de%20La%20Constituci%C3%B3n%208%20Coyotepec%20M%C3%A9x'
    },
    {
      title: 'Ceremonia Civil',
      time: '18:00 hrs',
      dateText: '14 de febrero 2026',
      place: 'Casa de la familia López Luna',
      address: 'Calle Francisco Márquez s/n, barrio San Juan, Coyotepec',
      mapsUrl: 'https://maps.google.com/?q=Calle%20Francisco%20M%C3%A1rquez%20Coyotepec'
    },
    {
      title: 'Recepción y Fiesta',
      time: 'Sigue a la ceremonia religiosa',
      dateText: '14 de febrero 2026',
      place: 'Casa de la familia López Luna',
      address: 'Calle Francisco Márquez s/n, barrio San Juan, Coyotepec',
      mapsUrl: 'https://maps.google.com/?q=Calle%20Francisco%20M%C3%A1rquez%20Coyotepec'
    }
  ];

  music = {
    src: 'assets/music/cinderella.mp3',
    title: 'Música'
  };

  ngAfterViewInit(): void {
    this.io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) e.target.classList.add('is-visible');
    }, { threshold: 0.15 });

    if (this.blessingReveal?.nativeElement) {
      this.io.observe(this.blessingReveal.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
