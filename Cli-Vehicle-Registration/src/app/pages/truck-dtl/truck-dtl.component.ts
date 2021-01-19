import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Truck } from 'src/app/models/truck';
import { TruckModel } from 'src/app/models/truck-model';
import { TruckService } from 'src/app/services/truck.service';
import { TruckmodelService } from 'src/app/services/truckmodel.service';

@Component({
  selector: 'app-truck-dtl',
  templateUrl: './truck-dtl.component.html',
  styleUrls: ['./truck-dtl.component.css']
})
export class TruckDtlComponent implements OnInit {

  id: number;
  truck: Truck;
  submited = false;
  truckmodels: TruckModel[] = [];

  constructor(
    private truckService: TruckService,
    private router: Router,
    private route: ActivatedRoute,
    private modelService: TruckmodelService
  ) { }

  ngOnInit(): void {
    this.loadData();
    this.listTruckModels();
  }

  loadData() {
    this.truck = new Truck();  
    
    this.id = this.route.snapshot.params['id'];
    
    this.truckService.listById(this.id)
      .subscribe(data => {
        console.log(data)
        this.truck = data;
      }, 
      error => console.log(error));
  }

  listTruckModels() {
    this.modelService.listData().subscribe((truckmodels: TruckModel[]) => {
      this.truckmodels = truckmodels;
    });
  } 

  gotoList() {
    this.router.navigate(['/trucklist'])
  }

  saveTruck() {
    this.truckService.updateTruck(this.truck)
      .subscribe(data => console.log(data), error => console.log(error));
    this.truck = new Truck();
    this.gotoList();
  }

  onSubmit() {
    this.submited = true;
    this.saveTruck()
  }


}
