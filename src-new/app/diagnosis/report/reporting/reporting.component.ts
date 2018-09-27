import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { ReportService } from '../report.service';

import { NzMessageService, NzModalService, UploadFile } from 'ng-zorro-antd';


@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {

    //select application properties
    searchTerm: string;

    //application select table properties
    applicationList = [
        {patientID: "00001", name: "fjwojf", gender: "男", submitter: "doc01", submitDate: "2018/09/10", submitDepartment: "儿保科", receiveDate: "2018/09/10"},
        {patientID: "00002", name: "fjwojf", gender: "男", submitter: "doc01", submitDate: "2018/09/10", submitDepartment: "儿保科", receiveDate: "2018/09/10"},
        {patientID: "00003", name: "fjwojf", gender: "男", submitter: "doc01", submitDate: "2018/09/10", submitDepartment: "儿保科", receiveDate: "2018/09/10"},
        {patientID: "00004", name: "fjwojf", gender: "男", submitter: "doc01", submitDate: "2018/09/11", submitDepartment: "儿保科", receiveDate: "2018/09/11"},
        {patientID: "00005", name: "fjwojf", gender: "男", submitter: "doc01", submitDate: "2018/09/11", submitDepartment: "儿保科", receiveDate: "2018/09/11"},
        {patientID: "00006", name: "fjwojf", gender: "男", submitter: "doc01", submitDate: "2018/09/11", submitDepartment: "儿保科", receiveDate: "2018/09/11"},
        {patientID: "00007", name: "fjwojf", gender: "男", submitter: "doc01", submitDate: "2018/09/12", submitDepartment: "儿保科", receiveDate: "2018/09/12"},
        {patientID: "00008", name: "fjwojf", gender: "男", submitter: "doc01", submitDate: "2018/09/12", submitDepartment: "儿保科", receiveDate: "2018/09/12"},
        {patientID: "00009", name: "fjwojf", gender: "男", submitter: "doc01", submitDate: "2018/09/13", submitDepartment: "儿保科", receiveDate: "2018/09/13"},
        {patientID: "00010", name: "fjwojf", gender: "男", submitter: "doc01", submitDate: "2018/09/13", submitDepartment: "儿保科", receiveDate: "2018/09/13"},
        {patientID: "00011", name: "fjwojf", gender: "男", submitter: "doc01", submitDate: "2018/09/14", submitDepartment: "儿保科", receiveDate: "2018/09/14"},
        {patientID: "00012", name: "fjwojf", gender: "男", submitter: "doc01", submitDate: "2018/09/14", submitDepartment: "儿保科", receiveDate: "2018/09/14"},
        {patientID: "00013", name: "fjwojf", gender: "男", submitter: "doc01", submitDate: "2018/09/15", submitDepartment: "儿保科", receiveDate: "2018/09/15"}
    ]
    applicationListData = [...this.applicationList];

    theadArr = ["门诊号","姓名","性别","申请医师","申请时间","申请科室","接收时间"];
    theadArrEng = ["patientID","name","gender","submitter","submitDate","submitDepartment","receiveDate"];

    //table sort and filter properties
    sortName = null;
    sortValue = null;
    sortArr = [0,4,6];

    //upload Excel file properties
    fileList: UploadFile[] = [];
    
    
    
    
    
    
    
    
    

    constructor(
        private reportService: ReportService,
        private messageService: NzMessageService,
        private modalService: NzModalService,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
    }


    //select application functions
    selectApplications () {
        this.applicationListData = this.applicationList.filter(item => {
            for(let theadItem of this.theadArrEng) {
                if(item[theadItem].includes(this.searchTerm)) {
                    return true;
                }
            }
            return false;
        })
    }

    //table sort and filter functions
    sortTable(sort: {key: string, value: string}) {
        this.sortName = sort.key;
        this.sortValue = sort.value;
        this.searchTable();
    }

    searchTable(): void {
        /**sort functions */
        if(this.sortName && this.sortValue) {
            this.applicationListData = this.applicationList.sort((a,b) => (this.sortValue === 'ascend') ? (a[this.sortName] > b[this.sortName] ? 1 : -1) : (a[this.sortName] < b[this.sortName] ? 1 : -1))
        } else {
            this.applicationListData = this.applicationList;
        }
        
    }

    //upload Excel file functions
    beforeUpload = (file: UploadFile): boolean => {
        this.fileList.push(file);
        return false;
    }

}
