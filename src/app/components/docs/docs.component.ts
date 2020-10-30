import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { NgModel } from '@angular/forms';
import { Traveller } from 'src/app/models/traveller';
import { MercuryClientService } from 'src/app/services/mercury-client.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  traveller: Traveller;

  constructor(private mercuryClientService: MercuryClientService) { }

  ngOnInit(): void {
    console.log('component loaded');
  }

  test(): void{
    this.mercuryClientService.test();
  }

  getTraveller(): void{

    this.mercuryClientService.getTraveller().subscribe(data => {
      console.log(data);
      this.traveller = data;
    }, error => {
      console.log(error);
    });

  }

}
