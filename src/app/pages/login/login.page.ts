import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {LoadingController} from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
declare const signUpButton  : any;
declare const signInButton  : any;


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  returnUrl: string;
  authState: boolean;
  userForm: FormGroup;
  user = this.api.getCurrentUser();
  posts = [];


  constructor(private authService: AuthService,
              private loadingController: LoadingController,
              private route: ActivatedRoute,
              private router: Router,
              private api: ApiService,
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || null;
    this.authService.authState$.subscribe(state => {
      this.authState = state;

      if (this.authState) {
        if (this.returnUrl !== null) {
          this.router.navigateByUrl(this.returnUrl).then();
        } else {
          this.router.navigateByUrl('/').then();
        }

      }
    })
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: ['', Validators.required]
    });
  }

  onUp() {
    signUpButton();
  }

  onIn(){
    signInButton();

  }

  async openPwReset() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot password?',
      message: 'Enter your email or username to retrieve a new password',
      inputs: [
        {
          type: 'text',
          name: 'usernameOrEmail'
        }
      ],
      buttons: [
        {
          role: 'cancel',
          text: 'Back'
        },
        {
          text: 'Reset Password',
          handler: (data) => {
            this.resetPw(data['usernameOrEmail']);
          }
        }
      ]
    });
  
    await alert.present();
  }

  resetPw(usernameOrEmail) {
    this.api.resetPassword(usernameOrEmail).subscribe(
      async res => {
        const toast = await this.toastCtrl.create({
          message: res['message'],
          duration: 2000
        });
        toast.present();
      },
      err => {
        this.showError(err);
      }
    );
  }

  login(loginForm: NgForm) {

    if (loginForm.invalid) {
      return;
    }
     else {
      const {email, password} = loginForm.value;
      this.authService.login(email, password).then();
    }
  }

  signUp() {
    this.api.signUp(this.userForm.value.username, this.userForm.value.email, this.userForm.value.password).subscribe(
      async res => {
          const toast = await this.toastCtrl.create({
            message: res['message'],
            duration: 3000
          });
          toast.present();
      },
      err => {
        this.showError(err);
      }
    );
  }
 
  async showError(err) {
    const alert = await this.alertCtrl.create({
      header: err.error.code,
      subHeader: err.error.data.status,
      message: err.error.message,
      buttons: ['OK']
    });
    await alert.present();
  }


}
