import { Component, Inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(@Inject(Auth) private auth: Auth, private router: Router) {}

  login() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => this.router.navigate(['/']))
      .catch(error => alert(error.message));
  }
}

