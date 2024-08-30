import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {
  @Input() nombre: string = "";
  @Output() mensajeEmitido = new EventEmitter<string>();
  mensaje: string = "";

  emitirMensaje() {
    this.mensajeEmitido.emit(this.mensaje);
    this.mensaje = "";
  }
}
