import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule  } from './material';
import { CKEditorModule } from 'ngx-ckeditor'; // Content editor
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { LoggedinGuard } from './gurds/loggedin/loggedin.guard';

// Components
import { AuthComponent } from './components/auth/auth.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { TicketListsComponent } from './components/ticket-lists/ticket-lists.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TicketMessagesComponent } from './components/ticket-messages/ticket-messages.component';
import { FaqListComponent } from './components/faq-list/faq-list.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { InternetListComponent } from './components/internet-list/internet-list.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { BugsComponent } from './components/bugs/bugs.component';
import { ChatUserComponent } from './components/chat-user/chat-user.component';
import { ChatToComponent } from './components/chat-to/chat-to.component';

// Includes
import { HeaderComponent } from './includes/header/header.component';

// Dialogs
import { TicketAddComponent } from './dialogs/ticket-add/ticket-add.component';
import { MessageAddComponent } from './dialogs/message-add/message-add.component';
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import { FaqFormComponent } from './dialogs/faq-form/faq-form.component';
import { ProjectFormComponent } from './dialogs/project-form/project-form.component';
import { InternetFormComponent } from './dialogs/internet-form/internet-form.component';
import { UserFormComponent } from './dialogs/user-form/user-form.component';
import { BugFormComponent } from './dialogs/bug-form/bug-form.component';
import { BugInfoComponent } from './dialogs/bug-info/bug-info.component';
import { VerifyPhoneComponent } from './dialogs/verify-phone/verify-phone.component';
import { CallComponent } from './components/call/call.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketListsComponent,
    HeaderComponent,
    AuthComponent,
    ProfileComponent,
    TicketAddComponent,
    TicketMessagesComponent,
    MessageAddComponent,
    ConfirmComponent,
    FaqListComponent,
    FaqFormComponent,
    ProjectListComponent,
    ProjectFormComponent,
    InternetListComponent,
    InternetFormComponent,
    PostListComponent,
    PostFormComponent,
    UserListComponent,
    UserFormComponent,
    ForgetPasswordComponent,
    BugsComponent,
    BugFormComponent,
    BugInfoComponent,
    ChatUserComponent,
    ChatToComponent,
    VerifyPhoneComponent,
    CallComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    CKEditorModule,
    RecaptchaV3Module,
    RouterModule.forRoot([
      { path: 'account/login', component: AuthComponent },
      { path: 'account/register', component: AuthComponent },
      { path: 'account/forget', component: ForgetPasswordComponent },
      { path: 'account/profile', component: ProfileComponent, canActivate: [LoggedinGuard] },
      { path: 'tickets', component: TicketListsComponent, canActivate: [LoggedinGuard] },
      { path: 'tickets/:id', component: TicketMessagesComponent, canActivate: [LoggedinGuard] },
      { path: 'faq', component: FaqListComponent, canActivate: [LoggedinGuard] },
      { path: 'project', component: ProjectListComponent, canActivate: [LoggedinGuard] },
      { path: 'internet', component: InternetListComponent, canActivate: [LoggedinGuard] },
      { path: 'post', component: PostListComponent, canActivate: [LoggedinGuard] },
      { path: 'post/new', component: PostFormComponent, canActivate: [LoggedinGuard] },
      { path: 'post/:id', component: PostFormComponent, canActivate: [LoggedinGuard] },
      { path: 'user', component: UserListComponent, canActivate: [LoggedinGuard] },
      { path: 'bugs', component: BugsComponent, canActivate: [LoggedinGuard] },
      { path: 'chat', component: ChatUserComponent, canActivate: [LoggedinGuard] },
      { path: 'chat/:id', component: ChatToComponent, canActivate: [LoggedinGuard] },
      { path: 'call', component: CallComponent, canActivate: [LoggedinGuard] },
      { path: '**', redirectTo: '/account/login' }
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6Lc0V8oUAAAAAFy10s-Ubp106Fp40tijOxZnViug' },
  ],
  entryComponents: [TicketAddComponent, MessageAddComponent, FaqFormComponent, ProjectFormComponent, InternetFormComponent, UserFormComponent, BugFormComponent, BugInfoComponent, VerifyPhoneComponent, ConfirmComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
