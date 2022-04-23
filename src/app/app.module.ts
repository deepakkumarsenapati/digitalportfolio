import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AboutComponent } from './features/about/about.component';
import { EducationComponent } from './features/education/education.component';
import { ExperiencesComponent } from './features/experiences/experiences.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { PublicationsComponent } from './features/publications/publications.component';
import { ConfAttendedComponent } from './features/conf-attended/conf-attended.component';
import { ReviewEditComponent } from './features/review-edit/review-edit.component';
import { MembershipComponent } from './features/membership/membership.component';
import { ContactComponent } from './features/contact/contact.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    AboutComponent,
    EducationComponent,
    ExperiencesComponent,
    ProjectsComponent,
    PublicationsComponent,
    ConfAttendedComponent,
    ReviewEditComponent,
    MembershipComponent,
    ContactComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
