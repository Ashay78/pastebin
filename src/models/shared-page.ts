import {EmitterService} from '../services/emitter.service';
import {Injector} from '@angular/core';

export class SharedPage {
  protected sharedService: EmitterService = new EmitterService();

  constructor(injector: Injector) {
    if (injector) {
      this.sharedService = injector.get(EmitterService);
    }
  }
}
