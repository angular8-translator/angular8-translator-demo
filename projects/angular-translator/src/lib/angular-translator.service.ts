import { Injectable } from '@angular/core';

declare const require: any;

const DEFAULT_LANGUAGE = 'default';

@Injectable({
	providedIn: 'root'
})
export class AngularTranslatorService {
	private pString: any;
	private pLanguage: string;
	private logs = false;

	private languages = new Map<string, any>();

	constructor() {}

	get string() {
		if (!this.pString) {
			this.emmitErrorMessage();

			return {} as any;
		}

		return this.pString;
	}

	get language() {
		this.verifyDefault();

		return this.pLanguage;
	}

	set language(languageCode: string) {
		this.verifyDefault();

		if (this.languages.has(languageCode)) {
			this.pString = this.languages.get(languageCode);
			this.pLanguage = languageCode;
		} else {
			this.pString = this.languages.get(DEFAULT_LANGUAGE);
			this.pLanguage = DEFAULT_LANGUAGE;
		}
	}

	public setDefaultLanguage(language: any) {
		if (language) {

			// tslint:disable-next-line: no-console
			if (this.logs) { console.info('Default language setted'); }

			this.languages.set(DEFAULT_LANGUAGE, language);
			this.pString = language;
			this.pLanguage = DEFAULT_LANGUAGE;
		} else {
			this.emmitInvalidJson();
		}
	}

	public setLanguageOption(languageCode: string, language: any) {
		if (language && languageCode) {

			// tslint:disable-next-line: no-console
			if (this.logs) { console.info(`Language ${languageCode} setted`); }

			this.languages.set(languageCode, language);
		} else {
			this.emmitInvalidJson();
		}
	}

	private verifyDefault() {
		if (!this.languages.has(DEFAULT_LANGUAGE)) {
			this.emmitErrorMessage();
		}
	}

	private emmitErrorMessage() {
		console.error(
			'AngularTranslatorService',
			'Before to use AngularTranslatorService, you must to set a default language with the command:',
			`angularTranslatorService.setDefaultLanguage('PATH_TO_DEFAULT_JSON_Translator.json')`
		);
	}

	private emmitInvalidJson() {
		console.error(
			'AngularTranslatorService',
			'Invalid json file. Verify if the path is right.',
		);
	}

	public showLogs(b: boolean) {
		this.logs = b;
	}
}
