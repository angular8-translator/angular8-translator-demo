import { AngularTranslatorService, Language } from 'projects/angular-translator/src';
import { Component } from '@angular/core';

declare const require: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	constructor(
		public t: AngularTranslatorService,
	) {
		const defaultLanguage = require('../assets/languages/en.json');

		t.setDefaultLanguage(defaultLanguage);
		t.setLanguageOption(Language.English, defaultLanguage);

		const pt = require('../assets/languages/pt.json');
		t.setLanguageOption(Language.Portuguese, pt);

		const de = require('../assets/languages/de.json');
		t.setLanguageOption(Language.German, de);

		const es = require('../assets/languages/es.json');
		t.setLanguageOption(Language.Spanish, es);

		const ni = require('../assets/languages/ni.json');
		t.setLanguageOption(Language.Japanese, ni);

		const fr = require('../assets/languages/fr.json');
		t.setLanguageOption(Language.French, fr);
	}
}
