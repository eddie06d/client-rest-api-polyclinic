import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
      ],
      declarations: [ AppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(app).toBeTruthy();
  });

  it('Should return an invalid create form', () => {
    const form = app.form;
    // tslint:disable-next-line: no-string-literal
    const description = form.controls['descripcion'];
    description.setValue('Descripción de ejemplo');

    expect(form.invalid).toBeFalse();
  });

  it('Should return a valid create form', () => {
    const form = app.form;
    // tslint:disable-next-line: no-string-literal
    const especialidad = form.controls['especialidad'];
    especialidad.setValue('Especialidad de ejemplo');
    // tslint:disable-next-line: no-string-literal
    const description = form.controls['descripcion'];
    description.setValue('Descripción de ejemplo');
    // tslint:disable-next-line: no-string-literal
    const imagen = form.controls['imagen'];
    imagen.setValue('Imagen de ejemplo');

    expect(form.invalid).toBeFalse();
  });

});
