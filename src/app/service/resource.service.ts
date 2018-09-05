import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'
import { UrlService } from './url.service';

@Injectable()
export class ResourceService {

    progress$ = new Subject<any>();

    constructor(
        private urlService: UrlService
    ) { }


    postFile(url: string, formData: any): Observable<Object> {
        return Observable.create((observe: Subject<Object>) => {
            var xhr = new XMLHttpRequest();
            //progress事件监测同时存在于上传和下载  下载在XMLHttpRequest对象上触发  上传在XMLHttpRequest.upload对象上触发
            //要在open()之前添加事件监听，否则progress事件将不会触发
            xhr.upload.addEventListener('progress',(event: any) => {
                //接收到传输的总字节数total和已经传输的字节数loaded
                console.log(event.loaded);
                let progress = Math.round(event.loaded/event.total * 100);
                this.progress$.next(progress);
            }, false);
            xhr.open("POST",url,true);
            xhr.setRequestHeader('Authentication',sessionStorage.getItem('auth_token'));
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4) {
                    if(xhr.status == 200) {
                        console.log("信息已经成功返回");
                        observe.next(JSON.parse(xhr.response));
                    } else {
                        console.log("服务器端出现问题")
                        observe.error(xhr.response);
                    }
                }
            }
            xhr.send(formData);
        
        })
        
    }


}
