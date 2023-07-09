import {Component, Input, OnInit} from '@angular/core';
import {createAvatar} from "@dicebear/core";
import { lorelei } from '@dicebear/collection';

@Component({
  selector: 'app-random-img',
  templateUrl: './random-img.component.html',
  styleUrls: ['./random-img.component.scss']
})
export class RandomImgComponent implements  OnInit{

  @Input() seed: string;
  svg: string;
  avatar:any;

  constructor() {
    this.avatar = createAvatar(lorelei, {
      seed: this.seed
    })
  }
  ngOnInit() {
    this.getImg();
  }

  getImg(){
    // this.svg = this.avatar.toString()
    // console.log(this.svg)

  }




}
