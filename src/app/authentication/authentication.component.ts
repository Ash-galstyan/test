import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  isNew = false;
  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmit(userData: any): void {
    userData.notificationToken = null;
    if (this.form.valid) {
      this.isNew ? this.authService.loginOrRegister(userData, 'register').subscribe() :
        this.authService.loginOrRegister(userData, 'login').subscribe();
    }
  }

}
