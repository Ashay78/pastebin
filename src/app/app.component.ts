import {Component, Injector} from '@angular/core';
import {SharedPage} from '../models/shared-page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  extends SharedPage {

  constructor(private injector: Injector) {
    super(injector);
  }

  title = 'Pastebin';
}
