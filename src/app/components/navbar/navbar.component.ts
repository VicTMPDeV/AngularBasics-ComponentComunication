import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public navBarTitle: string = 'NavBarComponent Title Attribute';

  constructor(public _dataService: DataService) { } //public porque lo quiero utilizar directamente en el template

  // ESTE METODO SOLO SERIA NECESARIO SI FUERA PRIVADO EL SERVICIO
  // public setNavBarTitle(): string {
  //   return this.navBarTitle = this._dataService.serviceName;
  // }

}
