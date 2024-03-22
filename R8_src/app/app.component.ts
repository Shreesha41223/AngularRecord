import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'R8';
  serviceUrl='https://randomuser.me/api/'
  userData:any;

  constructor(private http:HttpClient){}

  fetchData(){
    this.http.get(this.serviceUrl).subscribe({
      next:(response:any)=>{
        this.userData = response.results[0];
        console.log(this.userData);
      }
    })
  }
}
provideHttpClient(withFetch());


