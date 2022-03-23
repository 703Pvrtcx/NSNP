import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Item } from 'src/app/01_Models/item';
import { AdminModalPage } from 'src/app/Modals/admin-modal/admin-modal.page';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  imageURL: "coke.png";

 user: Item[] =[
  {
    key: 1,
    name: "name1",
    description: "description1",
    value: "value1",
    imageURL: "bonaqua-still.png"
  },
  {
    key: 2,
    name: "name2",
    description: "description2",
    value: "value2",
    imageURL: "coke.png"
  },
  {
    key: 3,
    name: "name 3",
    description: "description 3",
    value: "value 3",
    imageURL: "mccafecup.png"
  },
  {
    key: 4,
    name: "name 4",
    description: "description 4",
    value: "value 4",
    imageURL: "orangejuice.png"
  },
  {
    key: 5,
    name: "name 5",
    description: "description 5",
    value: "value 5",
    imageURL: "strawberryshake.jpg"
  }
 ];


  constructor(
    private modalCtrl: ModalController,
    private router:Router) { }

  ngOnInit() {
  }

async openModals(item:Item){

  const modal = await this.modalCtrl.create({
    component: AdminModalPage,
    componentProps: { item },
    cssClass: "card",
  });
  modal.present();
}
openModal(item:Item){
  this.router.navigate(['/admin-modal'] , {queryParams:
       { 
        "key": item.key,
        "name": item.name,
        "description": item.description,
        "value": item.value,
        "imageURL": item.imageURL
      }
    })
  }
}
