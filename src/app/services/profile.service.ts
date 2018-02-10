import { Injectable  } from '@angular/core';
import { Http        } from '@angular/http';
 
import 'rxjs/add/operator/map'; 


@Injectable()
export class ProfileService  {

  
// creat githup app in my github - setting - developsetting - creat app
  private username:string = '';
  private clientId = '6940f1674ed66fba57ca';
  private clientSecret = '6841e8ff11a1dd8e9dcfbff0e6361aeda37d6d86';
  private baseUrl = 'https://api.github.com/users/';



  constructor(  private http:Http) {
    // console.log("Http Service is the ready *** cheking . . .");
    // console.log(this.username);
   }
   
 // get github user information api funcation --> profile.component.ts -- > call it
   getProfileInfo(){
     return this.http.get(this.baseUrl + this.username + "?client_id="
      + this.clientId + "&client_secret=" + this.clientSecret).map(res => res.json());
   }

 // get repos api funcation --> profile.component.ts -- > call it
  getProfileRepos(){
    return this.http.get(this.baseUrl + this.username + "/repos?client_id="
    + this.clientId + "&client_secret=" + this.clientSecret ).map(res => res.json());
  }

  updateProfile(username:string){
    // console.log(username);
    this.username = username;
    
  }




}
