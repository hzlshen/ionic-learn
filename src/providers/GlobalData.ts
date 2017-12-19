
import {Injectable} from "@angular/core";

@Injectable()
export class GlobalData{
  private _userId :string;  //用户名id
  private _username:string;  //用户名
  private _user:string;  //用户信息
  
  private _token:string; //token
  
  //设置http请球是否显示loading 注意：设置为true 接下来的请求会不显示loading 请求执行完成自动设置为false
  private _showLoading:boolean = true;
  
  //是否启动文件缓存
  private _enableFileCache:boolean = true;
  
  get userId():string{
    return this._userId;
  }
  
  set userId(value:string){
    this._userId = value;
  }
  
  get username():string{
    return this._username;
  }
  
  set username(value:string){
    this._username = value;
  }
  
  get user(){
    return this._user;
  }
  
  set user(value){
    this._user = value;
  }
  
  get token(){
    return this._token;
  }
  
  set token(value:string){
    this._token  = value;
  }
  
  get showLoading():boolean{
    return this._showLoading;
  }
  
  set showLoading(value:boolean){
    this._showLoading=value;
  }
  
  get enabledFileCache():boolean{
    return this._enableFileCache;
  }
  
  set enabledFileCache(value:boolean){
    this._enableFileCache;
  }
  
  
  
  
  
}
