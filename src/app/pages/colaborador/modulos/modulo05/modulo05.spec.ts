import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo05 } from './modulo05';

describe('Modulo05', () => {
  let component: Modulo05;
  let fixture: ComponentFixture<Modulo05>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modulo05]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo05);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
