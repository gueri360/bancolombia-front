import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { CloseComponent } from './close/close.component';
import { RandomImgComponent } from './random-img/random-img.component';



@NgModule({
    declarations: [
        UserInfoComponent,
        CloseComponent,
        RandomImgComponent
    ],
    exports: [
        UserInfoComponent,
        CloseComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CommonsComponentModule { }
