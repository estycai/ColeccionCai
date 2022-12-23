import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCamisetaComponent } from './add-camiseta.component';

describe('AddCamisetaComponent', () => {
  let component: AddCamisetaComponent;
  let fixture: ComponentFixture<AddCamisetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCamisetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCamisetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
