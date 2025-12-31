import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteGiftsComponent } from './invite-gifts.component';

describe('InviteGiftsComponent', () => {
  let component: InviteGiftsComponent;
  let fixture: ComponentFixture<InviteGiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteGiftsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InviteGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
