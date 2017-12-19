import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {TestPage} from "../test/test";
import {DemoPage} from "../demo/demo";
import {MinePage} from "../mine/mine";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  testRoot=TestPage;
  homeRoot = HomePage;
  demoRoot = DemoPage;
  mineRoot = MinePage;

  constructor() {

  }
}
