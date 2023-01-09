import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercaseComponent } from './uppercase/uppercase.component';
import { CurrencyComponent } from './currency/currency.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UppercaseComponent, CurrencyComponent],
  imports: [CommonModule, FormsModule],
  exports: [UppercaseComponent, CurrencyComponent],
})
export class PagesModule {}
