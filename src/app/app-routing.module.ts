import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from './material.module';
import { FilesComponent } from './pages/files/files.component';
import { LoginComponent } from './pages/login/login.component';
import { PipesModule } from './pipes/pipes-module.module';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'files', component: FilesComponent },
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
	imports: [CommonModule, MaterialModule, ReactiveFormsModule, PipesModule, RouterModule.forRoot(routes)],
	exports: [MaterialModule, RouterModule],
	declarations: [FilesComponent, LoginComponent],
})
export class AppRoutingModule {}
