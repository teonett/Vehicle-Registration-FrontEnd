import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TruckModel } from 'src/app/models/truck-model';
import { TruckmodelService } from 'src/app/services/truckmodel.service';

@Component({
  selector: 'app-truckmodel-add',
  templateUrl: './truckmodel-add.component.html',
  styleUrls: ['./truckmodel-add.component.css']
})
export class TruckmodelAddComponent implements OnInit {

  truckModel: TruckModel = new TruckModel();
  submited = false;

  constructor(
    private modelService: TruckmodelService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  gotoList() {
    this.router.navigate(['/truckmodellist']);
  }

  newTruckModel(): void {
    this.submited = false;
    this.truckModel = new TruckModel();
  }

  saveTruckModel() {
    this.modelService.createTruckModel(this.truckModel)
      .subscribe(data => console.log(data), error => console.log(error));

    this.truckModel = new TruckModel();
    this.gotoList();
  }

  onSubmit() {
    this.submited = true;
    this.saveTruckModel();
  }

}
