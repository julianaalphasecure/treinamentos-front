import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo02 } from './modulo02';

describe('Modulo02', () => {
  let component: Modulo02;
  let fixture: ComponentFixture<Modulo02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modulo02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo02);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
