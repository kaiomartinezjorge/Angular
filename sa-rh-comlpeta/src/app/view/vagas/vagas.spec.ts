import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Apiservice } from '../../service/apiservice';

import { Vagas } from './vagas';

describe('Vagas', () => {
  let component: Vagas;
  let fixture: ComponentFixture<Vagas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vagas],
      providers: [
        {
          provide: Apiservice,
          useValue: {
            getVagas: () => of([]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Vagas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
