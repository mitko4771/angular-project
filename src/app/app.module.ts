import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MotivationLetterComponent } from './motivation-letter/motivation-letter.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRotes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'who-am-I',
    component: WhoAmIComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'motivation-letter',
    component: MotivationLetterComponent
  },
  {
    path: 'contact',
    component: ContactsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhoAmIComponent,
    SkillsComponent,
    MotivationLetterComponent,
    ContactsComponent,
    HomeComponent,
    MotivationLetterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,    
    RouterModule.forRoot(appRotes)
  ],
  providers: [
    { provide: 'Window',  useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);