import { Component, OnInit } from '@angular/core';
import { GeofenceService } from '../../providers/geofence-service';

/**
 * Generated class for the GeofenceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'geofence-list',
  templateUrl: 'geofence-list.html'
})
export class GeofenceListComponent implements OnInit{

  fences: any;

  constructor(private geofenceService:GeofenceService) {
    console.log('Hello GeofenceComponent Component');
  }

  ngOnInit(){
    this.fences = this.geofenceService.getAll()
  }

}
