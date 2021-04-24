import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {NewPastebinComponent} from '../new-pastebin/new-pastebin.component';
import {SharedPage} from '../../models/shared-page';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends SharedPage implements OnInit {
  public showNewButton = true;
  public showSaveButton = true;
  public showUpdateButton = true;

  constructor(
    public injector: Injector,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.sharedService.pagePastebin.subscribe((page) => {
      switch (page) {
        case 1:
          this.showSaveButton = true;
          this.showNewButton = false;
          this.showUpdateButton = false;
          break;
        case 2:
          this.showSaveButton = false;
          this.showNewButton = true;
          this.showUpdateButton = true;
          break;
        default:
      }
    });
  }

  new() {
    this.router.navigate(['/new']);
  }

  save() {
    this.sharedService.emitSavePastebin();
  }

  update() {
    this.sharedService.emitUpdatePastebin();
  }
}
