import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RegisterObjectsComponent } from './pages/register-objects/register-objects.component';
import { SearchObjectsComponent } from './pages/search-objects/search-objects.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'register-objects', component: RegisterObjectsComponent, canActivate: [AuthGuard] },
  { path: 'search-objects', component: SearchObjectsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'dashboard' }
];
