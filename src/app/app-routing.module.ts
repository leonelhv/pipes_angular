import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './pages/currency/currency.component';
import { UppercaseComponent } from './pages/uppercase/uppercase.component';

const routes: Routes = [
  {
    path: 'uppercase-pipe',
    component: UppercaseComponent,
  },
  {
    path: 'currency-pipe',
    component: CurrencyComponent,
  },
  {
    path: '**',
    redirectTo: 'uppercase-pipe',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
