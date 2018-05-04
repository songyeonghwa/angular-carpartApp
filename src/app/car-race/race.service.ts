import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RaceService {

  constructor(private http:HttpClient){
    console.log(this.http);
  }

  getRaces() : Observable<any>{
                           //URL 주소, 응답타입
    return this.http.get('assets/json/races.json', {responseType:'json'});
  }
}
