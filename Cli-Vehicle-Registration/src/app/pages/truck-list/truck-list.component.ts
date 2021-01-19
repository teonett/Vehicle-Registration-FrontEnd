import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Truck } from 'src/app/models/truck';
import { TruckService } from 'src/app/services/truck.service';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.css']
})

export class TruckListComponent implements OnInit {

  truck = {} as Truck;
  trucks: Truck[];

  constructor(
    private truckService: TruckService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.listData();
  }

  listData() {
    this.truckService.listAll().subscribe((trucks: Truck[]) => {
      this.trucks = trucks;
    });
  }

  removeData(id: number) {
    this.truckService.deleteTruck(id)
    .subscribe(
      data => {
        console.log(data);
        this.listData();
      },
      error => console.log(error)
    );
  }

  modifyData(id: number) {
    this.router.navigate(['truckdtl', id]);
  }

  addNewTruck(){
    this.router.navigate(['trucknew'])
  }

}
