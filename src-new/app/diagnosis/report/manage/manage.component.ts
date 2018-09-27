import { Component, OnInit } from '@angular/core';

import { NzNotificationService, NzModalService, NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

    //search reports properties
    searchTerm: string;

    //reportList_table properties
    reportList = [
        {patientID: '00001',name: 'fjwojf',gender: '男',submitter: 'doc01',submitDate: '2018/08/27', receiveDate: '2018/08/27',diagnosis_result: '未检出',reporter: 'doc02',reportDate: '2018/09/17', status: '待审查', statusCode: "3", diagnosis_conclusion: 'The ALDH1A1 gene encodes a liver cytosolic isoform of acetaldehyde dehydrogenase (", "), an enzyme involved in the major pathway of alcohol metabolism after alcohol dehydrogenase (ADH, see ", "). See also liver mitochondrial ALDH2 (", "), variation in which has been implicated in different responses to alcohol ingestion.", "ALDH1 is associated with a low Km for NAD, a high Km for acetaldehyde, and is strongly inactivated by disulfiram. ALDH2 is associated with a high Km for NAD, and low Km for acetaldehyde, and is insensitive to inhibition by disulfiram (", ").'},
        {patientID: '00002',name: 'fjwojf',gender: '男',submitter: 'doc01',submitDate: '2018/08/27', receiveDate: '2018/08/27',diagnosis_result: '未检出',reporter: 'doc02',reportDate: '2018/09/17', status: '待审查', statusCode: "3"},
        {patientID: '00003',name: 'fjwojf',gender: '男',submitter: 'doc01',submitDate: '2018/08/27', receiveDate: '2018/08/27',diagnosis_result: '未检出',reporter: 'doc02',reportDate: '2018/09/17', status: '待审查', statusCode: "3"},
        {patientID: '00004',name: 'fjwojf',gender: '男',submitter: 'doc01',submitDate: '2018/08/28', receiveDate: '2018/08/28',diagnosis_result: '未检出',reporter: 'doc02',reportDate: '2018/09/18', status: '待审查', statusCode: "3"},
        {patientID: '00005',name: 'fjwojf',gender: '男',submitter: 'doc01',submitDate: '2018/08/28', receiveDate: '2018/08/28',diagnosis_result: '未检出',reporter: 'doc02',reportDate: '2018/09/18', status: '待审查', statusCode: "3"},
        {patientID: '00006',name: 'fjwojf',gender: '男',submitter: 'doc01',submitDate: '2018/08/28', receiveDate: '2018/08/28',diagnosis_result: '未检出',reporter: 'doc02',reportDate: '2018/09/18', status: '待审查', statusCode: "3"},
        {patientID: '00007',name: 'fjwojf',gender: '男',submitter: 'doc01',submitDate: '2018/08/29', receiveDate: '2018/08/29',diagnosis_result: '致病',reporter: 'doc02',reportDate: '2018/09/18', status: '待审查', statusCode: "3"},
        {patientID: '00008',name: 'fjwojf',gender: '男',submitter: 'doc01',submitDate: '2018/08/29', receiveDate: '2018/08/29',diagnosis_result: '致病',reporter: 'doc02',reportDate: '2018/09/19', status: '已完成', statusCode: "4"},
        {patientID: '00009',name: 'fjwojf',gender: '男',submitter: 'doc01',submitDate: '2018/08/29', receiveDate: '2018/08/29',diagnosis_result: '致病',reporter: 'doc02',reportDate: '2018/09/19', status: '已完成', statusCode: "4"},
        {patientID: '00010',name: 'fjwojf',gender: '男',submitter: 'doc01',submitDate: '2018/08/29', receiveDate: '2018/08/29',diagnosis_result: '致病',reporter: 'doc02',reportDate: '2018/09/19', status: '已完成', statusCode: "4"},
        {patientID: '00011',name: 'fjwojf',gender: '男',submitter: 'doc01',submitDate: '2018/08/31', receiveDate: '2018/08/31',diagnosis_result: '致病',reporter: 'doc02',reportDate: '2018/09/19', status: '已完成', statusCode: "4"},
        {patientID: '00012',name: 'fjwojf',gender: '男',submitter: 'doc01',submitDate: '2018/08/31', receiveDate: '2018/08/31',diagnosis_result: '致病',reporter: 'doc02',reportDate: '2018/09/19', status: '已完成', statusCode: "4"},
        {patientID: '00013',name: 'fjwojf',gender: '男',submitter: 'doc01',submitDate: '2018/08/31', receiveDate: '2018/08/31',diagnosis_result: '致病',reporter: 'doc02',reportDate: '2018/09/19', status: '已完成', statusCode: "4"}
    ];
    reportTheadArr = ['门诊号','姓名','性别','申请医师','申请时间','接收时间','检测结果','报告者','报告时间',"状态"]; //接收时间
    reportTheadArrEng = ['patientID','name','gender','submitter','submitDate','receiveDate','diagnosis_result','reporter','reportDate','status'];
    _loading: boolean = false;
    _pagination: boolean = true;
    reportListData = [...this.reportList];

    //table sort and filter properties
    sortName: string = null;
    sortValue: string = null;
    sortArr = [0,4,7];
    statusList = [
        {text: "待审查", value: 3},
        {text: "已完成", value: 4}
    ];
    selectedStatusList = [];

    //report modal properties
    currentModal: NzModalRef;


    constructor(
        private notificationService: NzNotificationService,
        private modalService: NzModalService
    ) { }

    ngOnInit() {
    }

    //search reports functions
    searchReports() {
        this.reportListData = this.reportList.filter(item => {
            for(let theadItem of this.reportTheadArrEng) {
                if(item[theadItem].includes(this.searchTerm)) {
                    return true;
                }
            }
            return false;
        })
    }

    //table sort and filter functions
    sortReport( sort : {key: string, value: string}): void {
        this.sortName = sort.key;
        this.sortValue = sort.value;
        this.search();
    }

    filterReport(selectedStatus) {
        this.selectedStatusList = selectedStatus;
        this.search();
    }

    search(): void {
        /**filter report */
        const filterFunc = item => (this.selectedStatusList.length? this.selectedStatusList.some(status => item.statusCode.indexOf(status) !== -1) : true);
        const filteredData = this.reportList.filter(item => filterFunc(item));
        /**sort report */
        if(this.sortName && this.sortValue) {
            this.reportListData = filteredData.sort((a,b) => (this.sortValue === 'ascend') ? (a[this.sortName] > b[this.sortName] ? 1 : -1) : (a[this.sortName] < b[this.sortName] ? 1 : -1))
        } else {
            this.reportListData = filteredData;
        }
    }

    //reprotList_table functions
    showReportModal(titleTpl, contentTpl, footerTpl) {
        this.currentModal = this.modalService.create({
            nzContent: contentTpl,
            nzFooter: footerTpl,
            nzMaskClosable: false,
            nzWidth: '1200'
        });
    }
    
    deleteReport(data) {
        this.notificationService.success('报告删除成功！','门诊号',{nzDuration: 2000})
    }

}
