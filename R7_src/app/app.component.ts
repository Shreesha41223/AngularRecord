import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'R7';
  number$:Observable<any>=of(1,2,3);

  ngOnInit(){
    this.number$.subscribe( (number: any) =>{
      console.log(number);
    })
  }
}
