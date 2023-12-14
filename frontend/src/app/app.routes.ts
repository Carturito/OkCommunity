import { Routes, RouterModule } from '@angular/router';
import { ClientCreateComponent } from './clients/components/client-create/client-create.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'client-create', component: ClientCreateComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }