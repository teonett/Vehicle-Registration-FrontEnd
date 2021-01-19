import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  listTruck(){
    this.router.navigate(['trucklist'])
  }

  listTruckModel(){
    this.router.navigate(['truckmodellist'])
  }

}
