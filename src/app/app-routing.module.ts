import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import the UserComponent
import { UsersComponent } from './users/users.component';

import { UserViewComponent } from './user-view/user-view.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ArticlesComponent } from './articles/articles.component';

// Declare your routes
const routes: Routes = [
  // The default route
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  // Map /users to the UsersComponent
  { path: 'users', component: UsersComponent},
  { path: 'users/view/:id', component: UserViewComponent},
  { path: 'users/create', component: UserCreateComponent},
  { path: 'users/edit/:id', component: UserEditComponent},
  { path: 'articles', component: ArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
