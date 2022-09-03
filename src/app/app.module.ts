import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AngMusicPlayerModule } from  'ang-music-player';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiIntComponent } from './components/api-int/api-int.component';
import { GoogleComponent } from './components/google/google.component';
import { TelaComponent } from './components/tela/tela.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoedaComponent } from './components/moeda/moeda.component'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ApiIntComponent,
    GoogleComponent,
    TelaComponent,
    HeaderComponent,
    FooterComponent,
    MoedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngMusicPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
