import {Component, Input, OnInit} from '@angular/core';
import {DoerService} from "../../../core/services/doer/doer.service";
import {Observable} from "rxjs";
import {AbilitiesDoerModels} from "../../../core/models/abilities-doer.models";

@Component({
  selector: 'app-abilitie-list',
  templateUrl: './abilitie-list.component.html',
  styleUrls: ['./abilitie-list.component.scss']
})
export class AbilitieListComponent implements OnInit{

  @Input() doerId: string;
  list$: Observable<AbilitiesDoerModels []>
  constructor(private doerServices: DoerService) {
  }


  ngOnInit() {
    console.log(this.doerId)
    this.list$ = this.doerServices.getAbilitiesList(this.doerId);
  }
}
