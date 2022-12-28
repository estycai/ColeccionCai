import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataDashboardComponent } from './components/data-dashboard/data-dashboard.component';
import { ListComponent } from './components/list/list.component';
import { CamisetaInfoComponent } from './components/list/camiseta-info/camiseta-info.component';
import { CamisetaService } from './services/camiseta.service';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { AddEditCamisetaComponent } from './components/add-edit-camiseta/add-edit-camiseta.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AddCamisetaComponent } from './components/add-camiseta/add-camiseta.component';
import { HomeComponent } from './components/home/home.component';

import {MatSelectModule} from '@angular/material/select';
import { LinksListComponent } from './components/links-list/links-list.component';
import { FontAwesomeModule  } from '@fortawesome/angular-fontawesome';
import { LinksServiceService } from './services/links-service.service';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    DataDashboardComponent,
    ListComponent,
    CamisetaInfoComponent,
    AddEditCamisetaComponent,
    AddCamisetaComponent,
    HomeComponent,
    LinksListComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AppRoutingModule,
    FontAwesomeModule,
    
    FormsModule
  ],
  providers: [CamisetaService, LinksServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
