import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ProduitsComponent } from './produits/produits.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "produits", component: ProduitsComponent},
  {path: "add-produit", component: AddProduitComponent},
  {path: "", redirectTo: "produits", pathMatch: "full"},
  {path: "updateProduit/:id", component: UpdateProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
