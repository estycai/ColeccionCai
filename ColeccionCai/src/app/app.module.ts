import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataDashboardComponent } from './components/data-dashboard/data-dashboard.component';
import { ListComponent } from './components/list/list.component';
import { CamisetaInfoComponent } from './components/list/camiseta-info/camiseta-info.component';

@NgModule({
  declarations: [
    AppComponent,
    DataDashboardComponent,
    ListComponent,
    CamisetaInfoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
