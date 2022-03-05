import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '',     component: HomeComponent },
  { path: 'about',    component: AboutComponent },
  { path: 'settings', component: SettingsComponent},
  { path: 'post', component: PostComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }