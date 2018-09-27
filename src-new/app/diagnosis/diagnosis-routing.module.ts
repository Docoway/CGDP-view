import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiagnosisComponent } from './diagnosis.component';


/**
 * loadchildren   模块懒加载    格式：需要导入模块相对路径#导出模块类的名称 
 * 没有将application.module/report.module导入到diagnosis.module 中，而是通过loadChildren属性，告诉路由根据loadChildren属性配置的路径加载application.module模块
 */

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
                loadChildren: './application/application.module#ApplicationModule'
            },
            {
                path: 'report',
                loadChildren: './report/report.module#ReportModule'
            },
            // {
            //     path: 'check',
            //     loadChildren: './check/check.module#CheckModule'
            // }
        ]
    }
]

/*
//不适用于angular6
const routes: Routes = [
    {
        path: 'diagnosis',
        component: DiagnosisComponent,   //没有此component,component-less 路由, 将显示在appcomponent中的router-outlet中
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
            {
                path: 'report',
                loadChildren: 'app/diagnosis/report/report.module#ReportModule'
            },
            {
                path: 'check',
                loadChildren: 'app/diagnosis/check/check.module#CheckModule'
            }
        ]
    }
]
*/

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule]
})
export class DiagnosisRoutingModule { }
