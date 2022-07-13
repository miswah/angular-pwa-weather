import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { SecondaryPageComponent } from './secondary-page/secondary-page.component';
import { MiniHeroSectionComponent } from './mini-hero-section/mini-hero-section.component';
import { WeeklySectionComponent } from './weekly-section/weekly-section.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeroSectionComponent,
    MainSectionComponent,
    SecondaryPageComponent,
    MiniHeroSectionComponent,
    WeeklySectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
