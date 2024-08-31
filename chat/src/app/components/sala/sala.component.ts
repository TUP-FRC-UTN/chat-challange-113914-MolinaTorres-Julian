import { Component, EventEmitter, Output } from '@angular/core';
import { MensajeUsuarioComponent } from "../mensaje-usuario/mensaje-usuario.component";
import { InfoMensaje } from '../../interfaces/info-mensaje';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuarioComponent, CommonModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  infoMensaje: InfoMensaje[] = [];
  nombre: string = "";

  recibirDatos(datos: InfoMensaje) {
    this.infoMensaje.push(datos);
  }
}
