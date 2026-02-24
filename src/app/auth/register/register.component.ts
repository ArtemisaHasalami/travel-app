import { Component, Inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email = '';
  password = '';

  constructor(@Inject(Auth) private auth: Auth, private router: Router) {}

  register() {
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => {
        alert('User successfully registered!');
        this.router.navigate(['/login']); 
      })
      .catch(error => {
        alert(error.message);
      });
  }
}
