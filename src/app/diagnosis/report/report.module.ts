import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ReportingComponent } from './reporting/reporting.component';
import { ManageComponent } from './manage/manage.component';
import { DownloadComponent } from './download/download.component';
import { ReportRoutingModule } from './report-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReportComponent } from './report.component';
import { ReportService } from './report.service';
import { DiagnosisCommonModule } from '../diagnosis-common/diagnosis-common.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReportRoutingModule,
        ReactiveFormsModule,
        NgZorroAntdModule.forRoot(),
        DiagnosisCommonModule
    ],
    declarations: [
        ReportComponent,
        ReportingComponent, 
        ManageComponent, 
        DownloadComponent
    ],
    providers: [
        ReportService
    ]
})
export class ReportModule { }
