import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ManageComponent } from './manage/manage.component';
import { FillInComponent } from './fill-in/fill-in.component';
import { DownloadComponent } from './download/download.component';
import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { DiagnosisCommonModule } from '../diagnosis-common/diagnosis-common.module';
import { ReportService } from '../report/report.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule.forRoot(),
        ApplicationRoutingModule,
        DiagnosisCommonModule
    ],
    declarations: [
        ApplicationComponent,
        ManageComponent,
        FillInComponent, 
        DownloadComponent
    ],
    providers: [
        ReportService
    ]
})
export class ApplicationModule { }
