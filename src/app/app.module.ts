import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudEmpleadosComponent } from './crud-empleados/crud-empleados.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'empleados', component:CrudEmpleadosComponent},
  {path:'juego', component:GameComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CrudEmpleadosComponent,
    GameComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
