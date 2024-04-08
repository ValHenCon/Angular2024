import { Component, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrl: './children.component.css'
})
export class ChildrenComponent {

  @Input() title?: string; 

  @Output() titlechange= new EventEmitter<string>();

  emitTitleChange(){
    this.titlechange.emit(this.title);
  }
}
