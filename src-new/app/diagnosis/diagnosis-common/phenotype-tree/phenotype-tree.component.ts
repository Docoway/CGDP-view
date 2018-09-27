import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phenotype-tree',
  templateUrl: './phenotype-tree.component.html',
  styleUrls: ['./phenotype-tree.component.css']
})
export class PhenotypeTreeComponent implements OnInit {

    //phenotype menu properties
    clinicalSynopses = [
        {
            title: 'Inheritance',
            subtitle: [
                {
                    item: '',
                    phenotype: ''
                }
            ],
            open: false
            
        },
        {
            title: 'Growth',
            subtitle: [
                {
                    item: 'Height',
                    phenotype: ''
                },
                {
                    item: 'Weight',
                    phenotype: ''
                },
                {
                    item: 'Other',
                    phenotype: ''
                },
            ],
            open: false
            
        },
        {
            title: 'Head and neck',
            subtitle: [
                {
                    item: 'Head',
                    phenotype: ''
                },
                {
                    item: 'Face',
                    phenotype: ''
                },
                {
                    item: 'Ears',
                    phenotype: ''
                },
                {
                    item: 'Eyes',
                    phenotype: ''
                },
                {
                    item: 'Nose',
                    phenotype: ''
                },
                {
                    item: 'Mouth',
                    phenotype: ''
                },
                {
                    item: 'Teeth',
                    phenotype: ''
                },
                {
                    item: 'Neck',
                    phenotype: ''
                },
            ],
            open: false
            
        },
        {
            title: 'Cardiovascular',
            subtitle: [
                {
                    item: '',
                    phenotype: ''
                }
            ],
            open: false
            
        },
        {
            title: 'Respiratory',
            subtitle: [
                {
                    item: '',
                    phenotype: ''
                }
            ],
            open: false
            
        },
        {
            title: 'Chest',
            subtitle: [
                {
                    item: '',
                    phenotype: ''
                }
            ],
            open: false
            
        },
    ]

    eyesItem = [
        {id: 1, item: "Itraocular melaoma"},
        {id: 2, item: "Difficulty readig"},
        {id: 3, item: "Microsaccadic pursuit"},
        {id: 4, item: "Blepharospasm"},
        {id: 5, item: "Ptosis"},
        {id: 6, item: "Ptosis"},
        {id: 7, item: "Ptosis"},
        {id: 8, item: "Ptosis"},
        {id: 9, item: "Ptosis"},
        {id: 10, item: "Ptosis"},
        {id: 11, item: "Ptosis"},
        {id: 12, item: "Ptosis"},
    ]

    //the search input
    searchTerm: string;


    //checked phenotypes properties
    checkedPhenotypes: any[];
    
    constructor() { }

    ngOnInit() {
        //试试search input
        for(let eyeItem of this.eyesItem) {
            eyeItem['isShow'] = true;
        }
        this.checkedPhenotypes = [];
    }

    
    //phenotype menu functions
    openChange(clinicalSynopsis: any) {
        for(let clinicalItem of this.clinicalSynopses) {
            clinicalItem.open = false;
        }
        clinicalSynopsis.open = true;
    }
    
    selectCSItem(title, item) {
        console.log("title:" + title);
        console.log("item:" + item);
    }

    selectPhenotype($event) {
        $event.preventDefault();
    }

    
    //search input function
    searchPhenotype() {
        for(let eyeItem of this.eyesItem) {
            eyeItem["isShow"] = this.matchingSearchTerm(eyeItem);
        }
    }

    matchingSearchTerm(eyeItem): boolean {
        if(eyeItem["item"].includes(this.searchTerm)) {
            return true;
        } else {
            return false;
        }
    }

    //choose the phenotypes
    selectPhenotypeItem(phenotypeItem) {
        if(this.checkedPhenotypes.indexOf(phenotypeItem) == -1){
            this.checkedPhenotypes.push(phenotypeItem);
        }
    }


    //delte chosen phenotype
    deletePhenotypeItem(phenotypeItem) {
        if(this.checkedPhenotypes.indexOf(phenotypeItem) != -1) {
            this.checkedPhenotypes.splice(this.checkedPhenotypes.indexOf(phenotypeItem),1);
        }
    }
}
