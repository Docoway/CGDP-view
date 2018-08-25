import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
        //subscribe router state change
        router.events.subscribe((event: any) => {
            if(event.url !== undefined) {
                for(let item of this.diagnosisNavResources) {
                    if(event.url.includes(item.routerLink)) {
                        item.selected = true;
                    } else {
                        item.selected = false;
                    }
                }
            }
        });
     }

    ngOnInit() {
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
