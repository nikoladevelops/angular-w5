import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../data-service/data.service';

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

  bitcoinData:any;

  ngOnInit(): void {
    this.dataService.getBitcoinData().subscribe(data => {
      this.bitcoinData = data;
      console.log(this.bitcoinData);
    });
  }
}
