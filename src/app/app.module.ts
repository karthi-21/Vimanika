import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareerComponent } from './career/career.component';
import { ServiceComponent } from './service/service.component';
import { TrainingComponent } from './training/training.component';
import { CourseComponent } from './course/course.component';
import { LifeStyleComponent } from './life-style/life-style.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoeMouComponent } from './coe-mou/coe-mou.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    CareerComponent,
    ServiceComponent,
    TrainingComponent,
    CourseComponent,
    LifeStyleComponent,
    PageNotFoundComponent,
    CoeMouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
