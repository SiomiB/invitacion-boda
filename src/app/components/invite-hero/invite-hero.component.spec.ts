import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteHeroComponent } from './invite-hero.component';

describe('InviteHeroComponent', () => {
  let component: InviteHeroComponent;
  let fixture: ComponentFixture<InviteHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InviteHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
