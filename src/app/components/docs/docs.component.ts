import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { Traveller } from 'src/app/models/traveller';
import { MercuryClientService } from 'src/app/services/mercury-client.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  traveller: Traveller;
  documentForm: FormGroup;

  constructor(private mercuryClientService: MercuryClientService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.documentForm = this.fb.group({
      documentType: ['', [Validators.required, Validators.pattern('(PASSPORT|ID_CARD)')]],
      documentNumber: ['', Validators.required],
      documentCountry: ['', Validators.required]
    });
  }

  test(): void{
    this.mercuryClientService.test();
  }

  getDefaultTraveller(): void{

    this.mercuryClientService.getTraveller().subscribe(data => {
      console.log(data);
      this.traveller = data;
    }, error => {
      console.log(error);
    });

  }

  clearTraveller(): void{

  }

  submitForm(): void{
    if(this.documentForm.valid){
      console.log('SUBMIT FORM Valid');
    }
    else{
      console.log('SUBMIT FORM Invalid');
    }

  }

}
