import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildRecieverComponent } from './child-reciever/child-reciever.component';
import { ChildSenderComponent } from './child-sender/child-sender.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ChildRecieverComponent,ChildSenderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'R2';
  parentValue:{name:string,age:any}={name:'ABCD', age:20};

  valueFromChild?:{name:string,age:any};
}
