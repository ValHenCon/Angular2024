import { Component } from '@angular/core';
import { Persona } from '../persona';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent {
  
  personas:Persona[] = [
    { nombre: 'juan', edad: 21},
    { nombre: 'ana', edad: 31},
    { nombre: 'axel', edad: 28},
    { nombre: 'sapo', edad: 91}
  ];

}
