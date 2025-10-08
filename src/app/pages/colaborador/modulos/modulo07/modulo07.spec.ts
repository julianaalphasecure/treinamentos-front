import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo07 } from './modulo07';

describe('Modulo07', () => {
  let component: Modulo07;
  let fixture: ComponentFixture<Modulo07>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modulo07]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo07);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
