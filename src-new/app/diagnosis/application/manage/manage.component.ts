import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { NzNotificationService, NzModalService, NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

    //search application properties
    searchTerm: string;
    //filterValidateForm properties
    filterValidateForm: FormGroup;
    
    // table properties
    _loading: boolean = false;
    _pagination: boolean = true;
    _current: Number = 1;
    
    theadArray = ["门诊号","姓名","性别","出生日期","样本类型","申请医师","申请时间","申请科室","申请项目","状态"]
    theadArrayEng = ["patientID","name","gender","birthDay","sampleType","submitter","submitDate","submitDepartment","submitCase","status"]
    //for advanced search
    filterTheadArray = ["门诊号","姓名","性别","出生日期","申请时间","状态"];
    filterTheadArrayEng = ["patientID","name","gender","birthDay","submitDate","status"]

    applicationList = [
        {patientID: '00001', createdDate: '2018/08/17', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01', submitDate: '2018/09/10', submitDepartment: "儿保科", status: "待接收", statusCode: "0"},
        {patientID: '00002', createdDate: '2018/08/16', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01', submitDate: '2018/09/10', submitDepartment: "儿保科", status: "待检测", statusCode: "1"},
        {patientID: '00003', createdDate: '2018/08/15', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01', submitDate: '2018/09/10', submitDepartment: "儿保科", status: "待报告", statusCode: "2"},
        {patientID: '00004', createdDate: '2018/08/14', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01', submitDate: '2018/09/10', submitDepartment: "儿保科", status: "待审查", statusCode: "3"},
        {patientID: '00005', createdDate: '2018/08/13', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01', submitDate: '2018/09/10', submitDepartment: "儿保科", status: "已完成", statusCode: "4"},
        {patientID: '00006', createdDate: '2018/08/12', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01', submitDate: '2018/09/10', submitDepartment: "儿保科", status: "已完成", statusCode: "4"},
        {patientID: '00007', createdDate: '2018/08/11', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01', submitDate: '2018/09/10', submitDepartment: "儿保科", status: "已完成", statusCode: "4"},
        {patientID: '00008', createdDate: '2018/08/10', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01', submitDate: '2018/09/10', submitDepartment: "儿保科", status: "已完成", statusCode: "4"},
        {patientID: '00009', createdDate: '2018/08/09', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01', submitDate: '2018/09/10', submitDepartment: "儿保科", status: "已完成", statusCode: "4"},
        {patientID: '00010', createdDate: '2018/08/09', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01', submitDate: '2018/09/10', submitDepartment: "儿保科", status: "已完成", statusCode: "4"},
        {patientID: '00011', createdDate: '2018/08/09', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01', submitDate: '2018/09/10', submitDepartment: "儿保科", status: "已完成", statusCode: "4"},
        {patientID: '00012', createdDate: '2018/08/09', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01', submitDate: '2018/09/10', submitDepartment: "儿保科", status: "已完成", statusCode: "4"},
        {patientID: '00013', createdDate: '2018/08/08', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01', submitDate: '2018/09/10', submitDepartment: "儿保科", status: "已完成", statusCode: "4"},
        {patientID: '00014', createdDate: '2018/08/08', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01', submitDate: '2018/09/10', submitDepartment: "儿保科", status: "已完成", statusCode: "4"},
        {patientID: '00015', createdDate: '2018/08/09', name: 'fjwojf', gender: '男', birthDay: '2017/08/17', sampleType: 'EDTA', phoneNumber: '123456782957', submitter: 'doc01', submitDate: '2018/09/10', submitDepartment: "儿保科", status: "已完成", statusCode: "4"},
    ]
    applicationListData = [...this.applicationList];

    //table sort and filter properties
    sortName = null;
    sortValue = null;
    sortArr = [0,3,6];
    statusList = [
        {text: "待接收", value: "0"},
        {text: "待检测", value: "1"},
        {text: "待报告", value: "2"},
        {text: "待审查", value: "3"},
        {text: "已完成", value: "4"}
    ];
    selectedStatusList: any[] = [];

    //modal properties
    isConfirmLoading: boolean = false;
    currentModal: NzModalRef;
    reportModal: NzModalRef;
    
    currentBasicInfo: any;

  
    constructor(
        private notificationService: NzNotificationService,
        private modalService: NzModalService,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        for(let applicationListItem of this.applicationListData) {
            applicationListItem["isShow"] = true;
        }

        this.filterValidateForm = this.fb.group({});
        for (let item of this.filterTheadArrayEng) {
            this.filterValidateForm.addControl(item, new FormControl());
        }

    }

    //filterValidateForm functions
    submitFilterValidateForm($event, formValue) {
        let isFormNotNull = false;
        for(let item of this.filterTheadArrayEng) {
            if(formValue[item]) {
                isFormNotNull = true;
                break;
            }
        }
        if(isFormNotNull) {
            //getApplicationList(formValue);
        }
    }

    resetFilterValidateForm() {
        this.filterValidateForm.reset();
    }

    //table sort and filter functions
    sortTable(sort: {key: string, value: string}): void {
        this.sortName = sort.key;
        this.sortValue = sort.value;
        this.search();
    }
    
    filterTable(selectedStatus): void {
        this.selectedStatusList = selectedStatus;
        this.search();
    }

    search(): void {
        /**filter data */
        const filterFunc = item => (this.selectedStatusList.length? this.selectedStatusList.some(status => item.statusCode.indexOf(status) !== -1) : true);
        const filteredData = this.applicationList.filter(item => filterFunc(item));
        /**sort applicationListData */
        if(this.sortName && this.sortValue) {
            this.applicationListData = filteredData.sort((a,b) => 
                (this.sortValue === 'ascend') ? (a[this.sortName] > b[this.sortName] ? 1 : -1) : (b[this.sortName] > a[this.sortName] ? 1 :-1)
            )
        } else {
            this.applicationListData = filteredData;
        }
    }


    //table functions
    searchApplication() {
        this.applicationListData = this.applicationList.filter(item => {
            for( let theadItem of this.theadArrayEng) {
                if ((item[theadItem] + '').includes(this.searchTerm)) {
                    return true;
                }
            }
            return false;
        })
    }

    pageChange($event) {
        console.log($event);
    }

    showEditModalForTemplate(titleTpl, contentTpl, footerTpl, applicationItem) {
        this.currentBasicInfo = applicationItem;
        this.currentModal = this.modalService.create({
            nzTitle: titleTpl,
            nzContent: contentTpl,
            nzFooter: footerTpl,
            nzMaskClosable: false,
            nzWidth: 840,
            nzOnOk() {
                console.log('2');
            }

        });
    }

    deleteApplication(applicationItem) {
        /**按照angular设计， nzData中数据进行增删时用push、splice修改nzData不会起作用 要用以下方式 */
        //删除数据
        this.applicationListData = this.applicationListData.filter(data => data.patientID !== applicationItem['patientID']);
        this.notificationService.success("申请删除成功！", "", {nzDuration: 2000})
    }

    showReport(tplTitle, tplContent, tplFooter, data) {
        this.reportModal = this.modalService.create({
            nzTitle: tplTitle,
            nzContent: tplContent,
            nzFooter: tplFooter,
            nzMaskClosable: false,
            nzWidth: 1200,
            nzOnOk: () => console.log("report click ok!")
        });
    }


    //modal functions
    editModalOk($event) {
        console.log('1');
        this.isConfirmLoading = true;
        setTimeout(() => {
            /**
             * destroy 方法可以传入onOk或者onCancel  默认onCancel
             */
            this.currentModal.destroy('onOk');
            this.isConfirmLoading = false;
            this.currentModal = null;
        }, 1000);
    }

    updateBasicInfo(value) {
        console.log(value);
    }
}
