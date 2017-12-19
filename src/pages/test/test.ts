import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {FileObj} from "../../model/FileObj";
import {TestService} from "./TestService";


@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  fileObjList:FileObj[] = [];
  constructor(public testService:TestService) {
  }
  
  getFileData(){
    this.testService.getFileData().subscribe(res=>{
      this.fileObjList = res;
    })
  }
  

}
