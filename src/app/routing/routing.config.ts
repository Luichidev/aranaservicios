import { Routes } from "@angular/router";

import { HomeComponent } from "../views/home/home.component";
import { NosotrosComponent } from "../views/nosotros/nosotros.component";
import { GaleriaComponent } from "../views/galeria/galeria.component";
import { ContactoComponent } from "../views/contacto/contacto.component";
import { NoFoundPageComponent } from "../views/no-found-page/no-found-page.component";


export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'galeria', component: GaleriaComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: '**', component: NoFoundPageComponent}
]
