import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PruebaLuisPage } from './prueba-luis.page';

describe('PruebaLuisPage', () => {
  let component: PruebaLuisPage;
  let fixture: ComponentFixture<PruebaLuisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaLuisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PruebaLuisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
