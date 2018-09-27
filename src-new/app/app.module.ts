import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { CarouselModule, BsDropdownModule, ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ResourceService } from './service/resource.service';
import { UrlService } from './service/url.service';
import { LoginService } from './service/login.service';
import { DiagnosisModule } from './diagnosis/diagnosis.module';

/**配置angular i18n */
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    DiagnosisModule,

    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    NgZorroAntdModule
  ],
  providers: [
      ResourceService,
      UrlService,
      LoginService,
      /**配置 ng-zorro-antd 国际化 */
      { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
