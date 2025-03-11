import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
//Servicio
import { AuthService } from '../../services/auth-service/auth.service';
//Rutas
import { Router } from '@angular/router';
//Módulos material
import { MATERIAL_MODULES } from '../../shared/material-imports';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES
  ],
})
export class LoginComponent {

  form!: FormGroup;
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  constructor(private router: Router) {
    this.initLogin();
  }

  initLogin(){
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terms: [false, Validators.requiredTrue],
    });
  }

  onLogin() {
    if (this.form.valid) {
      const loginData = this.form.value;
      this.authService.login(loginData).subscribe(
        (response) => {
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('email', loginData.email);
          this.router.navigate(['/dashboard'])
        },
        (error) => {
          if(error.statusText === 'Unauthorized') {
            alert('Usuario no autorizado')
          }
          console.error('Error en el login:', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }

}
