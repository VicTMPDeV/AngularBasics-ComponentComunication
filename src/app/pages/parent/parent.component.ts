import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public name: string = 'Parent\'s Attribute';
  public buttonText: string = 'Change Attribute Value'

  public changeName(): void {
    this.name = 'NEW Parent\'s Attribute';
  }

}
