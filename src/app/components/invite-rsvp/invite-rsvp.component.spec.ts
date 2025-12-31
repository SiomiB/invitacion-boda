import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteRsvpComponent } from './invite-rsvp.component';

describe('InviteRsvpComponent', () => {
  let component: InviteRsvpComponent;
  let fixture: ComponentFixture<InviteRsvpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteRsvpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InviteRsvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
