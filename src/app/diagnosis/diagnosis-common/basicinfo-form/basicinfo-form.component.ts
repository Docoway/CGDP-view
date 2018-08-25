import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basicinfo-form',
  templateUrl: './basicinfo-form.component.html',
  styleUrls: ['./basicinfo-form.component.css']
})
export class BasicinfoFormComponent implements OnInit {

    @Input()
    basicInfo: any;

    @Output()
    submitFormEvent = new EventEmitter();

    basicValidateForm: FormGroup;  //创建表单组

    //basicInfoForm properties
    birthPlace: string;
    nationList = [
        {nationName: '汉族', nationCode: '01'},
        { nationName: "蒙古族", nationCode: "02" },
        { nationName: "回族", nationCode: "03" },
        { nationName: "藏族", nationCode: "04" },
        { nationName: "维吾尔族", nationCode: "05" },
        { nationName: "苗族", nationCode: "06" },
        { nationName: "彝族", nationCode: "07" },
        { nationName: "壮族", nationCode: "08" },
        { nationName: "布依族", nationCode: "09" },
        { nationName: "朝鲜族", nationCode: "10" },
        { nationName: "满族", nationCode: "11" },
        { nationName: "侗族", nationCode: "12" },
    ]

    relationshipOptions = [
        {relationshipType: '父亲', relationshipCode: '01'},
        {relationshipType: '母亲', relationshipCode: '02'},
        {relationshipType: '祖父', relationshipCode: '03'},
        {relationshipType: '祖母', relationshipCode: '04'},
    ]

    sampleTypeSelectList = [
        {typeLabel: '外周血(EDTA)', typeCode: '0'},
        {typeLabel: '其它', typeCode: '1'}
    ]





    //tabContent

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        /*
        this.basicValidateForm = this.fb.group({
            patientID: [null, [ Validators.required ] ],
            name: [null, [ Validators.required ]],
            gender: ['男', [Validators.required]],
            birthDay: ['', [ this.birthDayvalidator ]],
            nationality: ['01'], //注意是[nzValue]
            relationship: ['01'],
            contactName: [null, [ Validators.required ] ],
            birthPlace: [ null ],
            address: [ null ],
            phoneNumber: [null, [ Validators.required, this.phoneNumbervalidator ] ],
            sampleSelect: ['0'],
            sampleInput: [null, [ Validators.required ]]
        });
        */
       this.basicValidateForm = this.fb.group({
            patientID: [this.basicInfo.patientID, [ Validators.required ] ],
            name: [this.basicInfo.name, [ Validators.required, this.namevalidator ]],
            gender: [this.basicInfo.gender, [Validators.required]],
            birthDay: [this.basicInfo.birthDay, [ this.birthDayvalidator ]],
            nationality: [this.basicInfo.nationCode], //注意是[nzValue]
            relationship: [this.basicInfo.relationshipCode],
            contactName: [this.basicInfo.contactName, [ Validators.required, this.contactNamevalidator ] ],
            address: [ this.basicInfo.address ],
            phoneNumber: [this.basicInfo.phoneNumber, [ Validators.required, this.phoneNumbervalidator ] ],
            sampleSelect: [this.basicInfo.typeCode],
            sampleInput: [this.basicInfo.sampleInput, [ Validators.required ]]
       })
    }

    //basicInfoForm validators and functions
    namevalidator = (control: FormControl): any => {
        let nameReg = /^[\u4e00-\u9fa5A-Za-z]+$/;
        if(control.value) {
            if(control.value.length < 2) {
                return { minwarn: true, error: true }
            }
            if(control.value.length > 12) {
                return { maxwarn: true, error: true }
            }
            if(!nameReg.test(control.value)) {
                return { expired: true, error: true }
            }
        }
    }

    birthDayvalidator = (control: FormControl): any => {
        if(new Date(control.value) > new Date()) {
            return { expired: true, error: true }
        }
    }

    contactNamevalidator = (control: FormControl): any => {
        let contactNameReg = /^[\u4e00-\u9fa5A-Za-z]+$/;
        //必须先保证控件值不为空
        if(control.value) { 
            if(control.value.length < 2) {
                return { minwarn: true, error: true }
            }
            if(control.value.length > 12) {
                return { maxwarn: true, error: true }
            }
            if(!contactNameReg.test(control.value)) {
                return { expired: true, error: true }
            }
        }
    }

    phoneNumbervalidator = (control: FormControl): any => {
        let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if(control.value && !phoneReg.test(control.value)) {
            return { expired: true, error: true }
        }        
    }

    citySelect(event) {
        //结果：{name：'省/市/区', value: '省编码'}
        this.birthPlace = event.name;
    }



    submitBasicForm($event, value) {
        //$event.preventDefault();  //组织表单提交(阻止元素发生默认的行为)
        for(const key in this.basicValidateForm.controls) {
            this.basicValidateForm.controls[ key ].markAsDirty();  //dirty 是说值曾经被修改过 ( 改了即使你改回去同一个值也是 dirty 了哦 )
        }
        value.birthPlace = this.birthPlace ? this.birthPlace : this.basicInfo.birthPlace;
        this.submitFormEvent.emit(value);
    }

    resetBasicForm(): void {
        this.basicValidateForm.reset();
        for(const key in this.basicValidateForm.controls) {
            this.basicValidateForm.controls[ key].markAsPristine();
        }
    }

    getFormControl(name) {
        return this.basicValidateForm.controls[ name ];
    }


}
