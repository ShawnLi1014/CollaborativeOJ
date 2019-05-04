import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';

import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { CollaborationService } from './services/collaboration.service';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CallbackComponent } from './components/callback/callback.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditorComponent } from './components/editor/editor.component';


@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavbarComponent,
    CallbackComponent,
    ProfileComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [{
    provide: 'data',
    useClass: DataService
  },
    {
      provide: 'auth',
      useClass: AuthService
    },
    {
      provide: 'authGuard',
      useClass: AuthGuardService
    },
    {
      provide: 'collaboration',
      useClass: CollaborationService
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
