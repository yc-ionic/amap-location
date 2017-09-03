# amap-location

Ionic wrap for [cordova-plugin-amap-location](https://github.com/yccp/cordova-plugin-amap-location.git)

## Installation

1. Install the Cordova plugin [cordova-plugin-amap-location](https://github.com/yccp/cordova-plugin-amap-location.git)

2. Install the Ionic plugin
```
 npm i -S @yci/amap-location
```

3. Add it to your app’s NgModule.

```typescript
// Import your library
import { AmapLocationModule } from '@yci/amap-location';

@NgModule({

  ...

  imports: [

    ...

    // Specify your library as an import
    AmapLocationModule.forRoot()
  ],
  
  ...

})
export class AppModule { }
```

## Usage
Once your library is imported, you can use its service in your Angular application:

```ts
import { AmapLocation, IAmapLocationConfig } from '@yci/amap-location';

async constructor(private amapLocation: AmapLocation) {

  const config: IAmapLocationConfig = {
    // ... 
  };

  try {
    const info = await this.amapLocation.getCurrentPosition(config);
    console.log(info);
  } catch(e) {
    console.error(e);
  }

}
```

## Methods
```ts
getCurrentPosition(config?: IAmapLocationConfig): Promise<IAmapLocationData>;
watchPosition(config?: IAmapLocationConfig): Subject<IAmapLocationData>;
clearWatch(): Promise<IAmapLocationData>;
```

## Interfaces and Enums
```ts
interface IAmapLocationData {
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

interface IAmapLocationConfig {
  // ios配置
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

enum IAmapLocationAndroidAccuracy {
  Battery_Saving = 0,
  Hight_Accuracy = 1,
  Device_Sensors = 2
}

enum IAmapLocationIosAccuracy {
  BestForNavigation = -2,
  Best = -1,
  NearestTenMeters = 10,
  HundredMeters = 100,
  Kilometer = 1000,
  ThreeKilometer = 1000,
}
```
## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

## License

MIT © [Yu Chen](mailto:yu.chen@live.ie)
