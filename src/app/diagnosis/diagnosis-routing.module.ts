import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiagnosisComponent } from './diagnosis.component';
import { ApplicationComponent } from './application/application.component';


const routes: Routes = [
    {
        path: 'diagnosis',
        component: DiagnosisComponent,
        children: [
            {
                path: '',
                redirectTo: 'application',
                pathMatch: 'full'
            },
            {
                path: 'application',
                loadChildren: 'app/diagnosis/application/application.module#ApplicationModule'
            },
            /*
            {
                path: 'report',
                loadChildren: ''
            },
            {
                path: 'check',
                loadChildren: ''
            }
            */
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DiagnosisRoutingModule { }