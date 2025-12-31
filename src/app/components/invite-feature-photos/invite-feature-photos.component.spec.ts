import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteFeaturePhotosComponent } from './invite-feature-photos.component';

describe('InviteFeaturePhotosComponent', () => {
  let component: InviteFeaturePhotosComponent;
  let fixture: ComponentFixture<InviteFeaturePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteFeaturePhotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InviteFeaturePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
