import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ApplicationRoutingModule } from './/application-routing.module';
import { FillInComponent } from './fill-in/fill-in.component';
import { DownloadComponent } from './download/download.component';
import { ManageComponent } from './manage/manage.component';
import { ApplicationComponent } from './application.component';
import { DiagnosisCommonModule } from '../diagnosis-common/diagnosis-common.module';


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
        FillInComponent,
        DownloadComponent, 
        ManageComponent
    ],
    providers: []
})
export class ApplicationModule { }
