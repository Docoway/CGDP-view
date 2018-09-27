import { NgModule } from '@angular/core'
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";


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

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
