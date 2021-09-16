import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlimentoDetallePage } from './alimento-detalle.page';

describe('AlimentoDetallePage', () => {
  let component: AlimentoDetallePage;
  let fixture: ComponentFixture<AlimentoDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimentoDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlimentoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
