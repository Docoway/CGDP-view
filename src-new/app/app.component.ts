import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = '临床基因检测平台';
    isAuthenticated = true;
    userName = "admin";

    navigationWhiteList = ['/login'];
    noUseNavList = ['/diagnosis']; // 不需要app.compnent.html 中的导航栏nav的路径集合
    isUseNav = true;

    navResources = [
        {
        label: '报告流程',
        imageUrl: 'assets/images/index/workflow.png',
        routerLink: '/#',
        selected: true
        },
        {
        label: '报告示例',
        imageUrl: 'assets/images/index/report1.png',
        routerLink: '/#',
        selected: false
        },
        {
        label: '科学研究',
        imageUrl: 'assets/images/index/reserch1.png',
        routerLink: '/#',
        selected: false
        },
        {
        label: '检索',
        imageUrl: 'assets/images/index/search2.png',
        routerLink: '/#',
        selected: false
        }
    ]

    constructor(
        private router: Router
    ) {
        //subscribe router state change
        router.events.subscribe((event: any) => {
            if (event instanceof NavigationStart) {
                if (this.noUseNavList.indexOf(event.url) != -1 || event.url.indexOf('diagnosis') != -1) {
                    this.isUseNav = false;
                } else {
                    this.isUseNav = true;
                }
            }

            if (this.navigationWhiteList.indexOf(event.url) == -1) {
                if (!this.isAuthenticated) {
                    this.router.navigate(['login']);
                }
            }
        })
        }


    selectNav(navResource: any): void {
        for(let item of this.navResources) {
        item.selected = false;
        }
        navResource.selected = true;
        this.router.navigate([navResource.routerLink])
    }


    logout() {
        this.isAuthenticated = false;
    };

    ngOnInit() {}

}
