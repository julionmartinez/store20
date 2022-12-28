import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model01productComponent } from './model01product.component';

describe('Model01productComponent', () => {
  let component: Model01productComponent;
  let fixture: ComponentFixture<Model01productComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Model01productComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Model01productComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
