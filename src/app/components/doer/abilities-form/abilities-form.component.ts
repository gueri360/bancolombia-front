import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DoerService} from "../../../core/services/doer/doer.service";
import {delay, take, tap} from "rxjs";

@Component({
  selector: 'app-abilities-form',
  templateUrl: './abilities-form.component.html',
  styleUrls: ['./abilities-form.component.scss']
})
export class AbilitiesFormComponent {
  abilitiesForm: FormGroup;
  error =false;
  created = false;
  @Input() doerId: string

  constructor(
    private formBuilder: FormBuilder,
    private doerService: DoerService
  ) {
    this.abilitiesForm = this.formBuilder.group({
      doerId: [this.doerId],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      range: ['', [Validators.required]],
    });

  }


  onSubmit() {
    this.abilitiesForm.get('doerId')?.setValue(this.doerId)
    this.doerService.createAbilities(this.abilitiesForm.value)
      .pipe(take(1),
        tap(() => {
          this.abilitiesForm.reset()
          this.created = true;
        }),
        delay(5000),
        tap(() => {

          this.created = false;
        }))
      .subscribe();

  }

  aux() {
    // this.doerService.getAbilitiesList()
    //   .pipe(take(1))
    //   .subscribe(console.log)
  }


}
