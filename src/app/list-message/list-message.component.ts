import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrl: './list-message.component.css'
})
export class ListMessageComponent {

  constructor(public messageservice: MessagesService){

  }
  /*message: string = "";

  addMessage(){
    this.messageservice.add(this.message);
    this.message = "";
  }*/
}
