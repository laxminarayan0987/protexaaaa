import { Routes } from '@angular/router';
import { AboutUsComponent } from './assets/pages/about-us/about-us.component';
import { ContactComponent } from './assets/pages/contact/contact.component'
import { LandingPageComponent } from './assets/pages/landing-page/landing-page.component'
import { TrainingInternshipComponent } from './assets/pages/training-internship/training-internship.component'
import { HomeComponent } from './assets/pages/home/home.component'

export const routes: Routes = [
  { path: 'home', component: HomeComponent },  // Default route
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'training-internship', component: TrainingInternshipComponent },
  { path: '**', redirectTo: 'home' }  // Wildcard route for a 404 page
];
