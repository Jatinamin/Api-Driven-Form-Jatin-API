import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  // url:string='https://5e8bb871be5500001689ec86.mockapi.io/api/v1/students';
   url:string='https://62cda781a43bf780085c7d63.mockapi.io/students';
  students:Array<any> = [];
   constructor(private _http:HttpClient) {
    }
    
  ngOnInit() {
    this.getData();
  }
  getData(){
    this._http.get(this.url).subscribe(
      (data:any)=>{
        this.students = data;
      });
  }
  sendStudentForm(data: any){
    this._http.post(this.url,data).
    subscribe((res: any)=>{
      console.log(res)
    })
    
  }
}