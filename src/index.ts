import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmapLocation } from './service';

export * from './service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class AmapLocationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AmapLocationModule,
      providers: [AmapLocation]
    };
  }
}
