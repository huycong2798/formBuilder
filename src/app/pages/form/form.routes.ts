import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoutingPath } from "src/app/configs/constants";
import { FormAnswersComponent } from "./components/form-answers/form-answers.component";
import { FormBuilderComponent } from "./components/form-builder/form-builder.component";

export const ROUTES: Routes = [
    {
        path: `${RoutingPath.BUILDER}`,
        component: FormBuilderComponent
    },
    {
        path: `${RoutingPath.ANSWERS}`,
        component: FormAnswersComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class FormRoutingModule {}