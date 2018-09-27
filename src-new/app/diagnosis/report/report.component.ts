import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

    menuList = [
        {
            label: "报告生成",
            imageUrl: "assets/images/diagnosis/report/write-report.png",
            routerLink: "/diagnosis/report/reporting",
            selected: true
        },
        {
            label: "报告管理",
            imageUrl: "assets/images/diagnosis/report/file-management.png",
            routerLink: "/diagnosis/report/manage",
            selected: false
        },
        {
            label: "报告下载",
            imageUrl: "assets/images/diagnosis/report/download-file.png",
            routerLink: "diagnosis/report/download",
            selected: false
        },
    ];

    constructor(
        private router: Router
    ) {
        this.setInitialNav(router.url);
     }

    ngOnInit() {
        this.router.events
            .subscribe((event) => {
                if(event instanceof NavigationEnd) {
                    this.setInitialNav(event.urlAfterRedirects)
                }
            });
    }

    //set the initial selected nav
    setInitialNav(url) {
        for(let menuItem of this.menuList) {
            if(url.includes(menuItem.routerLink)) {
                menuItem.selected = true;
            } else {
                menuItem.selected = false;
            }
        }
    }

    selectMenuItem(item): void {
        for(let menuItem of this.menuList) {
            menuItem.selected = false;
        }        
        item.selected = true;
        this.router.navigate([item.routerLink]);
    }

}
