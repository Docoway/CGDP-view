import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

    menuList = [
        {
            label: '审查',
            imageUrl: 'assets/images/diagnosis/check/review.png',
            routerLink: '/diagnosis/check/review',
            selected: true
        },
        {
            label: '下载',
            imageUrl: 'assets/images/diagnosis/check/download.png',
            routerLink: '/diagnosis/check/download',
            selected: false
        }
    ];
    
    
    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        // this.router.events
        //     .filter(event => event instanceof NavigationEnd)
        //     .subscribe((event: NavigationEnd) => {
        //         this.setInitialNav(event.urlAfterRedirects);
        //     })
    }

    //set the initial nav
    setInitialNav(url: string) {
        for(let item of this.menuList) {
            if(url.includes(item.routerLink)) {
                item.selected = true;
            } else {
                item.selected = false;
            }
        }
    }

    selectMenuItem(menuItem) {
        for(let item of this.menuList) {
            item.selected = false;
        }
        menuItem.selected = true;
        this.router.navigate([menuItem.routerLink]);
    }

}
