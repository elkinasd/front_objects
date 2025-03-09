import { Component } from '@angular/core';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { MATERIAL_MODULES } from '../../shared/material-imports';


@Component({
  selector: 'app-register-objects',
  imports: [NavComponent, ...MATERIAL_MODULES],
  templateUrl: './register-objects.component.html',
  styleUrl: './register-objects.component.scss'
})
export class RegisterObjectsComponent {

}
