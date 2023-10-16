import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { IdentifyComponent } from './Pages/identify/identify.component';
import { SkylightCalComponent } from './Pages/skylight-cal/skylight-cal.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { IdentifycurbComponent } from './Components/identifycurb/identifycurb.component';
import { IdentifyselfflashComponent } from './Components/identifyselfflash/identifyselfflash.component';
import { IdentifydeckComponent } from './Components/identifydeck/identifydeck.component';
import { CurbcalComponent } from './Components/curbcal/curbcal.component';
import { SelfcalComponent } from './Components/selfcal/selfcal.component';
import { DeckcalComponent } from './Components/deckcal/deckcal.component';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    IdentifyComponent,
    SkylightCalComponent,
    ContactComponent,
    IdentifycurbComponent,
    IdentifyselfflashComponent,
    IdentifydeckComponent,
    CurbcalComponent,
    SelfcalComponent,
    DeckcalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
