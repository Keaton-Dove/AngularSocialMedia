import { PostModule } from './post/post.module';
// Built-in Angular resoures
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// My modules
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { ResourcesModule } from './resources';
import { HomeModule } from './home/home.module';
import { FunctionalityModule } from './functionality';

// My components
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent } from './page';
import { DatabaseService } from './database.service';

// HttpClientInMemoryWebApiModule.forRoot(
//   DatabaseService, { dataEncapsulation: false }
// )

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AuthModule,
    ResourcesModule,
    FunctionalityModule,
    HomeModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DatabaseService),
    PostModule
  ],
  providers: [
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
