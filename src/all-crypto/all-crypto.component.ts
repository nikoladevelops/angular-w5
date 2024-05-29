import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../data-service/data.service';
import { CryptoDataModel } from '../data-service/CryptoDataModel';
import { Observable } from 'rxjs';
import { NgClass } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'all-crypto',
  standalone: true,
  imports: [RouterOutlet, NgClass, FormsModule],
  templateUrl: './all-crypto.component.html',
  styleUrl: './all-crypto.component.css'
})
export class AllCryptoComponent {
  constructor(private dataService: DataService) {
    this.dataService=dataService;
   }

  allUnfilteredCryptoData:CryptoDataModel[] = [];
  searchKeyword:string='';
  filterByChange:boolean=false;
  cryptoData:CryptoDataModel[] | undefined;

  ngOnInit(): void {
    this.dataService.getAllCryptoData().subscribe(allData=>{
      this.cryptoData = allData;
      this.allUnfilteredCryptoData = allData;
    });
  }

  toggleClass(event: any | null , isEnter: boolean) {
    if(event == null){
      return;
    }

    let element:HTMLElement = event as HTMLElement;
    if (isEnter) {
      element.classList.add('cryptoInfoHovered');
    } else {
      element.classList.remove('cryptoInfoHovered');
   }
  }

  searchCrypto(){
    if(this.searchKeyword === "" && this.filterByChange === false){
      this.cryptoData = this.allUnfilteredCryptoData;
      return;
    }else if(this.searchKeyword === "" && this.filterByChange === true){
      this.cryptoData = [...this.allUnfilteredCryptoData].sort((a, b) => b.changePercent24Hr - a.changePercent24Hr);
    }

    let result:CryptoDataModel[] | undefined;

    result = this.allUnfilteredCryptoData?.filter(crypto=>{
      if(crypto.name.toLowerCase().indexOf(this.searchKeyword.toLowerCase()) >= 0){
        return crypto;
      }
      return null;
    });

    if(this.filterByChange === true){
      this.cryptoData = [...result].sort((a, b) => b.changePercent24Hr - a.changePercent24Hr);
    }else{
      this.cryptoData=result;
    }
  }
}
