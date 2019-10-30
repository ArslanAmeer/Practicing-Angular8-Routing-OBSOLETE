import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

// Adding A Const as a Route with your components configured as routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // this is for Default Page or empty url
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }, // adding fetchable params in url
    ] },
  { path: 'servers', component: ServersComponent, children: [
      { path: ':id', component: ServerComponent }, // single id router to get server with id
      { path: ':id/edit', component: EditServerComponent }, // passing queryParameters through routerLink & programmatically
    ] },
  {path: 'not-found', component: PageNotFoundComponent}, // Not Found Component Added
  {path: '**', redirectTo: '/not-found'}  // ** to catch all invalid or undefined routes and redirect them to page not found component
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}