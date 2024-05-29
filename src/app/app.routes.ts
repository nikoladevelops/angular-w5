import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CryptoHelpComponent } from '../crypto-help/crypto-help.component';
import { AllCryptoComponent } from '../all-crypto/all-crypto.component';

export const routes: Routes = [
    {path: 'home', component: AllCryptoComponent},
    {path: 'crypto-help', component: CryptoHelpComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
