import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AngularTranslatorModule } from 'projects/angular-translator/src';
import { UiModule } from './../../projects/cruzjr/ui/src/lib/ui.module';


@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		MatFormFieldModule,
		MatSelectModule,
		AngularTranslatorModule,
		UiModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
