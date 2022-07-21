import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()  //ESPERA UN VALOR DEL PADRE UNA VEZ HAGA EL BINDING <app-child [childName]="parentName">
  public childName!: string;

  @Output() //EMITE del componente HIJO un mensaje al PADRE 
  public emitChildName: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public buttonText!: string;

  public changeChildName(){
    this.childName = '"NOOOOOOOOO..."';
    this.emitChildName.emit(this.childName); //EMITE UN EVENTO QUE TENDRÁ QUE CAPTURAR EL PADRE
    //APARECERÁ DISPONIBLE EN EL TEMPLATE UN NUEVO EVENTO (emitChildName)
    //EL PADRE CAPTURA EL EVENTO EMITIDO POR EL HIJO CON EL PARAMETRO $event
    //ESTA FUNCIÓN EMIT NO ES DE UTILIDAD EN EL CASO DE USAR SERVICIOS
  }

}
