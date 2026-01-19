import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Rsvp = 'yes' | 'no' | '';

@Component({
  selector: 'app-invite-rsvp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './invite-rsvp.component.html',
  styleUrl: './invite-rsvp.component.scss'
})
export class InviteRsvpComponent implements AfterViewInit, OnDestroy {
  @Input() bride = '';
  @Input() groom = '';

  whatsappPhone = '525614857757';
  //whatsappPhone = '527731214004';
  

  @ViewChild('reveal') revealRef!: ElementRef<HTMLElement>;
  private io?: IntersectionObserver;

  rsvp: Rsvp = '';
  name = '';
  guests = 1;
  message = '';

  ngAfterViewInit(): void {
    this.io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) e.target.classList.add('is-visible');
    }, { threshold: 0.15 });

    this.io.observe(this.revealRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }

  send() {
    if (this.disabled) return;
    const payload = {
      name: this.name.trim(),
      rsvp: this.rsvp === 'yes' ? 'Sí asistiré' : 'No asistiré',
      guests: this.rsvp === 'yes' ? this.guests : 0,
      message: this.message.trim() || '-'
    };

    const text =
    `Confirmación de asistencia
    Boda: ${this.bride} & ${this.groom}
    Nombre: ${payload.name}
    Respuesta: ${payload.rsvp}
    ${this.rsvp === 'yes' ? `Invitados: ${payload.guests}\n` : ''}Mensaje: ${payload.message}`;

    window.open(`https://wa.me/${this.whatsappPhone}?text=${encodeURIComponent(text)}`, '_blank');
  }

  get disabled() {
    return !this.name.trim() || !this.rsvp;
  }
}
