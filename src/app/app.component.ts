import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { environment } from './../environments/environment';

declare const document
declare var PD_prevote9839041
declare var PDV_go9839041
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the voting app';


  base_url = environment.pollhost
  redirect = ""

  poll_id = 9839041
  answer_id = 45033111
  votes = 0;
  errors = 0;
  totalE = 0;
  totalV = 0;
  startTime = new Date()

  lastT = new Date()

  constructor(private http: Http){
    let me = this;
    //setInterval(()=>{
      me.vote()
    //},2000)

    // me.vote().then(()=>{
    //   console.log()
    // })
  }


 vote() {
   let me = this;
   setTimeout(() => {
     try {
       var pick = document.getElementById('PDI_answer' + me.answer_id)
       if(pick ){
         pick.click()
         setTimeout(() => {
           PD_prevote9839041({
             pageX: true,
             pageY: true
           })
           setTimeout(() => {
             PDV_go9839041();
             me.votes++;
             setTimeout(()=>{
               me.vote()
             },500)
             
           }, 1000)
         }, 500)
       }
       else{
         me.vote()
       }
       
     } catch (error) {
       me.vote()
     }
     
   }, 500)

  }


}
