import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceService } from '../service/annonce.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  annoncesTrr: any[] = [];
  annoncesMoto: any[] = [];
  
  constructor(private annServ: AnnonceService, private router: Router) {}

  ngOnInit(): void {
    this.annServ.GetAnn().subscribe((res) => {
      console.log(res);
  
      if (res) {
        res.forEach((element: { categorie: string; }) => {
          if (element.categorie === "Trottinette") {
            this.annoncesTrr.push(element);
          } else {
            this.annoncesMoto.push(element);
          }
        });
      }
    });
  }

  showtrottinetteContent = true;
  showMotorcycleContent = false;

  showtrottinette() {
    this.showtrottinetteContent = true;
    this.showMotorcycleContent = false;
  }

  showMotorcycle() {
    this.showtrottinetteContent = false;
    this.showMotorcycleContent = true;
  }
}
