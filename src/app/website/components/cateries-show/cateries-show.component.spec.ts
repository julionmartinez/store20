import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateriesShowComponent } from './cateries-show.component';

describe('CateriesShowComponent', () => {
  let component: CateriesShowComponent;
  let fixture: ComponentFixture<CateriesShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateriesShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CateriesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
