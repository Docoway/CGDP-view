import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
//import { Subject } from 'rxjs/Subject';
import { UrlService } from './url.service';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    //为什么写在这里就出问题了 直接在post里面写就没有问题呢
    //,observe: 'response'
};

@Injectable()
export class LoginService {

    private userName: string;
    //private password: string;
    private loginUrl = "www.localhost:8080/authenticate";
    private loggedIn = false;

    private AUTH_TOKEN = "auth_token";
    private USER_NAME = "user_name";
    private USER_ID = "user_id";

    constructor(
        private http: HttpClient,
        private urlService: UrlService
    ) {
        //!!一般将后面的表达式转化为boolean型数据
        this.loggedIn = !! sessionStorage.getItem(this.AUTH_TOKEN);
        if(this.loggedIn) {
            this.userName = sessionStorage.getItem(this.USER_NAME);
        }
    }

    login(userName: string, password: string, captchaKey: string, captcha: string ): Observable<Object> {
        return this.http.post(this.loginUrl, JSON.stringify({ userName, password, captchaKey, captcha }), httpOptions)
            .pipe(
                map(res => {
                    if(res["success"]){
                        this.userName = res["userName"];
                        sessionStorage.setItem(this.AUTH_TOKEN,res["token"]);
                        sessionStorage.setItem(this.USER_NAME,res["userName"]);
                        this.loggedIn = true;
                        /**
                         * announce log in successfully
                         */
                        this.announceLogStatus(true);
                    }
                    return res;
                }),
                catchError(err => {
                    this.loggedIn = false;
                    return Observable.throw(err);
                })
            )
    }

    logout() {
        sessionStorage.clear();
        localStorage.clear();
        this.loggedIn = false;
        /**
         * announce log out
         */
        this.announceLogStatus(false);
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    getUserName() {
        return this.userName;
    }


    public logStatusSubject$ = new Subject<boolean>();

    announceLogStatus(status: boolean) {
        this.logStatusSubject$.next(status);
    }

    
}


