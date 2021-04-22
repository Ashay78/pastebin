import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class EmitterService {

  private saveEmitter: Subject<boolean>;
  private readonly _saveEmitter: Observable<boolean>;

  private updateEmitter: Subject<boolean>;
  private readonly _updateEmitter: Observable<boolean>;

  constructor() {
    this.saveEmitter = new Subject<boolean>();
    this._saveEmitter = this.saveEmitter.asObservable();

    this.updateEmitter = new Subject<boolean>();
    this._updateEmitter = this.updateEmitter.asObservable();
  }

  get savePastebin(): Observable<boolean> {
    return this._saveEmitter;
  }

  public emitSavePastebin(): void {
    this.saveEmitter.next();
  }

  get updatePastebin(): Observable<boolean> {
    return this._updateEmitter;
  }

  public emitUpdatePastebin(): void {
    this.updateEmitter.next();
  }
}
