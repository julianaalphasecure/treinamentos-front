import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo08 } from './modulo08';

describe('Modulo08', () => {
  let component: Modulo08;
  let fixture: ComponentFixture<Modulo08>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modulo08]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo08);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
