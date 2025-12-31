import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteEventCardComponent } from './invite-event-card.component';

describe('InviteEventCardComponent', () => {
  let component: InviteEventCardComponent;
  let fixture: ComponentFixture<InviteEventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteEventCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InviteEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
