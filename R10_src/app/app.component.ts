import { Component, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'R10';
  data:any;
  addData:{name:string,age:any}={name:'',age:null};
  url = 'http://localhost:3000/data'

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.http.get(this.url).subscribe({
      next:(response:any)=>{
        this.data = response;
      }
    })
  }

  addDataToServer(){
    this.http.put(this.url,this.addData).subscribe({
      next:(response2:any)=>{
        this.data = response2;
      }
    })
  }

}
