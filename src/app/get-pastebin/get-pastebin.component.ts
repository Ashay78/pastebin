import {Component, EventEmitter, Injector, OnInit, Output} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiPastebinService} from '../../services/api-pastebin.service';
import {Pastebin} from '../../models/pastebin';
import {SharedPage} from '../../models/shared-page';

@Component({
  selector: 'app-get-pastebin',
  templateUrl: './get-pastebin.component.html',
  styleUrls: ['./get-pastebin.component.scss']
})
export class GetPastebinComponent  extends SharedPage implements OnInit {
  public editorOptions = {
    theme: 'vs-dark',
    scrollBeyondLastLine: false,
    scrollBeyondLastColumn: false,
    contextmenu: false,
    readOnly: true
  };
  public pastebin: Pastebin = new Pastebin();

  constructor(
    private injector: Injector,
    private route: ActivatedRoute,
    private apiPastebinService: ApiPastebinService,
    private router: Router) {
    super(injector);
  }

  ngOnInit(): void {
    this.sharedService.emitPagePastebin(2);

    this.sharedService.updatePastebin.subscribe(() => {
      this.update();
    });

    this.sharedService.savePastebin.subscribe(() => {
      this.update();
    });

    const key = this.route.snapshot.paramMap.get('key');
    if (key !== null) {
      this.apiPastebinService.get(key).subscribe((pastebin: Pastebin) => {
        this.pastebin = pastebin;
      }, () => {
        this.router.navigate(['/new']);
      });
    }
  }

  update() {
    this.router.navigate(['/new'], { queryParams: { code: this.pastebin.code } });
  }
}
