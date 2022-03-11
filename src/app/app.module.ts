// Built-in Angular resoures
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

// My modules
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { ResourcesModule } from './resources';
import { HomeModule } from './home/home.module';
import { FunctionalityModule } from './functionality';
import { PostModule } from './post/post.module';

// My components and services
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent } from './page';
import { DatabaseService } from './database.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DatabaseService, {dataEncapsulation: false}),
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,

    AppRoutingModule,
    AuthModule,
    ResourcesModule,
    HomeModule,
    FunctionalityModule,
    PostModule
  ],
  providers: [
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
