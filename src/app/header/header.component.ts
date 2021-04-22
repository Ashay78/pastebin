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
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {

      console.log(event.url);
      if (event.url.includes('/new')) {
        this.showSaveButton = true;
        this.showNewButton = false;
        this.showUpdateButton = false;
      } else {
        this.showSaveButton = false;
        this.showNewButton = true;
        this.showUpdateButton = true;
      }
    });
  }

  ngOnInit(): void {
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
