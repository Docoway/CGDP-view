import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { ReportService } from '../report.service';

import { NzMessageService, NzModalService } from 'ng-zorro-antd';


@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {

    //upload excel file properties
    uploadPreparation: boolean = true;
    fileExisted: boolean = false;
    fileUploading: boolean = false;
    fileUploaded: boolean = false;
    selectedUploadFile: File;
    fileAnalyzing: boolean = false;

    isLoadingOne: boolean = false;
    selectedFileName: string;



    // main page modal properties
    isOptionsModalVisible: boolean = false;
    isConfirmLoading: boolean = false;
    isSaved: boolean = false;
    filterValidateForm: FormGroup;
    filterFormControlArray: any[] = [];
    filterFormControlItem = ['esp6500siv2_all','1000g2014oct_all','1000g2014oct_afr','1000g2014oct_eas','1000g2014oct_eur','Otherinfo','AZ','BA','BG','ExonicFunc.refGene','BH']
    isCollapse: boolean = true;

    currentModal: any;

    //omimReference_div properties
    selectedGene: string;
    _omimDescLoading: boolean = false;
    omimDescription: string = 'The ALDH1A1 gene encodes a liver cytosolic isoform of acetaldehyde dehydrogenase (", "), an enzyme involved in the major pathway of alcohol metabolism after alcohol dehydrogenase (ADH, see ", "). See also liver mitochondrial ALDH2 (", "), variation in which has been implicated in different responses to alcohol ingestion.", "ALDH1 is associated with a low Km for NAD, a high Km for acetaldehyde, and is strongly inactivated by disulfiram. ALDH2 is associated with a high Km for NAD, and low Km for acetaldehyde, and is insensitive to inhibition by disulfiram (", ").  ';

    constructor(
        private reportService: ReportService,
        private messageService: NzMessageService,
        private modalService: NzModalService,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.filterValidateForm = this.fb.group({});
        this.filterFormControlItem.forEach((item,i) => {
            if(i < 6 ) {
                this.filterFormControlArray.push({title: item, show: true});
            } else {
                this.filterFormControlArray.push({title: item, show: false});
            }
            if(i < 9) {
                this.filterValidateForm.addControl('min-' + item, new FormControl());
                this.filterValidateForm.addControl('max-' + item, new FormControl());
            } else {
                this.filterValidateForm.addControl(item, new FormControl());
            }
        })
    }

    //upload excel file  functions
    //event.target 返回触发事件的元素   event.currentTarget 返回绑定事件的元素
    fileUploadPreparing(event) {
        //let fileSum = event.currentTarget.files.length;  //貌似也可以
        let fileSum = event.currentTarget.files.length;
        if(fileSum === 1) {
            let currentFile = event.currentTarget.files[0];
            if(this.isExcel(currentFile.name)) {
                this.selectedUploadFile = currentFile;
                this.selectedFileName = currentFile.name;
                this.fileExisted = true;
            } else {
                this.fileExisted = false;
                this.messageService.error("文档格式仅限.xls或.xlsx!")
            }      
        } else {
            this.fileExisted = false;
        }
    }

    cancelSelectedFile(): void {
        this.fileExisted = false;
        this.fileUploading = false;
        this.isLoadingOne = false;
    }

    uploadSelectedFile(patientID) {
        this.fileUploading = true;
        this.isLoadingOne = true;
        this.uploadPreparation = false;
        this.reportService.uploadSelectedExcel(this.selectedUploadFile, patientID).subscribe((res: any) => {
            if(res.code === 'OK') {
                if(res.data.success) {
                    console.log(res.data);
                    this.fileUploaded = true;
                    this.uploadPreparation = false;
                } else {
                    console.log("解析中出现的问题")
                }
            } else {
                console.log("服务器出错");
                this.messageService.error("服务器出错！！")
            }
            console.log("chucuozhihou zheli")
            this.fileUploading = false;
            this.fileExisted = false;
            this.isLoadingOne = false;

            //close the modal if this function is running in the modal
            this.currentModal = null;
        })
    }

    isExcel(fileName: string) {
        let fileNameArray = fileName.split('.');
        let fileType = fileNameArray[fileNameArray.length-1];
        return fileType === 'xls' || fileType === 'xlsx';
    }


    

    //main page modal functions
    showOptionsModal(): void {
        this.isOptionsModalVisible = true;
    }

    handleCancel() {
        this.isOptionsModalVisible = false;
    }

    filterTable(): void {
        this.isConfirmLoading = true;
        setTimeout(() => {
            this.isOptionsModalVisible = false;
            this.isConfirmLoading = false;
        }, 2000);
    }

    toggleCollapse(): void {
        this.isCollapse = !this.isCollapse;
        this.filterFormControlArray.forEach((item, i) => {
            if(i >= 6 ) {
                item.show = !item.show;
            }
        });
    }

    saveOptions() {
        console.log("baocun");
        this.isSaved = true;
    }

    showUploadExcelModal(titleTpl, contentTpl, footerTpl) {
        this.currentModal = this.modalService.open({
            title: titleTpl,
            content: contentTpl,
            footer: footerTpl,
            maskClosable: false
        });
    }



}
