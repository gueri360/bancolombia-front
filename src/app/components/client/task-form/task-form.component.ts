import {Component, Input} from '@angular/core';
import {UserService} from "../../../core/services/user/user.service";
import {UserModel} from "../../../core/models/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../../../core/services/client/client.service";
import keyword_extractor from "keyword-extractor";
import {BehaviorSubject, flatMap, from, map, mergeMap, Observable, of, reduce, take} from "rxjs";
import {AbilitiesDoerModels} from "../../../core/models/abilities-doer.models";
import {NotificationsService} from "../../../core/services/notifcation/notifications.service";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  taskForm: FormGroup;
  step1 = true;
  step2 = false;
  @Input() userInfo: UserModel;
  doerId: string;

  cleanProspects: AbilitiesDoerModels [] = []
  prospect: any[]= [];

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private notifications: NotificationsService) {
    this.taskForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]],
      clientId: ['', [Validators.required]],
      abilityId: ['', Validators.required],
      price: ['', [Validators.required]],
      completed: [false],
      take: [false]
    });
  }

  loadDoers () {

    const keywors = keyword_extractor.extract(this.taskForm.get('description')?.value,{
      language:"spanish",
      remove_digits: true,
      return_changed_case:true,
      remove_duplicates: false
    });

    this.clientService.getDoersByKeyWords(keywors).pipe().subscribe(res=> {
       this.prospect = res.map((userList:any) => {
         return userList.items
       }).flat();
      this.cleanArray();
     })
  }


  cleanArray() {
    this.step1 = false;
    this.step2 = true;
    this.cleanProspects = this.prospect.filter((item, index, array) => {
      return array.findIndex(obj => obj.id === item.id) === index;
    })
    this.recommendPrice()
  }


  recommendPrice () {
    let sum = 0;
    this.cleanProspects.forEach((item: AbilitiesDoerModels)=>{
      sum += item.price;
    })
    let average = Math.ceil(sum/this.cleanProspects.length);
    return average
  }


  selectProspect(id: string, doerId: string) {
    this.taskForm.get('clientId')?.setValue(this.userInfo.id)
    this.taskForm.get('abilityId')?.setValue(id)
    this.doerId= doerId;
  }

  back() {
    this.step1 = true;
    this.step2 = false
  }



  submit () {
        this.clientService.createTaskFromClientSide(this.taskForm.value)
      .pipe(take(1))
      .subscribe(res => {
        this.notifications.createNotification(res.id, this.doerId, this.userInfo.id)
      });


  }

}
