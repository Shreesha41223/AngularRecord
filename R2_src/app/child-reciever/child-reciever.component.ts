import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child-reciever',
  standalone: true,
  imports: [],
  templateUrl: './child-reciever.component.html',
  styleUrl: './child-reciever.component.css'
})
export class ChildRecieverComponent {
  @Input() valueFromParent:{name:string,age:any}={name:'',age:null};
}
