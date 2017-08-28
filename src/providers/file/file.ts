import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FileProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FileProvider {

  constructor(public http: Http) {
    console.log('Hello FileProvider Provider');
  }


readFile(file : File){



 return new Promise(resolve =>
 {

   let fr = new FileReader();


   fr.onloadend = e=>{
        resolve(fr.result);
   }
   fr.readAsDataURL(file);


 });






}

}
