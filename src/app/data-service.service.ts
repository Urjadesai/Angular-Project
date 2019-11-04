import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  names: Array<string> = ['June', 'August', 'April', 'Paris'];
  constructor() { }
}
