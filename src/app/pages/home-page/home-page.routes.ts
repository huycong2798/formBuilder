import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomPageComponent } from './components/hom-page/hom-page.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomPageComponent
    },
];


@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class HomePageRoutingModule {}