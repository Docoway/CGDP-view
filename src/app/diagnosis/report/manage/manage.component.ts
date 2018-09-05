import { Component, OnInit } from '@angular/core';

import { NzNotificationService, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

    //reportList_table properties
    reportListData = [
        {name: 'fjwojf',patientID: '00001',createDate: '2018/08/27',gender: '男',diagnosis_result: '',diagnosis_conclusion: 'The ALDH1A1 gene encodes a liver cytosolic isoform of acetaldehyde dehydrogenase (", "), an enzyme involved in the major pathway of alcohol metabolism after alcohol dehydrogenase (ADH, see ", "). See also liver mitochondrial ALDH2 (", "), variation in which has been implicated in different responses to alcohol ingestion.", "ALDH1 is associated with a low Km for NAD, a high Km for acetaldehyde, and is strongly inactivated by disulfiram. ALDH2 is associated with a high Km for NAD, and low Km for acetaldehyde, and is insensitive to inhibition by disulfiram (", ").',reporter: 'doc01'}
    ];
    reportTheadArr = ['姓名','门诊号','创建时间','性别','检测结果','检测结论','报告者'];
    reportTheadArrEng = ['name','patientID','createDate','gender','diagnosis_result','reporter'];
    _loading: boolean = false;
    _pagination: boolean = true;

    //report modal properties
    currentModal: any;

    constructor(
        private notificationService: NzNotificationService,
        private modalService: NzModalService
    ) { }

    ngOnInit() {
    }

    //reprotList_table functions
    showReportModal(titleTpl, contentTpl, footerTpl) {
        this.currentModal = this.modalService.open({
            content: contentTpl,
            footer: footerTpl,
            maskClosable: false,
            width: '1200px'
        });
    }
    
    deleteReport(data) {
        console.log('delete report data');
        this.notificationService.success('报告删除成功！','门诊号',{nzDuration: 2000})
    }

}
