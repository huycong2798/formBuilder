import { RoutingPath } from './configs/constants/routing-path.constants';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pages/home-page/home-page.module').then(md => md.HomePageModule)
  },
  {
    path: `${RoutingPath.FORM}`,
    loadChildren: () => import('@pages/form/form.module').then(md => md.FormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
