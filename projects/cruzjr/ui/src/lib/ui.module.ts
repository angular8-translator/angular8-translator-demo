import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LayoutComponent } from './layout/layout.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		LayoutComponent
	],
	imports: [
		CommonModule,
		MatToolbarModule,
		FontAwesomeModule,
	],
	exports: [
		LayoutComponent,
		FontAwesomeModule,
	],
})
export class UiModule { }
