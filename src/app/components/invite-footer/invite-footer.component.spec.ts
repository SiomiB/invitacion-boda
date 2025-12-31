import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteFooterComponent } from './invite-footer.component';

describe('InviteFooterComponent', () => {
  let component: InviteFooterComponent;
  let fixture: ComponentFixture<InviteFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InviteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
