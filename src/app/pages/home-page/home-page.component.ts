import { Component, OnInit } from '@angular/core';
import { Language, AngularTranslatorService } from 'projects/angular-translator/src';

declare const require: any;

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
	languages = Language;

	constructor(
		public t: AngularTranslatorService,
	) { }

	ngOnInit() { }
}
