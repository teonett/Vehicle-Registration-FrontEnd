import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TruckListComponent } from './pages/truck-list/truck-list.component';
import { TruckAddComponent } from './pages/truck-add/truck-add.component';
import { HomeComponent } from './pages/home/home.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { TruckmodelListComponent } from './pages/truckmodel-list/truckmodel-list.component';
import { TruckmodelAddComponent } from './pages/truckmodel-add/truckmodel-add.component';
import { TruckmodelDtlComponent } from './pages/truckmodel-dtl/truckmodel-dtl.component';
import { TruckDtlComponent } from './pages/truck-dtl/truck-dtl.component';

@NgModule({
  declarations: [
    AppComponent,
    TruckListComponent,
    TruckAddComponent,
    HomeComponent,
    TabsComponent,
    ButtonComponent,
    CardComponent,
    TruckmodelListComponent,
    TruckmodelAddComponent,
    TruckmodelDtlComponent,
    TruckDtlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
