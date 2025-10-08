import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo01 } from './modulo01';

describe('Modulo01', () => {
  let component: Modulo01;
  let fixture: ComponentFixture<Modulo01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modulo01]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo01);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
