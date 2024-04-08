import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrl: './formulario2.component.css'
})
export class Formulario2Component {

  persona = {
    nombre: '',
    email: '',
    edad: ''
  }

  
  procesar(){
    console.log(this.persona);
  }
}
