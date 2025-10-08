import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo03 } from './modulo03';

describe('Modulo03', () => {
  let component: Modulo03;
  let fixture: ComponentFixture<Modulo03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modulo03]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo03);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
