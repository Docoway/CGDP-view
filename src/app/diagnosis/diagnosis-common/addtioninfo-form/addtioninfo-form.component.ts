import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addtioninfo-form',
  templateUrl: './addtioninfo-form.component.html',
  styleUrls: ['./addtioninfo-form.component.css']
})
export class AddtioninfoFormComponent implements OnInit {

    //addtionInfo properties
    addtionValidateForm: FormGroup;

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.addtionValidateForm = this.fb.group({
            item1: []
        });
    }

    //addtionInfo validators and functions
    getFormControl(name: string) {
        return this.addtionValidateForm.controls[ name];
    }

    submitAddtionForm($event, value) {
        $event.preventDefault();
        for(const key in this.addtionValidateForm.controls) {
            this.addtionValidateForm.controls[ key ].markAsDirty();
        }
    }

    addPicture($event) {
        $event.preventDefault();
    }

    resetAddtionForm(): void {
        this.addtionValidateForm.reset()
        for(const key in this.addtionValidateForm.controls) {
            this.addtionValidateForm.controls[ key ].markAsPristine();
        }
    }

}
