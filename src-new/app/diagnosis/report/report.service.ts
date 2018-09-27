import { Injectable } from '@angular/core';

import { UrlService } from '../../service/url.service';
import { ResourceService } from '../../service/resource.service';


@Injectable()
export class ReportService {

    constructor(
        private urlService: UrlService,
        private resourceService: ResourceService
    ) { }


    //上传解析excel文档
    uploadSelectedExcel(selectedFile: File, patientID: string) {
        let formData = new FormData();
        formData.append('patientID', patientID);
        formData.append('selectedExcel', selectedFile);
        return this.resourceService.postFile(this.urlService.URL_UPLOAD_SELECTED_EXCEL,formData)
    }

}
