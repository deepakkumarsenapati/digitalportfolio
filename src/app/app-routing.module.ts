import { ContactComponent } from './features/contact/contact.component';
import { MembershipComponent } from './features/membership/membership.component';
import { ReviewEditComponent } from './features/review-edit/review-edit.component';
import { ConfAttendedComponent } from './features/conf-attended/conf-attended.component';
import { PublicationsComponent } from './features/publications/publications.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ExperiencesComponent } from './features/experiences/experiences.component';
import { EducationComponent } from './features/education/education.component';

import { AboutComponent } from './features/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: 'experience',
    component: ExperiencesComponent,
  },
  {
    path: 'project',
    component: ProjectsComponent,
  },
  {
    path: 'publications',
    component: PublicationsComponent,
  },
  {
    path: 'conferences',
    component: ConfAttendedComponent,
  },
  {
    path: 'reviewedit',
    component: ReviewEditComponent,
  },
  {
    path: 'membership',
    component: MembershipComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  { path: '**', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
