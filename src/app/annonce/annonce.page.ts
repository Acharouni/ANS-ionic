import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AnnonceService } from '../service/annonce.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.page.html',
  styleUrls: ['./annonce.page.scss'],
})
export class AnnoncePage implements OnInit {
  title!: string;
  description!: string;
  categorie!: string;
  Fannonc! : FormGroup;
  constructor(public modalCtrl: ModalController,private router: Router, private addAnnService: AnnonceService,private formBuilder: FormBuilder) {}
  ngOnInit(): void {    this.Fannonc = this.formBuilder.group({
    title: this.formBuilder.control(""),
    description: this.formBuilder.control(""),
    categorie: this.formBuilder.control(""),
  })}

   
    
saveAnnonce(){
    let annonce = this.Fannonc.value
    console.log(annonce);
    this.addAnnService.createAnn(annonce).subscribe({next:(response) => {
      
      console.log('annonce ajouter');
      this.router.navigate(['/home']);
    },
    error:(err)=>{
      
      console.log(err);
    }
    });
  }

}