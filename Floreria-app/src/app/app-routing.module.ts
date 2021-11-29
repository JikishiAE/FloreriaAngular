import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) }, 
                        { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
