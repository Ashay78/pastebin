import {HttpClient, HttpHeaders, HttpClientModule, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Pastebin} from '../models/pastebin';


@Injectable({
  providedIn: 'root'
})

export class ApiPastebinService {
  private static URL = 'https://pastebin.gcousin.net/api/pastebin';

  constructor(protected httpClient: HttpClient) {
  }


  public get(key: string): Observable<any> {
    return this.httpClient
      .get<Pastebin>(ApiPastebinService.URL + '/' + key,
        {observe: 'response'}
      ).pipe(map(
        ((response: HttpResponse<Pastebin>) => {
          return new Pastebin(response.body);
        }
      )));
  }

  public post(pastebin: Pastebin): Observable<Pastebin> {
    return this.httpClient.post<any>(
      ApiPastebinService.URL,
      pastebin.toJson(true),
      {observe: 'response'}
    ).pipe(map(response => {
      return new Pastebin(response.body);
    }));
  }

  public static getHeaders(): HttpHeaders {
    let myHeader = new HttpHeaders();
    myHeader = myHeader.append('Access-Control-Allow-Origin' , '*');
    return myHeader;
  }
}
