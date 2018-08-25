import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {

    configPath = 'config.json';
    protocol: string;
    ip: string;
    port: string;
    name: string;
    prefix: string;
    
    constructor() { }

    loadConfigFile() {
        var xhr = new XMLHttpRequest();
        //XHR2中 XMLHttpRequest对象在请求不同阶段会触发不同类型事件,不用再检查readState属性了
        //调用send()事件 触发单个loadstart事件， 正加载服务器相应时，触发progress事件，事件完成触发load事件
        //对于任何具体的请求，浏览器只会触发load，abort，timeout，error事件中的一个  
        //在open()之前添加事件监听
        xhr.addEventListener('load', (data: any) => {
            try{
                var response = JSON.parse(data.target.response);
            } catch(err) {
                alert(`加载解析配置文件${this.configPath}出错`)
            }

            if(response && response.ip && response.port && response.name) {
                this.ip = response.ip;
                this.port = response.port;
                this.name = response.name;
                this.protocol = response.protocol;
                this.prefix = `${this.protocol}://${this.ip}:${this.port}/${this.name}`
            } else {
                alert(`配置文件存在错误`)
            }
            
        });
        xhr.open("GET", this.configPath, false);
        xhr.send();
    }

    /**
     * login url porperties
     */
    get URL_GET_FETCH_CAPTCHA() {
        return this.prefix + '/captcha';
    }



}
