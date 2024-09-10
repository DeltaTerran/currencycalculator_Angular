import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyapidataService {
  headers = new HttpHeaders({
'apikey' : '1hJLJeU5X9M8xwDIf7owLvNeXVkLflbA'
  });


 
  constructor(private http:HttpClient) { }
  getcurrencydata(country1: string)
  {
    //let url = 'https://api.apilayer.com/exchangerates_data/latest?base='  + country1;
    let url = 'https://api.apilayer.com/exchangerates_data/latest?base='  + country1
    return this.http.get(url, {headers : this.headers});
  }
}
