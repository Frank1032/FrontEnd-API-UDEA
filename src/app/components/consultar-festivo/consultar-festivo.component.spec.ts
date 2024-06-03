

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFestivoComponent } from './consultar-festivo.component';

describe('ConsultarFestivoComponent', () => {
  let component: ConsultarFestivoComponent;
  let fixture: ComponentFixture<ConsultarFestivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarFestivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarFestivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
