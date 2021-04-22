import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {CodeModel} from '@ngstack/code-editor';
import {Pastebin} from '../../models/pastebin';
import {ApiPastebinService} from '../../services/api-pastebin.service';
import {SharedPage} from '../../models/shared-page';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-new-pastebin',
  templateUrl: './new-pastebin.component.html',
  styleUrls: ['./new-pastebin.component.scss']
})
export class NewPastebinComponent extends SharedPage implements OnInit {
  public pastebin: Pastebin = new Pastebin();
  public editorOptions = {
    theme: 'vs-dark',
    scrollBeyondLastLine: false,
    scrollBeyondLastColumn: false,
    contextmenu: false,
  };

  constructor(
    private injector: Injector,
    private apiPastebinService: ApiPastebinService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.sharedService.savePastebin.subscribe(() => {
      this.save();
    });

    this.route.queryParams
      .subscribe(params => {
          if (params.code !== null) {
            this.pastebin.code = params.code;
          }
        }
      );
  }

  save(): void {
    this.apiPastebinService.post(this.pastebin)
      .subscribe(
        response => {
          this.router.navigate(['/' , response.key]);
        });
  }
}
