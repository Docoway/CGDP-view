import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
        //subscribe router state change
        //使用router.events来监听路由变化
        router.events.subscribe((event: any) => {
            console.log(event); 
                if(event.url !== undefined) {
                    for(let item of this.menuList) {
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

  selectMenuItem(menuItem: any) {
      for(let item of this.menuList) {
          item.selected = false;
      }
      menuItem.selected = true;
      this.router.navigate([menuItem.routerLink]);
  }

}
