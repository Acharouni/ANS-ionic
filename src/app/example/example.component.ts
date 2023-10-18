import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent  implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  deconnexion() {
    localStorage.clear();
    this.navCtrl.navigateForward('/logout');
  
  }

}
