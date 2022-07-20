import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './pages/parent/parent.component';

const routes: Routes = [
  { path:'parent', component: ParentComponent },
  { path:'**', pathMatch: 'full', redirectTo: 'parent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
