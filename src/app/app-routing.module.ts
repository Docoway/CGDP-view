import { RouterModule,Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';


const appRoutes: Routes = [
    //path 不能以"/"开头
    { 
        path: "", 
        component: HomeComponent
    },
    
    {
        path: "login",
        component: LoginComponent
        
    },
    /*
    {
        path: 'diagnosis',
        component: DiagnosisComponent
    }
    */
];

//forRoot是用在根模块加载路由配置，而forChild是用在子模块加载路由配置。
export const appRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);