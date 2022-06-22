import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BackendInterceptor} from "./services/backend.interceptor";
import {IonicStorageModule} from "@ionic/storage";
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ModalshippingPageModule } from './pages/modalshipping/modalshipping.module';
import { ModalbillingPage } from './pages/modalbilling/modalbilling.page';
import { ModalbillingPageModule } from './pages/modalbilling/modalbilling.module';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        ModalshippingPageModule,
        ModalbillingPageModule,
        IonicStorageModule.forRoot()
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BackendInterceptor,
            multi: true
        },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
