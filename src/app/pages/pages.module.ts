import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercaseComponent } from './uppercase/uppercase.component';
import { CurrencyComponent } from './currency/currency.component';

@NgModule({
  declarations: [UppercaseComponent, CurrencyComponent],
  imports: [CommonModule],
  exports: [UppercaseComponent, CurrencyComponent],
})
export class PagesModule {}
