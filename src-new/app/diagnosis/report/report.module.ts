import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { ReportingComponent } from './reporting/reporting.component';
import { ManageComponent } from './manage/manage.component';
import { DownloadComponent } from './download/download.component';
import { DiagnosisCommonModule } from '../diagnosis-common/diagnosis-common.module';
import { ReportService } from './report.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReportRoutingModule,
    DiagnosisCommonModule,
    NgZorroAntdModule
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
