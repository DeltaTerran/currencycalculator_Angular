import { Component } from '@angular/core';
import { CurrencyapidataService } from '../currencyapidata/currencyapidata.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: '../app.component.html',
  styleUrl: '../app.component.css'
})
export class AppComponent {
  title = 'mycurrencycalculator';
  currjson: any = [];
curranceForm = this.fb.group({
  currencyID: [1],

})
curr = [{id: 1, title: 'UAH'},
  {id:2, title: 'USD'},
  {id:3, title: 'EUR'}
];
  base = '';
  cont2 = '';
  result: string = '1';


  
  changebase(a:string, b:string){
    this.base = a.slice(a.indexOf(":")+2);
    this.cont2 = b.slice(a.indexOf(":")+2);
    this.currencyData.getcurrencydata(this.base,this.cont2).subscribe(data => {
            this.currjson = JSON.stringify(data);
            this.currjson = JSON.parse(this.currjson);
            if (this.cont2 == 'USD'){
                      this.result = this.currjson.rates.USD;
                    }
                    if (this.cont2 == 'UAH'){
                      this.result = this.currjson.rates.UAH;
                    }
                    if (this.cont2 == 'EUR'){
                      this.result = this.currjson.rates.EUR;
                    }
    })
  }


  
  constructor(private currencyData: CurrencyapidataService, private fb: FormBuilder){}
}

