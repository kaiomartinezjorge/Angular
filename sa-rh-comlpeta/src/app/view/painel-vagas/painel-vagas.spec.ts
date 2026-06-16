import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Apiservice } from '../../service/apiservice';

import { PainelVagas } from './painel-vagas';

describe('PainelVagas', () => {
  let component: PainelVagas;
  let fixture: ComponentFixture<PainelVagas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelVagas],
      providers: [
        {
          provide: Apiservice,
          useValue: {
            getVagas: () => of([]),
            postVaga: () => of([]),
            putVaga: () => of([]),
            deleteVaga: () => of([]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PainelVagas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
