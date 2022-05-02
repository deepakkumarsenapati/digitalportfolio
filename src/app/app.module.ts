import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './features/about/about.component';
import { EducationComponent } from './features/education/education.component';
import { ExperiencesComponent } from './features/experiences/experiences.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { PublicationsComponent } from './features/publications/publications.component';
import { ConfAttendedComponent } from './features/conf-attended/conf-attended.component';
import { ReviewEditComponent } from './features/review-edit/review-edit.component';
import { MembershipComponent } from './features/membership/membership.component';
import { ContactComponent } from './features/contact/contact.component';
import { LayoutComponent } from './layout/layout.component';
import { MenusComponent } from './menus/menus.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    ExperiencesComponent,
    ProjectsComponent,
    PublicationsComponent,
    ConfAttendedComponent,
    ReviewEditComponent,
    MembershipComponent,
    ContactComponent,
    LayoutComponent,
    MenusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
