import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Geofence } from '@ionic-native/geofence';

@Injectable()
export class GeofenceService {

  private geofences = {
    data: [
      {
        id : 1,
        title : "Stonebriar Centre Mall",
        geofence : {
          id : 1,
          latitude : 33.099081,
          longitude : -96.811477,
          radius : 400,
          transitionType : 3,
          notification : {
            id: 1, 
            title : "You Crossed a Fence",
            text : "Stonebriar Center Mall",
            openAppOnClick : true
          }
        }
      },
      {
        id : 2,
        title : "Garden Park Ward",
        geofence : {
          id : 2,
          latitude : 40.745289,
          longitude : -111.857776,
          radius : 50,
          transitionType : 3,
          notification : {
            id: 1, 
            title : "You Crossed a Fence",
            text : "Garden Park Ward",
            openAppOnClick : true
          }
        }
      },
      {
        id : 3,
        title : "Inglewood Park",
        geofence : {
          id : 3,
          latitude : 40.743739,
          longitude : -111.861024,
          radius : 50,
          transitionType : 3,
          notification : {
            id: 1, 
            title : "You Crossed a Fence",
            text : "Inglewood Park" ,
            openAppOnClick : true
          }
        }
      },
      // 40.750811, -111.855253
      {
        id : 4,
        title : "East High School",
        geofence : {
          id : 4,
          latitude : 40.750811,
          longitude : -111.855253,
          radius : 50,
          transitionType : 3,
          notification : {
            id: 1, 
            title : "You Crossed a Fence",
            text : "East High School" ,
            openAppOnClick : true
          }
        }
      }
    ]
  }

  TransitionType: {
    ENTER: 1;
    EXIT: 2;
    BOTH: 3;
  };

  private isInitialized:boolean = false;
  private transitionData:any = null;
  private transitionDataSubject:BehaviorSubject<any> = new BehaviorSubject(this.transitionData);

  constructor(private geofencePlugin: Geofence) {
    console.log('Hello GeofenceServiceProvider Provider');
  }

  /**
   * Initializes this Service including the Geofence Native Plugin
   *
   * @returns {Promise<void>}
   */
  public init(): Promise<any> {
    console.log('GeofenceService.init() called...')
    return new Promise((resolve, reject) => { 
      if(this.isInitialized){
        console.log('Geofence Plugin already initialized...');
        resolve();
      }else{

        this.geofencePlugin.initialize().then(
          () => {
              
              console.log('Geofence Plugin Ready');
              this.isInitialized = true;

              // now subscribe to the native plugin transitions //
              this.subscribeToPluginTransitions();

              resolve(true);
              //this.addGeofence();
  
          },
          (err) => {
            console.log('GEOFENCE-ERROR ' + err);
            reject(false);
          }
        );
      }
   
    })
  }

  /**
   * Get an item from the hard coded object this.geofences
   *
   * @returns {Object<any>}
   */
  public get(fenceId){
    console.log(fenceId);
    //let fence: any;
    let fence = this.geofences.data.filter(fence => fence.id == fenceId);
    //console.log(fence);
    return fence[0];
  }

  /**
   * Return all items from the hard coded object this.geofences
   *
   * @returns {Object<Array<any>>}
   */
  public getAll(){
    return this.geofences;
  }

  /** DEPRECATED, replaced by this.addOrUpdate(geofences) */
  public add(fence):Promise<any>{
    console.log('ADDING GEOFENCE...');
    return new Promise ((resolve, reject) => {
      this.geofencePlugin.addOrUpdate(fence).then(
        () => {
          console.log('Geofence added');
          resolve(true);
        },
        (err) => {
          console.log('Geofence failed to add')
          reject(err);
        }
      );
    })
  }

  /**
   * Adds a new geofence or array of geofences.
   *
   * @returns {Promise<void>}
   */
  addOrUpdate(geofences: any | Array<any>): Promise<void>{
    console.log('Adding geofences...');
    return this.geofencePlugin.addOrUpdate(geofences);
  }

  /**
   * Subscribe to the native plugin transitions
   *
   * @returns {Promise<void>}
   */
  private subscribeToPluginTransitions():void{
    this.geofencePlugin.onTransitionReceived().subscribe(
      next => {
        console.log('onNext: %s', JSON.stringify(next));
        this.notifyTransitionSubscribers(next);
      },
      err => console.log('onError: %s', err),
      () => console.log('onCompleted')
    )
  }

  /** utilitly method for quickly adding all geofences from this.geofences */
  public addAll(){
    console.log("adding all geofences...", JSON.stringify(this.geofences));
    let gf = [];
    this.geofences.data.forEach((fence) => {
      console.log("adding ", fence.title);
      gf.push(fence.geofence);
    })
    console.log(JSON.stringify(gf));
    return this.addOrUpdate(gf);

  }

  /**
   * remove a single geofence or an array of geofences by id 
   *
   * @returns {Promise<void>}
   */
  public remove(geofenceId: string | Array<string>):Promise<void>{
    return this.geofencePlugin.remove(geofenceId);
  }

  /**
   * Remove all geofences from native plugin
   *
   * @returns {Promise<void>}
   */
  public removeAll():Promise<void>{
    return this.geofencePlugin.removeAll();
  }

  /**
   * Subscribe to transition events
   *
   * @returns {Observable<any>}
   */
  public getTransitions():Observable<any>{
    console.log('Someone subscribed to transitions...');
    return this.transitionDataSubject.asObservable();
  }

  /**
   * Notify subscribers with changed data
   *
   * @returns {Object<any>}
   */
  private notifyTransitionSubscribers(data):void{
    console.log('Notifying transition subscribers...');
    return this.transitionDataSubject.next(data);
  }

  /**
   * Returns an array of geofences currently being monitored.
   *
   * @returns {Promise<Array<string>>}
   */
  public getWatched(): Promise<string>{
    return this.geofencePlugin.getWatched();
  }

}
