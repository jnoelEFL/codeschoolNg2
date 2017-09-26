import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { RaceService } from './races/race.service';
import { RaceComponent } from './race/race.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'races', pathMatch: 'full'},
  { path: 'races', component: RacesComponent },
  { path: 'race/:id', component: RaceDetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    RaceComponent,
    RaceDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ RaceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
