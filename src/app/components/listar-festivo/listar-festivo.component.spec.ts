

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { materialize } from 'rxjs';

import { ListarFestivoComponent } from './listar-festivo.component';
import { ReferenciasMaterialModule } from '../referencias-material/referencias-material.module';

describe('ListarFestivoComponent', () => {
  let component: ListarFestivoComponent;
  let fixture: ComponentFixture<ListarFestivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFestivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarFestivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
