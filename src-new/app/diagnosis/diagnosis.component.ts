import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-diagnosis',
    templateUrl: './diagnosis.component.html',
    styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

    isAuthenticated = true;
    userName = "admin"
    
    diagnosisNavResources = [
        {
            label: '申请',
            imgUrl: 'assets/images/diagnosis/application1.png',
            routerLink: '/diagnosis/application',
            selected: true
        },
        {
            label: '诊断',
            imgUrl: 'assets/images/diagnosis/reporting1.png',
            routerLink: '/diagnosis/report',
            selected: false
        },
        {
            label: '审批',
            imgUrl: 'assets/images/diagnosis/check1.png',
            routerLink: '/diagnosis/check',
            selected: false
        },
        {
            label: '检索',
            imgUrl: 'assets/images/diagnosis/search.png',
            routerLink: '/diagnosis/search',
            selected: false
        }
    ]

    constructor(
        private router: Router
    ) {
        this.setInitialNav(router.url);
        console.log("router url: " + router.url);
     }

    ngOnInit() {
        //subscribe router state change
        //使用router.events来监听路由变化
        // this.router.events
        //     .filter(event => event instanceof NavigationEnd)
        //     .subscribe((event: NavigationEnd) => {
        //         this.setInitialNav(event.urlAfterRedirects);
        //     })
        this.router.events
            .subscribe((event) => {
                if(event instanceof NavigationEnd) {
                    this.setInitialNav(event.urlAfterRedirects);
                }
            })
    }

    //set the initial selected nav
    setInitialNav(url: string) {
        for(let item of this.diagnosisNavResources) {
            if(url.includes(item.routerLink)) {
                item.selected = true;
            } else {
                item.selected = false;
            }
        }
    }

    selectNav(diagnosisNavResource: any) {
        for(let item of this.diagnosisNavResources) {
            item.selected = false;
        }
        diagnosisNavResource.selected = true;
        this.router.navigate([diagnosisNavResource.routerLink]);
    }

    logout() {
        this.isAuthenticated = false;
    };

}
