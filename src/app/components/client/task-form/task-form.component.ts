import {Component, Input} from '@angular/core';
import {UserService} from "../../../core/services/user/user.service";
import {UserModel} from "../../../core/models/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../../../core/services/client/client.service";
import keyword_extractor from "keyword-extractor";
import {flatMap, from, map, mergeMap, reduce} from "rxjs";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  taskForm: FormGroup;
  doers: any;
  @Input() userInfo: UserModel

  dirtyDoersArray: any

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService) {
    this.taskForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]],
      clientId: ['', [Validators.required]],
      abilityId: [[]],

    });
  }

  onSubmit () {

  }

  loadDoers () {

    const keywors = keyword_extractor.extract(this.taskForm.get('description')?.value,{
      language:"spanish",
      remove_digits: true,
      return_changed_case:true,
      remove_duplicates: false
    });

    console.log(keywors)
    this.clientService.getDoersByKeyWords(keywors)
      .pipe(
        reduce((result: any[], objeto: any) => {
          console.log(result);
          return result.concat(objeto.items);
        }, [])
      )
     .subscribe(res=> {
        console.log(res)
     })


    console.log(this.dirtyDoersArray)

  }


}
