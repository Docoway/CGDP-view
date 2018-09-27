import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from './report.component';
import { ReportingComponent } from './reporting/reporting.component';
import { ManageComponent } from './manage/manage.component';
import { DownloadComponent } from './download/download.component';


const routes: Routes = [
    {
        path: '',
        component: ReportComponent,
        children: [
            {
                path: '',
                redirectTo: 'reporting',
                pathMatch: 'full'
            },
            {
                path: 'reporting',
                component: ReportingComponent
            },
            {
                path: 'manage',
                component: ManageComponent
            },
            {
                path: 'download',
                component: DownloadComponent
            }
        ]
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class ReportRoutingModule { }
