import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TruckModel } from 'src/app/models/truck-model';
import { TruckmodelService } from 'src/app/services/truckmodel.service';

@Component({
  selector: 'app-truckmodel-dtl',
  templateUrl: './truckmodel-dtl.component.html',
  styleUrls: ['./truckmodel-dtl.component.css']
})
export class TruckmodelDtlComponent implements OnInit {

  id: number;
  model: TruckModel;
  submited = false;

  constructor(
    private modelService: TruckmodelService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.lodData();
  }

  lodData() {
    
    this.model = new TruckModel();  
    
    this.id = this.route.snapshot.params['id'];
    
    this.modelService.listById(this.id)
      .subscribe(data => {
        console.log(data)
        this.model = data;
      }, 
      error => console.log(error));

  }

  gotoList() {
    this.router.navigate(['/truckmodellist'])
  }

  saveTruckModel() {
    this.modelService.updateTruckModel(this.model)
      .subscribe(data => console.log(data), error => console.log(error));
    this.model = new TruckModel();
    this.gotoList();
  }

  onSubmit() {
    this.submited = true;
    this.saveTruckModel()
  }

}
