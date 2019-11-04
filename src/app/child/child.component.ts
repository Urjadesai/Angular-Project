import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

import {DataServiceService} from '../data-service.service'


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 
  email = 'xyz@gmail.com';
  address={
    street:'21 yamen st',
    city:'yamen',
    state:'yamen' 
  }
   hobbies: string[];
   showHobbies: boolean;
   names:Array<string>;
  constructor(private _dataservice : DataServiceService) { 

    
    this.hobbies = ['sports', 'cooking', 'Travelling'];
    this.showHobbies = false;
  }
  

 




  @Input() name: string;

  @Output() onNameChanged = new EventEmitter();
  ChangeName (newName : any){
    this.onNameChanged.emit(newName);
  }


  toggleHobbies()
  {
    if(this.showHobbies == true)
    {
      this.showHobbies = false;
    }
    else{
      this.showHobbies = true;
    }

  }
  ngOnInit() {
    
   this._dataservice.names.pop();
   this.names = this._dataservice.names;
  }
  

}
