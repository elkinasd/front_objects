import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { NavComponent } from '../../shared/components/nav/nav.component';

import { MATERIAL_MODULES } from '../../shared/material-imports';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavComponent, ...MATERIAL_MODULES],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {



}
