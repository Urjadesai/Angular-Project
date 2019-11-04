import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string =  'Hello World';
  name1: string = "Urja";

  setName(newName:any){
    this.name1 = newName;
  }
}
