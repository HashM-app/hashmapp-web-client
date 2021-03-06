import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [AppRoutingModule, BrowserAnimationsModule, BrowserModule, StoreModule.forRoot({}, {})],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
