import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';
import { FilesComponent } from './pages/files/files.component';
import { PipesModule } from './pipes/pipes-module.module';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [{ path: 'files', component: FilesComponent }];

@NgModule({
	imports: [CommonModule, MaterialModule, PipesModule, RouterModule.forRoot(routes)],
	exports: [MaterialModule, RouterModule],
	declarations: [FilesComponent, LoginComponent],
})
export class AppRoutingModule {}
