import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import the UserComponent
import { UsersComponent } from './users/users.component';
import { ArticlesComponent } from './articles/articles.component';

import { UserViewComponent } from './user-view/user-view.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';


// Declare your routes
const routes: Routes = [
  // The default route
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  // Map /users to the UsersComponent
  { path: 'users', component: UsersComponent},
  { path: 'articles', component: ArticlesComponent},
  { path: 'users/view/:id', component: UserViewComponent},
  { path: 'users/create', component: UserCreateComponent},
  { path: 'users/edit/:id', component: UserEditComponent},
  { path: 'article/view/:id', component: ArticleViewComponent},
  { path: 'article/create', component: ArticleCreateComponent},
  { path: 'article/edit/:id', component: ArticleEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
