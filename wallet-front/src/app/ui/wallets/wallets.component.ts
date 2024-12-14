import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';


interface Wallet {
  id:number;
  balance:number;
  currency?:string;
}

@Component({
  selector: 'app-wallets',
  imports: [CommonModule],
  templateUrl: './wallets.component.html',
  standalone: true,
  styleUrl: './wallets.component.css'

})
export class WalletsComponent {
 wallets: Wallet[] = [];

  constructor(private http : HttpClient) { }

  ngOnInit(): void {

    this.http.get<Wallet[]>('http://localhost:8080/api/wallets').subscribe({
      next : (value : Wallet[]) =>  this.wallets = value,
      error : (error) => console.error(error)

    });
  }

  openCreateModal(): void {
    // Implement create wallet logic
    console.log('Open create wallet modal');
  }
  editWallet(wallet: Wallet): void {
    // Implement edit wallet logic
    console.log('Edit wallet', wallet);
  }

  deleteWallet(id: number): void {
    // Implement delete wallet logic
    this.wallets = this.wallets.filter(wallet => wallet.id !== id);
  }
}

