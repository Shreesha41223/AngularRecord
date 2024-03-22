import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'R9';
  url='http://localhost:3000/data'
  data:any;

  constructor(private http:HttpClient){}
  
  ngOnInit(){
    this.http.get(this.url).subscribe({
      next:(response:any)=>{
        this.data = response[0];
      }
    })
  }
}
