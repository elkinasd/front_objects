import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//Stiles & shared modules
import { NavComponent } from '../../shared/components/nav/nav.component';
import { MATERIAL_MODULES } from '../../shared/material-imports';

//Service

import { RegisterObjectServiceService } from '../../services/register-object-service/register-object-service.service';
import { LostObject } from '../../interface/objects-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-objects',
  imports: [NavComponent, ...MATERIAL_MODULES, ReactiveFormsModule, CommonModule],
  templateUrl: './register-objects.component.html',
  styleUrls: ['./register-objects.component.scss']
})
export class RegisterObjectsComponent implements OnInit {
  objectsRegisterForm!: FormGroup;
  contact: any;
  private registerObject = inject(RegisterObjectServiceService);

  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.contact = localStorage.getItem('email');
    this.initRegisterObjectForm();
  }

  initRegisterObjectForm() {
    this.objectsRegisterForm = this.fb.group({
      objectName: ['', Validators.required],
      description: ['', Validators.required],
      foundDate: ['', Validators.required],
      foundLocation: ['', Validators.required],
      contact: [this.contact, Validators.required]
    });
  }

  sendHome(){
    this.router.navigate(['/dashboard'])
  }

  sendForm(): void {
    if (this.objectsRegisterForm.valid) {
      const objectData = this.objectsRegisterForm.value;
      this.registerObject.registerObject(objectData).subscribe({
        next: (response) => {
          if(response){
            alert('Objeto agregado con éxito');
            this.router.navigate(['/search-objects'])
          }
        },
        error: (error) => {
          console.log(error)
        }
      });
    }
  }
}
