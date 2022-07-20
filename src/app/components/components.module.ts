import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent, //Aunque importe el ComponentsModule en otro módulo, los componentes que tenga declarados este no serán visibles si no los exporto explícitamente.
    ChildComponent //Como voy a utilizar este componente en otro Módulo, tengo que exportarlo. (Si solo lo fuera a utilizar dentro de este Módulo, no haría falta exportarlo).
  ]
})
export class ComponentsModule { }
