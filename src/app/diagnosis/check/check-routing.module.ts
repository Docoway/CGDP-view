import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckComponent } from './check.component';
import { DownloadComponent } from './download/download.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
    {
        path: '',
        component: CheckComponent,
        children: [
            {
                path: '',
                redirectTo: 'review',
                pathMatch: 'full'
            },
            {
                path: 'review',
                component: ReviewComponent
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
  exports:[
      RouterModule
  ]
})
export class CheckRoutingModule { }
