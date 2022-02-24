import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { ResourcesModule } from '../resources';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ResourcesModule
  ]
})
export class HomeModule { }
