import { Component, OnInit, Input, TemplateRef, AfterViewInit } from '@angular/core';

declare const document: Document;

@Component({
	selector: 'ui-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit, AfterViewInit {
	@Input() title: string;
	@Input() headerRight?: TemplateRef<any>;
	@Input() headerLeft?: TemplateRef<any>;
	@Input() headerCenter?: TemplateRef<any>;
	@Input() footerRight?: TemplateRef<any>;
	@Input() footerLeft?: TemplateRef<any>;
	@Input() footerCenter?: TemplateRef<any>;

	constructor() { }

	ngOnInit() {

	}

	ngAfterViewInit() {
		setTimeout(() => {
			this.adjustWidths();
		}, 100);
	}

	private adjustWidths() {
		/** Centerize Header */
		const divHL = document.getElementById('header-left');
		const divHR = document.getElementById('header-right');

		const widthHL = divHL.offsetWidth;
		const widthHR = divHR.offsetWidth;

		divHL.style.width = Math.max(widthHL, widthHR) + 'px';
		divHR.style.width = Math.max(widthHL, widthHR) + 'px';

		/** Centerize Footer */
		const divFL = document.getElementById('footer-left');
		const divFR = document.getElementById('footer-right');

		const widthFL = divFL.offsetWidth;
		const widthFR = divFR.offsetWidth;

		divFL.style.width = Math.max(widthFL, widthFR) + 'px';
		divFR.style.width = Math.max(widthFL, widthFR) + 'px';
	}
}
