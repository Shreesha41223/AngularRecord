import { Component,Output,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-child-sender',
  standalone: true,
  imports: [],
  templateUrl: './child-sender.component.html',
  styleUrl: './child-sender.component.css'
})
export class ChildSenderComponent implements OnInit{
  childValue:{name:string,age:any}={name:'WXYZ',age:18};
  @Output() Event = new EventEmitter();
  
  ngOnInit(){
    this.Event.emit(this.childValue);
  }

}
