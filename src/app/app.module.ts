import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { RegistrationComponent } from './registration/registration.component';
import {MatButtonModule, MatCheckboxModule,
        MatToolbarModule,MatIconModule,
        MatInputModule,MatSidenavModule,
        MatSelectModule, MatRadioModule,
        MatTableModule,MatCardModule,} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegistrationComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,HttpClientModule,
    FormsModule,ReactiveFormsModule,
    MatButtonModule,MatCheckboxModule,
    MatToolbarModule,MatIconModule,
    MatInputModule,MatSidenavModule,
    MatSelectModule, MatRadioModule,
    MatTableModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
