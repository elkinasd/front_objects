import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
//Stiles & shared modules
import { NavComponent } from '../../shared/components/nav/nav.component';
import { MATERIAL_MODULES } from '../../shared/material-imports';
//Service
import { RegisterObjectServiceService } from '../../services/register-object-service/register-object-service.service';
import { LostObject } from '../../interface/objects-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-objects',
  imports: [NavComponent, ...MATERIAL_MODULES, ReactiveFormsModule, CommonModule],
  templateUrl: './search-objects.component.html',
  styleUrls: ['./search-objects.component.scss']
})
export class SearchObjectsComponent implements OnInit {
  private registerObject = inject(RegisterObjectServiceService);

  displayedColumns: string[] = ['position', 'objectName', 'description', 'foundLocation'];
  dataSource = new MatTableDataSource<LostObject>([]);
  searchForm!: FormGroup;
  objects: LostObject[] = [];

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.searchObject();
    this.getObjetcs();
  }

  getObjetcs() {
    this.registerObject.getObject().subscribe({
      next: (response) => {
        this.dataSource.data = response;
        this.dataSource.filter = this.searchForm.get('search')?.value.trim().toLowerCase();
      },
      error: (error) => {
        console.error('Error al obtener los objetos:', error);
      },
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  searchObject() {
    this.searchForm = this.fb.group({
      search: ['']
    });
    this.searchForm.get('search')?.valueChanges.subscribe(value => {
      this.applyFilter(value);
    });
  }
}
