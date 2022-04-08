import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './pages/files/files.component';

const routes: Routes = [{ path: 'files', component: FilesComponent }];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	declarations: [FilesComponent],
})
export class AppRoutingModule {}
