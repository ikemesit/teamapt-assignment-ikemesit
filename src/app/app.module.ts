import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SideNavLinkComponent } from './components/side-nav-link/side-nav-link.component';
import { DestinationCardComponent } from './components/destination-card/destination-card.component';
import { FiltersPanelComponent } from './components/filters-panel/filters-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SideNavLinkComponent,
    DestinationCardComponent,
    FiltersPanelComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
