import { Component, OnInit } from '@angular/core';

import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})

export class ContadorComponent{
  
  persona:Persona = {
    nombre: 'Cesar Valentin',
    edad: 21
  };
  
  numero: number = 1;
  
  decrement(){
    this.numero--;
  }

  increment(){
    this.numero++;
  }
}
