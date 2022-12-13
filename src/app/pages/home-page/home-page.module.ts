import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { HomePageRoutingModule } from './home-page.routes';
import { HomPageComponent } from './components/hom-page/hom-page.component';

const components = [
  HomPageComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    SharedModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
