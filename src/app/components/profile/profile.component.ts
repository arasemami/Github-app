import { Component, OnInit  } from '@angular/core';
import { ProfileService     } from '../../services/profile.service';




@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
 profile: any[];
 repos: any[];
 username : string ;
 loading : boolean = false;

  key: string = 'name'; //set default
  reverse: boolean = false;
  
  // function sorting with sorting key
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
 // var page number default start from 1 page
  p: number = 1;
  tPage : number = 0; // Get Total page
  iPage : number = 8;// Get Iteam for page


 

  constructor( private profileService : ProfileService) {   }
  
  findProfile(){
    
    this.loading = true;
    this.profileService.updateProfile(this.username);

    this.profileService.getProfileInfo().subscribe(profile => {
      // console.log(profile);
      this.profile = profile;
      this.loading = false;
    }); 

    this.profileService.getProfileRepos().subscribe(repos => {
      this.repos = repos;
      this.tPage = repos.length; // get Totla Repos 
      // console.log(repos);
      this.loading = false;
    })

   // console.log(this.p);
  
  }

  ngOnInit() {           }

}
