import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TruckModel } from 'src/app/models/truck-model';
import { TruckmodelService } from 'src/app/services/truckmodel.service';

@Component({
  selector: 'app-truckmodel-list',
  templateUrl: './truckmodel-list.component.html',
  styleUrls: ['./truckmodel-list.component.css']
})
export class TruckmodelListComponent implements OnInit {

  truckmodel = {} as TruckModel;
  truckmodels: TruckModel[];

  constructor(
    private modelService: TruckmodelService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.listModels();
  }

  listModels() {
    this.modelService.listData().subscribe((truckmodels: TruckModel[]) => {
      this.truckmodels = truckmodels;
    });
  }
  
  addNewTruckModel(){
    this.router.navigate(['truckmodelnew'])
  }

  removeData(id: number) {
    this.modelService.deleteTruckModel(id)
    .subscribe(
      data => {
        console.log(data);
        this.listModels();
      },
      error => console.log(error)
    );
  }

  modifyData(id: number) {
    this.router.navigate(['/truckmodeldtl', id]);
  }

}
