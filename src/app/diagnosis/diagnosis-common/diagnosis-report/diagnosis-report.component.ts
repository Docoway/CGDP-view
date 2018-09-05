import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BasicForm } from '../entity/basic-form';


@Component({
  selector: 'app-diagnosis-report',
  templateUrl: './diagnosis-report.component.html',
  styleUrls: ['./diagnosis-report.component.css']
})
export class DiagnosisReportComponent implements OnInit {

    //basicInfo properties
    currentBasicInfo: any;
    basicInfoForm: FormGroup;
    
    //result table properties
    diagnosisResultData = [
        {key: '0',gene: 'STIM1',chr_location: 'Chr11:4095850',transcriptID: 'NM_003156',type: 'Exon7',nucleotide_change: 'c.910C>T',AAchange: 'p.R304W',homo_heter: '杂合',mutation_type: '致病',mutation_origin: '母源'}
    ];
    tempEditObject = {};
    resultTheadArr = ['基因','染色体位置','转录本编号','外显子/内含子','核苷酸改变','氨基酸改变','杂合/纯合','变异分类','变异来源'];
    resultTheadArrEng = ['gene','chr_location','transcriptID','type','nucleotide_change','AAchange','homo_heter','mutation_type','mutation_origin'];
    editRow = null;
    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.currentBasicInfo = new BasicForm()
        this.tempEditObject[this.diagnosisResultData[0].key] = {};

        this.basicInfoForm = this.fb.group({
            patientName: ['陈茗英'],
            treatmentType: ['门诊'],
            patientID: [7326345],
            patientNum: ['无'],
            recallID: ['无'],
            gender: ['男'],
            sampleType: ['外周血'],
            department: ['儿保科'],
            miniDiagnosis: ['矮小'],
            age: ['8M+'],
            sampleID: ['AX-25'],
            applicant: ['邵洁'],
            applicationItem: ['矮小症遗传学检测']
        })
    }

    //result table functions
    editResultTable(data) {
        this.tempEditObject[data.key] = {...data};
        this.editRow = data.key;
    }
    
    saveResultTable(data) {
        Object.assign(data, this.tempEditObject[data.key]);
        this.editRow = null;
    }

    cancelResultTable(data) {
        this.tempEditObject[data.key] = {};
        this.editRow = null;
    }
}
