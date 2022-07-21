import { Injectable } from '@angular/core';

// 1 .- El servicio se puede inyectar aquí, especificando donde, o... (ir a app.module, linea 20)
// @Injectable({
//   providedIn: 'root'
// })
export class DataService {

  public serviceName: string = 'STAR WARS';

}
