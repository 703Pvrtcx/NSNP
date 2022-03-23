import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Item } from 'src/app/01_Models/item';

@Component({
  selector: 'app-admin-modal',
  templateUrl: './admin-modal.page.html',
  styleUrls: ['./admin-modal.page.scss'],
})
export class AdminModalPage implements OnInit {

  item:Item;
  constructor(
    private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute,
  ) { 
    this.item = new Item();
    this.activatedRoute.queryParams.subscribe(data => {
     
      this.item.key = data["key"];
      this.item.name = data["name"];
      this.item.value = data["value"];
      this.item.description = data["description"];
      this.item.imageURL = data["imageURL"];
   
      // console.log(this.item);
      
    }) 
  }

  ngOnInit() {
   
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
