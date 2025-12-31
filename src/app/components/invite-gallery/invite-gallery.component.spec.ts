import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteGalleryComponent } from './invite-gallery.component';

describe('InviteGalleryComponent', () => {
  let component: InviteGalleryComponent;
  let fixture: ComponentFixture<InviteGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InviteGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
