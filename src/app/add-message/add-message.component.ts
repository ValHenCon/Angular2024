import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrl: './add-message.component.css'
})
export class AddMessageComponent {
  
  constructor(public messageservice: MessagesService){

  }
  message: string = "";

  addMessage(){
    this.messageservice.add(this.message);
    this.message = "";
  }
}
