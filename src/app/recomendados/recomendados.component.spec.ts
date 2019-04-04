import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendadosComponent } from './recomendados.component';

describe('RecomendadosComponent', () => {
  let component: RecomendadosComponent;
  let fixture: ComponentFixture<RecomendadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomendadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
