import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsPagesComponent } from './listings-pages.component';

describe('ListingsPagesComponent', () => {
  let component: ListingsPagesComponent;
  let fixture: ComponentFixture<ListingsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
