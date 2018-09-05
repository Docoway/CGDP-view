import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckComponent } from './check.component';
import { CheckService } from './check.service';
import { CheckRoutingModule } from './check-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReviewComponent } from './review/review.component';
import { DownloadComponent } from './download/download.component';
import { DiagnosisCommonModule } from '../diagnosis-common/diagnosis-common.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CheckRoutingModule,
    DiagnosisCommonModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [
      CheckComponent,
      ReviewComponent,
      DownloadComponent
  ],
  providers: [
      CheckService
  ]
})
export class CheckModule { }
