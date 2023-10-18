import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service'
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  implements OnInit{

  email!: string;
  password!: string;
  
  constructor(public modalCtrl: ModalController,private router: Router, private athService: AuthentificationService) {}
  ngOnInit(): void { }

   
    
  async login(){
    const user = {
      email: this.email,
      password: this.password,
    }
    console.log(user);
    this.athService.athu(user).subscribe({next:(response) => {
      
      console.log('connecter');
      this.router.navigate(['/home']);
    },
    error:(err)=>{
      
      console.log(err);
    }
    });
  }

}