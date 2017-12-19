
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {GlobalData} from "./GlobalData";
import {Logger} from "./Logger";
@Injectable()
export class HttpService{
  constructor(
    public http:Http,
    globalData:GlobalData,
    public logger:Logger,
    public nativeService:NativeService
  ){
  
  }
}
