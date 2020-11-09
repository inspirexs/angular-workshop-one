import { Component, OnInit } from '@angular/core';
import { Traveller } from 'src/modules/shared/models/traveller';
import { MercuryClientService } from 'src/modules/shared/services/mercury-client.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  traveller: Traveller;

  constructor(private mercuryClientService: MercuryClientService) { }

  ngOnInit(): void {

    this.mercuryClientService.getTraveller('PASSPORT', 'G85471', 'AUT').subscribe(data => {
      console.log(data);

      this.traveller = data;
    }, error => {
      console.log(error);
    });

  }

}
