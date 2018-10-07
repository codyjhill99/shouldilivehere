import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BuildingResultsTableComponent } from './building-results-table/building-results-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddresssearchComponent } from './addresssearch/addresssearch.component';
import { EntercomplaintComponent } from './entercomplaint/entercomplaint.component';

const appRoutes: Routes = [
  { path: 'BuildingResultsTableComponent', component: BuildingResultsTableComponent },
  { path: 'HomePageComponent', component: HomePageComponent },

  { path: 'AddresssearchComponent', component: AddresssearchComponent },

  { path: 'EntercomplaintComponent', component: EntercomplaintComponent},
  { path: '',   redirectTo: '/HomePageComponent', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    BuildingResultsTableComponent,
    NavbarComponent,
    HomePageComponent,
    AddresssearchComponent,
    EntercomplaintComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
