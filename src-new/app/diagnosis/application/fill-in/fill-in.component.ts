import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BasicForm } from '../../diagnosis-common/entity/basic-form';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
    selector: 'app-fill-in',
    templateUrl: './fill-in.component.html',
    styleUrls: ['./fill-in.component.css']
})

export class FillInComponent implements OnInit {

    currentBasicInfo: any;

    // steps properties and functions
    current = 0;
    applicationManageUrl = '/diagnosis/application/manage';

    preContent() {
        this.current -= 1;
    }

    nextContent() {
        this.current += 1;
    }

    contentDone() {
        this.messageService.success('done');
        setTimeout(() => {
            this.router.navigate([this.applicationManageUrl]);
        }, 1000);

    }


    //tabContent

    constructor(
        private fb: FormBuilder,
        private messageService: NzMessageService,
        private router: Router
    ) { }

    ngOnInit() {
        //子组件表单属性
        this.currentBasicInfo = new BasicForm();
    }

    createBasicInfoForm(value) {
        console.log(value);
    }
    
}
