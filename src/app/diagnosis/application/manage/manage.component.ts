import { Component, OnInit } from '@angular/core';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

    // table properties
    _loading: boolean = false;
    _pagination: boolean = true;
    _current: Number = 1;
    
    theadArray = ["门诊号","创建时间","姓名","性别","出生日期","样本类型","联系电话","送检者"]
    theadArrayEng = ["patientID","createdDate","name","gender","birthDay","sampleType","phoneNumber","submitter"]
    
    applicationListData = [
        {patientID: '00001', createdDate: '2018/08/17', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01'},
        {patientID: '00002', createdDate: '2018/08/16', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01'},
        {patientID: '00003', createdDate: '2018/08/15', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01'},
        {patientID: '00004', createdDate: '2018/08/14', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01'},
        {patientID: '00005', createdDate: '2018/08/13', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01'},
        {patientID: '00006', createdDate: '2018/08/12', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01'},
        {patientID: '00007', createdDate: '2018/08/11', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01'},
        {patientID: '00008', createdDate: '2018/08/10', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01'},
        {patientID: '00009', createdDate: '2018/08/09', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01'},
        {patientID: '00010', createdDate: '2018/08/09', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01'},
        {patientID: '00011', createdDate: '2018/08/09', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01'},
        {patientID: '00012', createdDate: '2018/08/09', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01'},
        {patientID: '00013', createdDate: '2018/08/09', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01'},
        {patientID: '00014', createdDate: '2018/08/09', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01'},
        {patientID: '00015', createdDate: '2018/08/09', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01'},
    ]


    //modal properties
    isConfirmLoading: boolean = false;
    currentModal: any;
  
    constructor(
        private notificationService: NzNotificationService,
        private modalService: NzModalService
    ) { }

    ngOnInit() {
        for(let applicationListItem of this.applicationListData) {
            applicationListItem["isShow"] = true;
        }
    }

    
    //table functions
    showEditModalForTemplate(titleTpl, contentTpl, footerTpl, applicationItem) {
        this.currentModal = this.modalService.open({
            title: titleTpl,
            content: contentTpl,
            footer: footerTpl,
            maskClosable: false,
            onOk() {
                console.log('1');
            }

        });
    }

    deleteApplication(applicationItem) {
        this.notificationService.success("申请删除成功！", "", {nzDuration: 2000})
    }

    edit(data) {
        console.log(data);
    }


    //modal functions
    editModalOk($event) {
        console.log('1');
    }
}
