import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavLinkComponent } from './side-nav-link.component';

describe('SideNavLinkComponent', () => {
  let component: SideNavLinkComponent;
  let fixture: ComponentFixture<SideNavLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavLinkComponent]
    });
    fixture = TestBed.createComponent(SideNavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
