import { Component, OnInit } from '@angular/core';

import { NzModalService, NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {


    searchInputValue: string;
    currentModal: any;

    isReportModalVisible: boolean = false;

    constructor(
        private modalService: NzModalService,
        private notificationService: NzNotificationService
    ) { }

    ngOnInit() {
    }

    showReportModalForTemplate(titleTpl, contentTpl, footerTpl, patientID) {
        this.currentModal = this.modalService.open({
            title: titleTpl,
            content: contentTpl,
            footer: footerTpl,
            maskClosable: false,
            width: '1220px'
        })
    }

    showReportModal() {
        this.isReportModalVisible = true;
    }

    deleteReport() {
        this.notificationService.success('报告删除成功！','门诊号', {nzDuration: 2000})
    }
}
