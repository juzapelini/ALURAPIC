import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { ErrorsComponent } from './errors/errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeModule } from './home/home.module';
import { VmessageComponent } from './shared/components/vmessage/vmessage.component';
import { HeaderComponent } from './core/header/header.component';
import { CoreModule } from './core/core.module';
//import { CardComponent } from './shared/components/card/card.component';
//import { CardModule } from './shared/components/card/card.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule,
    HomeModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
