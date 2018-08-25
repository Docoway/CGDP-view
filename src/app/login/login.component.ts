import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'

import {} from '@angular/http';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { LoginService } from '../service/login.service';
import { UrlService } from '../service/url.service';


@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    
    @ViewChild("loginForm")
    form: NgForm;
    
    user: User;
    pageStatus: StatusEnum;
    errorMsg: string;

    captcha: string;
    captchaKey: string;
    captchaSrc: SafeUrl;

    //当包含constructor 的类生成类实例 会调用constructor
    constructor(
        private loginService: LoginService,
        private sanitizer: DomSanitizer,
        private router: Router,
        private urlService: UrlService
    ) {
    }

    ngOnInit() {
        this.user = {
            userName: "admin",
            password: "admin"
        }
        this.pageStatus = StatusEnum.BEFORE_LOGIN;
        this.loadCaptcha();
    }

    loadCaptcha() {
        /**
         * angular http can't work here.  ????????????
         */
        var xhr = new XMLHttpRequest();   //创建xhr对3象
        //xhr.open("GET","https://avatars2.githubusercontent.com/u/4220799?v=3",true)
        xhr.open("GET",this.urlService.URL_GET_FETCH_CAPTCHA,true);
        //the result type is ArrayBuffer
        xhr.responseType = "arraybuffer";

        //注意这一步的this  直接在function中用this和 这里的this不一样;
        var self = this;

        xhr.onload= function (e) {
            //obtain a blob: url for the image
            var arrayBufferView = new Uint8Array(xhr.response);
            var blob = new Blob([arrayBufferView],{
                type: "image/jpeg"
            });
            self.captchaKey = xhr.getResponseHeader("CaptchaKey");
            var imageUrl = window.URL.createObjectURL(blob);
            self.captchaSrc = self.sanitizer.bypassSecurityTrustUrl(imageUrl);
        };
        xhr.send();
  
    }

    onSubmit() {
        this.pageStatus = StatusEnum.VERIFING;
        this.loginService.login(this.user.userName, this.user.password, this.captchaKey,this.captcha)
            .subscribe(
                (data: any) => {
                    if(data.success) {
                        this.errorMsg = null;
                        this.router.navigate([""]);
                    } else {
                        this.errorMsg = data.message;
                        this.loadCaptcha();
                        this.captcha = "";
                    }
                    this.pageStatus = StatusEnum.BEFORE_LOGIN;
                },
                error => {
                    this.pageStatus = StatusEnum.BEFORE_LOGIN;
                    this.errorMsg = "用户名或者密码错误";
                    this.resetPage();
                }
            )
    }

    resetPage() {
        this.form.reset();
        this.loadCaptcha();
    }


}

class User {
    userName: string;
    password: string;
}

enum StatusEnum {
    BEFORE_LOGIN,
    VERIFING
}

