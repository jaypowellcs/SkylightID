import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
    IdentifydeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
