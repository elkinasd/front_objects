import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterObjectsComponent } from './register-objects.component';

describe('RegisterObjectsComponent', () => {
  let component: RegisterObjectsComponent;
  let fixture: ComponentFixture<RegisterObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterObjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
