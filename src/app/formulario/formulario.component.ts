import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})



export class FormularioComponent {

  openAlert: boolean = false;

  mostrarenconsola(name:string){
      console.log(name);

      this.openAlert=true;
  }
}

