import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo06 } from './modulo06';

describe('Modulo06', () => {
  let component: Modulo06;
  let fixture: ComponentFixture<Modulo06>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modulo06]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo06);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
