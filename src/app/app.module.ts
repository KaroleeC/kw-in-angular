import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';

//components
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { HomeComponent } from './components/home/home.component';

// containers
import { AppComponent } from './containers/app/app.component';
import { RequestFormComponent } from './components/request/request-form.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'request', component: RequestFormComponent }
  // { path: 'about', component: AboutComponent },
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatSelectModule
  ],
  declarations: [
    AppComponent,
    AppNavComponent,
    HomeComponent,
    RequestFormComponent

  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

  