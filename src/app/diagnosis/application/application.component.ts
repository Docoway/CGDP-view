import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  menuList = [
    {
        label: "申请填写",
        imgUrl: "assets/images/diagnosis/application/fill-in.png",
        routerLink: "/diagnosis/application/fill_in",
        selected: true
    },
    {
        label: "申请管理",
        imgUrl: "assets/images/diagnosis/application/manage1.png",
        routerLink: "/diagnosis/application/manage",
        selected: false
    },
    {
      label: "数据导出",
      imgUrl: "assets/images/diagnosis/application/download.png",
      routerLink: "/diagnosis/application/download",
      selected: false
    }
  ]
  
    constructor(
        private router: Router
    ) {
        this.setInitialNav(router.url);
    }

    ngOnInit() {
        //subscribe router state change
        this.router.events
            .filter((event) => event instanceof NavigationEnd)
            .subscribe((event: NavigationEnd) => {   //导航成功结束时执行
                this.setInitialNav(event.urlAfterRedirects);
            });
    }
    
    //set the initial selected nav
    setInitialNav(url) {
        for(let item of this.menuList) {
            if(url.includes(item.routerLink)) {
                item.selected = true;
            } else {
                item.selected = false;
            }
        }
    }

    selectMenuItem(menuItem: any) {
        for(let item of this.menuList) {
            item.selected = false;
        }
        menuItem.selected = true;
        this.router.navigate([menuItem.routerLink]);
    }

}
