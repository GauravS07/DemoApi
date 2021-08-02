import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoApi';

  list:any;
  constructor(private http: HttpClient){

  }

  ngOnInit(){
    
    this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&sort_by=popularity.desc').subscribe( (data:any)=>{
      console.log(data)
      this.list = data.results;
    })
  }
}

