# Angular8-translator

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

## Introduction



## Setup

1- Install this library on your project: `npm install --save angular8-translator`


2- Import the `AngularTranslatorModule` on your app.module.ts:



```
import { AngularTranslatorModule } from 'angular8-translator';
[...]
@NgModule({
    [...]
    imports: [
        [...]
        AngularTranslatorModule,
    ]
]
```


## Geting Started


3- Import `AngularTranslatorService`, set your default language and additional language options


```
import { Component, OnInit } from '@angular/core';
import { AngularTranslatorService, Language } from 'angular8-translator';

@Component({
  selector: 'app-home-page',
  template: '<div> <h1> {{ t.string.WELCOME }} </h1> </div>',
})
export class HomePageComponent implements OnInit {
  constructor(
    public t: AngularTranslatorService,
  ) {
    const en = { WELCOME: "Welcome" };
    const pt = { WELCOME: "Bem Vindo" };
    const es = { WELCOME: "Bienvenida" };
    const fr = { WELCOME: "Bienvenue" };
    const de = { WELCOME: "Herzlich willkommen"};

    t.setDefaultLanguage(en);
    t.setLanguageOption(Language.English, en);
    t.setLanguageOption(Language.Portuguese, pt);
    t.setLanguageOption(Language.Spanish, es);
    t.setLanguageOption(Language.French, fr);
    t.setLanguageOption(Language.German, de);
  }
}

```

## JSON files

You can to import JSON files with translations and set to `AngularTranslatorService`.

## Further help

To get more help on the Angular8-translator, you are welcome to register issue [here](https://github.com/angular8-translator/angular8-translator/issues).
