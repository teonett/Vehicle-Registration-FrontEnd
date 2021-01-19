import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TruckAddComponent } from './pages/truck-add/truck-add.component';
import { TruckDtlComponent } from './pages/truck-dtl/truck-dtl.component';
import { TruckListComponent } from './pages/truck-list/truck-list.component';
import { TruckmodelAddComponent } from './pages/truckmodel-add/truckmodel-add.component';
import { TruckmodelDtlComponent } from './pages/truckmodel-dtl/truckmodel-dtl.component';
import { TruckmodelListComponent } from './pages/truckmodel-list/truckmodel-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'trucklist', component: TruckListComponent },
    { path: 'trucknew', component: TruckAddComponent },
    { path: 'truckdtl/:id', component: TruckDtlComponent },
    { path: 'truckmodellist', component: TruckmodelListComponent},
    { path: 'truckmodelnew', component: TruckmodelAddComponent},
    { path: 'truckmodeldtl/:id', component: TruckmodelDtlComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
