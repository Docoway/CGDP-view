import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BasicForm } from '../../diagnosis-common/entity/basic-form';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'app-fill-in',
    templateUrl: './fill-in.component.html',
    styleUrls: ['./fill-in.component.css']
})

export class FillInComponent implements OnInit {

    currentBasicInfo: any;

    // steps properties and functions
    current = 0;

    preContent() {
        this.current -= 1;
    }

    nextContent() {
        this.current += 1;
    }

    contentDone() {
        this.messageService.success('done')
    }


    //tabContent

    constructor(
        private fb: FormBuilder,
        private messageService: NzMessageService
    ) { }

    ngOnInit() {
        //子组件表单属性
        this.currentBasicInfo = new BasicForm();
    }

    createBasicInfoForm($event) {
        $event.preventDefault();
    }
    
}
