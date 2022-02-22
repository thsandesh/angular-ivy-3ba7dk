import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataServiceService {
  constructor(private httpClient: HttpClient) {}
  getDetails() {
    return this.httpClient.get(
      'https://my.api.mockaroo.com/garden.json?key=e51f71e0'
    );
  }
}
