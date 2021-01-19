import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Truck } from 'src/app/models/truck';
import { TruckModel } from 'src/app/models/truck-model';
import { TruckService } from 'src/app/services/truck.service';
import { TruckmodelService } from 'src/app/services/truckmodel.service';

@Component({
  selector: 'app-truck-add',
  templateUrl: './truck-add.component.html',
  styleUrls: ['./truck-add.component.css']
})

export class TruckAddComponent implements OnInit {

  truckmodels: TruckModel[] = [];
  truck: Truck = new Truck();
  submited = false;
  selectedValue: any;

  constructor(
    private truckService: TruckService, 
    private router: Router,
    private modelService: TruckmodelService
  ) { }

  ngOnInit(): void {
    this.listTruckModels();
  }

  newTruck(): void {
    this.submited = false;  
    this.truck = new Truck(); 
  }

  saveTruck() {
    this.truckService.createTruck(this.truck)
      .subscribe(data => console.log(data), error => 
        console.log(error));
    this.truck = new Truck();
    this.gotoList();
  }

  onSubmit() {
    this.submited = true;
    this.saveTruck()
  }

  listTruckModels() {
    this.modelService.listData().subscribe((truckmodels: TruckModel[]) => {
      this.truckmodels = truckmodels;
    });
  } 

  gotoList() {
    this.router.navigate(['/trucklist'])
  }
 
}
