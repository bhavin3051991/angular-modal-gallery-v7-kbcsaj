import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PlainGalleryComponent } from './plain-gallery/plain-gallery.component';
import { ModalGalleryComponent } from './modal-gallery/modal-gallery.component';
import { CarouselIe11Component } from './carousel-ie11/carousel-ie11.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { IntroHeaderComponent } from './intro-header/intro-header.component';

// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
import { GalleryModule } from '@ks89/angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// **************************************************************************

// ************************ optional font-awesome 5 ************************
// to install use both `npm i --save @fortawesome/fontawesome-svg-core` and `npm i --save @fortawesome/free-solid-svg-icons`
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt, faPlus, faTimes, faDownload } from '@fortawesome/free-solid-svg-icons';
library.add(faExternalLinkAlt, faPlus, faTimes, faDownload);
//dom.watch(); // Kicks off the process of finding <i> tags and replacing with <svg>
// *************************************************************************

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GalleryModule.forRoot() // <-------------------------------------------- angular-modal-gallery module import
  ],
  declarations: [AppComponent, CarouselComponent, CarouselIe11Component, PlainGalleryComponent, ModalGalleryComponent,
  NavbarComponent,
  HomeComponent,
  IntroHeaderComponent],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
