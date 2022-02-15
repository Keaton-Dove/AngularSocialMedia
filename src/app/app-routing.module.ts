import { SettingsComponent } from './settings/settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'home',     component: HomeComponent },
  { path: 'about',    component: AboutComponent },
  { path: 'user',     component: UserComponent },
  { path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }