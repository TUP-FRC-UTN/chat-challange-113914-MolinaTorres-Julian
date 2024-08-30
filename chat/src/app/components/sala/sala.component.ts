import { Component, EventEmitter, Output } from '@angular/core';
import { MensajeUsuarioComponent } from "../mensaje-usuario/mensaje-usuario.component";

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuarioComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  mensajes: string[] = [];
  nombre: string = "";

  recibirMensaje(mensaje: string) {
    this.mensajes.push(mensaje);
  }

}
