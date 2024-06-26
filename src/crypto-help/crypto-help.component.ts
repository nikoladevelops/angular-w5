import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../data-service/data.service';
import { CryptoDataModel } from '../data-service/CryptoDataModel';
import { Observable } from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'crypto-help',
  standalone: true,
  imports: [RouterOutlet, NgClass],
  templateUrl: './crypto-help.component.html',
  styleUrl: './crypto-help.component.css'
})
export class CryptoHelpComponent {
  constructor(private dataService: DataService) {
    this.dataService=dataService;
   }

  // cryptoData:CryptoDataModel[] | undefined;

  // ngOnInit(): void {
  //   // this.dataService.getSingleCryptoData().subscribe(data => {
  //   //   this.cryptoData = data;
  //   // });

  //   this.dataService.getAllCryptoData().subscribe(allData=>{
  //     this.cryptoData = allData;
  //   });
  // }

  // toggleClass(event: any | null , isEnter: boolean) {
  //   if(event == null){
  //     return;
  //   }

  //   let element:HTMLElement = event as HTMLElement;
  //   if (isEnter) {
  //     element.classList.add('cryptoInfoHovered');
  //   } else {
  //     element.classList.remove('cryptoInfoHovered');
  //  }
  // }

  // showModalWindow(selectedCrypto:CryptoDataModel){
    
  // }
}
