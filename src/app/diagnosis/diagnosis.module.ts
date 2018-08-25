import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BsDropdownModule } from 'ngx-bootstrap';

import { DiagnosisComponent } from './diagnosis.component';
import { DiagnosisRoutingModule } from './diagnosis-routing.module';
import { DiagnosisCommonModule } from './diagnosis-common/diagnosis-common.module';


@NgModule({
    declarations:[
        DiagnosisComponent,
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        DiagnosisRoutingModule,
        DiagnosisCommonModule,
        NgZorroAntdModule.forRoot(),
        BsDropdownModule.forRoot()
    ],
    exports: []
})

export class DiagnosisModule { }