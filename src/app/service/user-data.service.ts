import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(){}
   private user = new BehaviorSubject<any>('');
   castUser = this.user.asObservable();
   
   getData(dt: any) {
     console.log(dt);
     this.user.next(dt); 
   }
}
