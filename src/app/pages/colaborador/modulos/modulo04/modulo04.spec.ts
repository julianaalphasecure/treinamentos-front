import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo04 } from './modulo04';

describe('Modulo04', () => {
  let component: Modulo04;
  let fixture: ComponentFixture<Modulo04>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modulo04]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo04);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
