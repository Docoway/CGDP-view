import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { WuCitySelectModule } from 'ngx-select-city';

import { BasicinfoFormComponent } from './basicinfo-form/basicinfo-form.component';
import { AddtioninfoFormComponent } from './addtioninfo-form/addtioninfo-form.component';
import { PhenotypeTreeComponent } from './phenotype-tree/phenotype-tree.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
    WuCitySelectModule
  ],
  declarations: [
      BasicinfoFormComponent,
      AddtioninfoFormComponent,
      PhenotypeTreeComponent
  ],
  exports: [
      BasicinfoFormComponent,
      AddtioninfoFormComponent,
      PhenotypeTreeComponent
  ]
})
export class DiagnosisCommonModule { }
