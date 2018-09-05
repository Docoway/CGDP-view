import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { CarouselModule, BsDropdownModule, ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from './service/login.service';
import { DiagnosisModule } from './diagnosis/diagnosis.module';
import { UrlService } from './service/url.service';
import { ResourceService } from './service/resource.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        appRoutingModule,
        FormsModule,
        HttpClientModule,

        DiagnosisModule,

        CarouselModule.forRoot(),
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        NgZorroAntdModule.forRoot()
    ],
    providers: [
        ResourceService,
        UrlService,
        LoginService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
