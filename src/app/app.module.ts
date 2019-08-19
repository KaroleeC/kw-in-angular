import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import  {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';

//components
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RequestFormComponent } from './components/request/request-form.component';

// containers
import { AppComponent } from './containers/app/app.component';
import { FireMagicComponent } from './components/fire-magic/fire-magic.component';
import { FlameBroilComponent } from './components/flame-broil/flame-broil.component';
import { MoreProductsComponent } from './components/more-products/more-products.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'request', component: RequestFormComponent },
  { path: 'about', component: AboutComponent },
  { path: 'fire-magic', component: FireMagicComponent },
  { path: 'flame-broil', component: FlameBroilComponent },
  { path: 'more-products', component: MoreProductsComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  declarations: [
    AboutComponent,
    AppComponent,
    AppNavComponent,
    HomeComponent,
    RequestFormComponent,
    FireMagicComponent,
    FlameBroilComponent,
    MoreProductsComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

  