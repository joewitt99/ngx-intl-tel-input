import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxIntlTelInputComponent } from './ngx-intl-tel-input.component';
import { CommonModule } from '@angular/common';
import { BsDropdownModule, TooltipModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { NgxIntlTelInputService } from './ngx-intl-tel-input.service';

@NgModule({
	declarations: [NgxIntlTelInputComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
		BsDropdownModule.forRoot(),
		TooltipModule.forRoot()
	],
	exports: [NgxIntlTelInputComponent]
})
export class NgxIntlTelInputModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: NgxIntlTelInputModule,
			providers: [NgxIntlTelInputService]
		};
	}
}
