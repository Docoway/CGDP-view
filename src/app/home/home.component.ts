import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {

    homeNavResources = [
        {
            title: '报告申请',
            imgUrl: 'assets/images/home/application.png',
            routerLink: '/#',
            description: '基因检测报告申请，进行个性化基因测序服务',
            selected: false
        },
        {
            title: '报告生成',
            imgUrl: 'assets/images/home/reporting.png',
            routerLink: '/#',
            description: '上传基因测序结果进行测序分析，生成基因检测报告',
            selected: false
        },
        {
            title: '报告修改',
            imgUrl: 'assets/images/home/check.png',
            routerLink: '/#',
            description: '基因检测报告审阅以及修改',
            selected: false
        }
    ]
    
    constructor(
        private router: Router
    ) {}

    ngOnInit() {}

    selectHomeNav(homeNavResource) {
        for(let item of this.homeNavResources) {
            item.selected = false;
        }
        homeNavResource.selected = true;
        this.router.navigate([homeNavResource.routerLink]);
    }
}