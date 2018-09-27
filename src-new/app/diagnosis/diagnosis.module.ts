import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgZorroAntdModule, NZ_I18N,zh_CN } from 'ng-zorro-antd';
import { BsDropdownModule } from 'ngx-bootstrap';

import { DiagnosisComponent } from './diagnosis.component';
import { DiagnosisCommonModule } from './diagnosis-common/diagnosis-common.module';
import { DiagnosisRoutingModule } from './diagnosis-routing.module';


@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        DiagnosisRoutingModule,
        DiagnosisCommonModule,
        NgZorroAntdModule,
        BsDropdownModule.forRoot()
    ],
    declarations: [
        DiagnosisComponent
    ],
    exports: [  ],
    
    providers: [ ]
})
export class DiagnosisModule { }
