import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InfoMensaje } from '../../interfaces/info-mensaje';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {
  @Input() nombre: string = "";
  @Output() datosEmitidos = new EventEmitter<InfoMensaje>();
  mensaje: string = "";

  emitirDatos() {
    this.datosEmitidos.emit({
      nombre: this.nombre,
      mensaje: this.mensaje
    });
  }
}
