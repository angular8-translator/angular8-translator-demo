import { Component, OnInit } from '@angular/core';
import { Language, AngularTranslatorService } from 'projects/angular-translator/src/public-api';

declare const require: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  constructor(
    public t: AngularTranslatorService,
  ) {
    const defaultLanguage = require('../../../assets/languages/en.json');

    t.setDefaultLanguage(defaultLanguage);
    t.setLanguageOption(Language.English, defaultLanguage);

    const pt = require('../../../assets/languages/pt.json');
    t.setLanguageOption(Language.Portuguese, pt);
  }

  ngOnInit() {
  }
}
