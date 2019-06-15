import { Injectable } from '@angular/core';
import { Translation } from './default.text';
import { en } from './en.texts';
import { pt } from './pt.texts';

export const Languages = {
  PT: 'pt',
  EN: 'en',
};

@Injectable({
  providedIn: 'root'
})
export class TranslationsService {
  private pString: Translation;
  private pLanguage: string;

  constructor() {
    this.language = Languages.PT;
  }

  get string() {
    return this.pString;
  }

  get language() {
    return this.pLanguage;
  }

  set language(language: string) {
    this.pLanguage = language;
    switch (language) {
      case Languages.EN:
        this.pString = en;
        break;
      case Languages.PT:
      default:
        this.pString = pt;
        break;
    }
  }
}
