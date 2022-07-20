import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public serviceName: string = 'STAR WARS';

  constructor() { }
}
