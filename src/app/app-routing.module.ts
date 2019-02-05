import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import the UserComponent
import { UsersComponent } from './users/users.component';

import { UserViewCompnent } from './user-view/user-view.component';

// Declare your routes
const routes: Routes = [
  // The default route
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  // Map /users to the UsersComponent
  { path: 'users', component: UsersComponent},
  { path: 'users/view/:id', component: UserViewCompnent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
