import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Geofence } from '@ionic-native/geofence';
import { Geolocation } from '@ionic-native/geolocation';

import { GeofenceComponentsModule } from './components/geofence-components.module';
import { GeofenceService } from './providers/geofence-service';
import { GeolocationService } from './providers/geolocation-service';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	exports: [GeofenceComponentsModule]
})
export class GeofenceModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: GeofenceModule,
			providers:[GeofenceService, GeolocationService, Geofence, Geolocation ]
		}
	}
}
