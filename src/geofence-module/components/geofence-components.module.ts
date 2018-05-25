import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { GeofenceListComponent } from './geofence-list/geofence-list';
import { GeofenceMapComponent } from './geofence-map/geofence-map';


@NgModule({
	declarations: [GeofenceListComponent, GeofenceMapComponent],
	imports: [IonicModule],
	exports: [GeofenceListComponent, GeofenceMapComponent]
})
export class GeofenceComponentsModule {}
