import { BrowserModule       } from '@angular/platform-browser';
import { NgModule            } from '@angular/core';
import { HttpModule          } from '@angular/http'; 
import { DataTablesModule    } from 'angular-datatables';

import { AppComponent        } from './app.component';

import { Ng2OrderModule      } from 'ng2-order-pipe'; 
import { NgxPaginationModule } from 'ngx-pagination'; 

import { ProfileComponent    } from './components/profile/profile.component';
import { ProfileService      } from './services/profile.service';
import { FormsModule         } from '@angular/forms';

 

@NgModule({

  declarations: [
    AppComponent,
    ProfileComponent, 

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    DataTablesModule, 
    Ng2OrderModule, 
    NgxPaginationModule

  ],
 
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
