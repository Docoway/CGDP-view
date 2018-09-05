import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationComponent } from './application.component';
import { FillInComponent } from './fill-in/fill-in.component';
import { ManageComponent } from './manage/manage.component';
import { DownloadComponent } from './download/download.component';

const routes: Routes = [
    {
        path: '',                //由于loadChildren已经在上层routing配置过  不需要application  不然将匹配到application/application/
        component: ApplicationComponent,
        children: [
            {
                path: '',
                redirectTo: 'fill_in',
                pathMatch: 'full'
            },
            {
                path: 'fill_in',
                component: FillInComponent
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
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ApplicationRoutingModule { }