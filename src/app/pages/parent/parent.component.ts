import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public parentName: string = 'A LONG TIME AGO IN A GALAXY FAR, FAR AWAY...';
  public usingDecorators: string = 'Change Child\'s Attribute Value Using Decorator @Input';
  public usingServices: string = 'Change Values where Service injected';
  public childButtonText: string = 'Change Parent\'s Attribute Value Using Decorator @Output & EventEmitter';
  public childButtonTextService: string = 'Change Values where Service injected';

  constructor(private _dataService: DataService){}
  
  public changeParentName(): void {
    this.parentName = 'YO SOY TU PADRE...';
  }

  public changeParentNameByService(): void {
    this.parentName = '"YO SOY TU PADRE..."';
    this._dataService.serviceName = this.parentName;
  }

  public receiveChildEvent(event:string): void {
    this.parentName = event;
  }

  public receiveChildEventByService(event:string): void {
    this.parentName = event; 
    this._dataService.serviceName = event;
  }

}
