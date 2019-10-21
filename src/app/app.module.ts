import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Importing Routes & Router Module from AngularCore
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

// Adding A Const as a Route with your components configured as routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // this is for Default Page or empty url
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent }, // adding fetchable params in url
  { path: 'servers', component: ServersComponent },
  { path: 'servers/:id/edit', component: EditServerComponent }, // passing queryParameters through routerLink & programmatically
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
  ],
  // RouterModule.forRoot is set with our constant appRoutes to load our custom routes
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [ServersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
