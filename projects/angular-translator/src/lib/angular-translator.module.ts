import { AngularTranslatorService } from './angular-translator.service';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
	declarations: [],
	imports: [],
	exports: []
})
export class AngularTranslatorModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: AngularTranslatorModule,
			providers: [ AngularTranslatorService ]
		};
	}
}
