import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchObjectsComponent } from './search-objects.component';

describe('SearchObjectsComponent', () => {
  let component: SearchObjectsComponent;
  let fixture: ComponentFixture<SearchObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchObjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
