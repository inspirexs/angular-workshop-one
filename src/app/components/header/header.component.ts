import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/modules/shared/services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  message: string;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.getMessageReceiver().subscribe(data => {
      this.message = data;
    });
  }

}
