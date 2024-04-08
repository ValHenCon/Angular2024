import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {

  textocolor:string = '';

  botondesabled:boolean = false;

  img: string = "https://media.istockphoto.com/id/1192386770/es/foto/chino-orando-mantis-tenodera-sinensis.jpg?b=1&s=612x612&w=0&k=20&c=w1jXz5GRzWVbGj0oCxQa-umhexVFNhyOylVR63lhNQ8="
}
