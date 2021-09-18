import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent implements OnInit {

  constructor(
    public modalCtr:ModalController
  ) { }

  options:any;
  header:string;
  prefix:string;

  ngOnInit() {}

  select(option:any){
    this.modalCtr.dismiss(option);
  }

}
