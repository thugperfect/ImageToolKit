import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './module/material/material.module';
import { AnimateDirective } from './directive/animate.directive';
import { BodyComponent } from './body/body.component';
import { ConverterBoxComponent } from './body/converter-box/converter-box.component';
import { ConverterComponent } from './converters/converter/converter.component';
import { CompresserComponent } from './converters/compresser/compresser.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { ImagesComponent } from './images/images.component';
import { GrayscaleComponent } from './converters/grayscale/grayscale.component';
import { ResizeComponent } from './converters/resize/resize.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnimateDirective,
    BodyComponent,
    ConverterBoxComponent,
    ConverterComponent,
    CompresserComponent,
    ImagesComponent,
    GrayscaleComponent,
    ResizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
