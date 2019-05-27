import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';


import { LoginComponent } from './login/login/login.component';
import { AlunoComponent } from './aluno/aluno.component';
import { ProfessorComponent } from './professor/professor.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Route } from '@angular/router';
import { RootComponent } from './root/root.component';



const appRouters: Route[] = [
  {path: 'login', component: LoginComponent },
  {path: 'aluno', component: AlunoComponent },
  {path: 'professor', component: ProfessorComponent },
  {path: '**', component: NotFoundComponent }
]


@NgModule({
  declarations: [
    LoginComponent,
    AlunoComponent,
    ProfessorComponent,
    NotFoundComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouters)
  ],
  providers:[
    RouterModule,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
 // bootstrap: [RootComponent]
  bootstrap: [AlunoComponent]
})
export class AppModule { }
