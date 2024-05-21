import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './Interceptors';
import { HeaderComponent } from './components/header/header.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    httpInterceptorProviders]
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
