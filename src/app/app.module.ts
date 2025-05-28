import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgInterswitchModule } from '@interswitchapi/ng-interswitch';

import { AppComponent } from './app.component';

console.log('[BOOTSTRAP] AppModule initializing...');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgInterswitchModule // No .forRoot() needed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('[BOOTSTRAP] AppModule constructed');
  }
}
