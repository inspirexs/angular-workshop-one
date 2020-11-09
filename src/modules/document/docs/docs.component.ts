import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { MercuryClientService } from 'src/modules/shared/services/mercury-client.service';
import { Document } from 'src/modules/shared/models/document';
import { DocsResultComponent } from './docs-result/docs-result.component';
import { ViewChild } from '@angular/core';
import { MessageService } from 'src/modules/shared/services/message.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  @ViewChild(DocsResultComponent) private docsResult: DocsResultComponent;

  documentForm: FormGroup;

  constructor(private mercuryClientService: MercuryClientService,
              private fb: FormBuilder,
              private messageService: MessageService) { }

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

    this.mercuryClientService.getTraveller('PASSPORT', 'G85471', 'AUT').subscribe(data => {
      console.log(data);
      this.docsResult.setTraveller(data);
      this.messageService.sendMessage(data.emailAddress);
    }, error => {
      console.log(error);
    });

  }

  clearTraveller(): void{
    this.docsResult.setTraveller(null);
  }

  submitForm(): void{
    if(this.documentForm.valid){
      const document: Document = Object.assign({}, this.documentForm.value);

      this.mercuryClientService.getTraveller(document.documentType, document.documentNumber, document.documentCountry)
      .subscribe(data => {
        console.log(data);
        this.docsResult.setTraveller(data);
      }, error => {
        console.log(error);
        alert('Ups Error!');
      });
      console.log('SUBMIT FORM Valid');
    }
    else{
      console.log('SUBMIT FORM Invalid');
    }

  }

}
