import {RouterModule, Routes} from '@angular/router';
import {WalletsComponent} from './ui/wallets/wallets.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  { path: 'wallets', component: WalletsComponent },
  { path: '', redirectTo: '/wallets', pathMatch: 'full' },
  { path: '**', redirectTo: '/wallets' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
