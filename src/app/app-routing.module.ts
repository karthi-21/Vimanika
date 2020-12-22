import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LifeStyleComponent } from './life-style/life-style.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceComponent } from './service/service.component';
import { TrainingComponent } from './training/training.component';
import { CoeMouComponent } from './coe-mou/coe-mou.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'life-style', component: LifeStyleComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'coe-mou', component: CoeMouComponent },
  { path: 'course', component: CourseComponent },
  { path: 'career', component: CareerComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
