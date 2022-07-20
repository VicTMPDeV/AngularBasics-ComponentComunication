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
    NavbarComponent,
    ChildComponent //Aunque importe el ComponentsModule en otro módulo, los componentes que tenga declarados este no serán visibles si no los exporto explícitamente
  ]
})
export class ComponentsModule { }
