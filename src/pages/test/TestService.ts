import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {TestObj} from "./TestObj";
import "rxjs/add/operator/map";
import {HttpService} from "../../providers/HttpService";
import {Result} from "../../model/Result";

@Injectable()
export class TestService{
  
  constructor(public http:Http,httpService:HttpService){
  }
  
  getJson(){
    return this.httpService.get(url:'./assets/data/test.json').map(res:Response=>res.json())
  }
  
  
}
