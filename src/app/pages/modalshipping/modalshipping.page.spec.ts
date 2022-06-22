import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalshippingPage } from './modalshipping.page';

describe('ModalshippingPage', () => {
  let component: ModalshippingPage;
  let fixture: ComponentFixture<ModalshippingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalshippingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalshippingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
