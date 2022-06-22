import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalbillingPage } from './modalbilling.page';

describe('ModalbillingPage', () => {
  let component: ModalbillingPage;
  let fixture: ComponentFixture<ModalbillingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalbillingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalbillingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
