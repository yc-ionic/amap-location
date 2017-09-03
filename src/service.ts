import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

declare var window;

@Injectable()
export class AmapLocation {
  private __subject: Subject<IAmapLocationData>;
  constructor() { }

  getCurrentPosition(config?: IAmapLocationConfig): Promise<IAmapLocationData> {
    return new Promise((resolve, reject) => {
      window.AmapLocation.getCurrentPosition(
        config,
        x => resolve(x),
        e => reject(e)
      );
    });
  }

  watchPosition(config?: IAmapLocationConfig): Subject<IAmapLocationData> {
    this.__subject = new Subject<IAmapLocationData>();
    window.AmapLocation.watchPosition(
      config,
      x => this.__subject.next(x),
      e => this.__subject.error(e)
    );
    return this.__subject;
  }

  clearWatch(): Promise<IAmapLocationData> {
    return new Promise((resolve, reject) => {
      window.AmapLocation.clearWatch(
        x => resolve(x),
        e => reject(e)
      );
    });
  }
}

export interface IAmapLocationData {
  accuracy: number;
  adCode: string;
  address: string;
  aoiName: string;
  bearing: number;
  city: string;
  cityCode: string;
  country: string;
  date: string;
  district: string;
  latitude: number;
  locationType: number;
  longitude: number;
  poiName: string;
  province: string;
  speed: number;
  street: string;
  streetNum: string;
}

export interface IAmapLocationConfig {
  locationTimeout?: number;
  reGeocodeTimeout?: number;
  iosAccuracy?: number;
  distanceFilter?: number;
  watchWithReGeocode?: boolean;
  iosBackground?: boolean;

  // android配置
  interval?: number;
  androidAccuracy?: IAmapLocationAndroidAccuracy;
  needAddress?: boolean;
}

export enum IAmapLocationAndroidAccuracy {
  Battery_Saving = 0,
  Hight_Accuracy = 1,
  Device_Sensors = 2
}

export enum IAmapLocationIosAccuracy {
  BestForNavigation = -2,
  Best = -1,
  NearestTenMeters = 10,
  HundredMeters = 100,
  Kilometer = 1000,
  ThreeKilometer = 1000,
}
