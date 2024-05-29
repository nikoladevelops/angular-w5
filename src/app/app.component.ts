import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../data-service/data.service';
import { CryptoDataModel } from '../data-service/CryptoDataModel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private dataService: DataService) {
    this.dataService=dataService;
   }

  cryptoData:any;

  ngOnInit(): void {
    this.dataService.getBitcoinData().subscribe(data => {
      this.cryptoData = data;
      console.log(this.cryptoData);
    });
  }

  toggleClass(event: any | null , isEnter: boolean) {
    if(event == null){
      return;
    }

    let element:HTMLElement = event.children[1] as HTMLElement
    if (isEnter) {
      element.classList.add('additionalCryptoInfoHovered');
    } else {
      element.classList.remove('additionalCryptoInfoHovered');
   }
  }
}
