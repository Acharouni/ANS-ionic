import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthentificationService } from '../service/authentification.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit { agreePrivacy: boolean = false;
  user = {
    name: '',
    username: '',
    email: '',
    password: ''
  };
  signupError: string = '';

  constructor(public modalCtrl: ModalController, private router: Router, public authService: AuthentificationService) {}
  ngOnInit() { }

  async dismiss() {
    return await this.modalCtrl.dismiss();
  }


  async register(signupForm: NgForm) {
    if (signupForm.valid && !this.agreePrivacy) {
      const user = {
        name: this.user.name,
        username: this.user.username,
        email: this.user.email,
        password: this.user.password,
        blocked: false,
        address: 'TUNISIA',
        valid: false,
        role: [
          {
            id: 1,
            name: 'ROLE_Employee',
          },
        ],
      };
      this.authService.createUser(user).subscribe({next: (response) => {
          console.log('Signup successful:', response);
          this.router.navigate(['/login']);
      },error:(err)=>{
        console.log(err);
      }
      });
  }

  

}
  }
