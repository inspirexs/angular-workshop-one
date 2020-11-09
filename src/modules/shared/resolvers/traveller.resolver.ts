import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Traveller } from '../models/traveller';
import { MercuryClientService } from '../services/mercury-client.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TravellerResolver implements Resolve<Traveller>{
  constructor(private mercuryClientService: MercuryClientService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Traveller> {
    return this.mercuryClientService.getTraveller('PASSPORT', 'G85471', 'AUT').pipe(
      map((response: any) => {
        console.log('I did some logic');
        return response;
      })
    );
  }


}
