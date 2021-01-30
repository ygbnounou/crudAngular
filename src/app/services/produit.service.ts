import { Produit } from './../model/produit.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits: Produit[];
  produit;

  constructor() {
    this.produits = [
      {
        idProduit: 1,
        nomProduit: "PC Asus",
        prixProduit: 3000.600, 
        dateCreation: new Date("01/14/2011")
      },
      {
        idProduit: 2, 
        nomProduit: "Imprimante Epson",
        prixProduit: 450,
        dateCreation: new Date("12/17/2010")
      },
      {
        idProduit: 3, 
        nomProduit: "Tablette Samsung",
        prixProduit: 900.123,
        dateCreation: new Date("02/20/2020")
      }
    ]
   }

   listeProduits():Produit[] {
     return this.produits;
   }

   ajouterProduit( prod:Produit){
     this.produits.push(prod);
   }

   supprimerProduit(produit: Produit){
     const index = this.produits.indexOf(produit, 0);
     if( index > -1 ) this.produits.splice(index, 1)
   }

   consulterProduit(id: number): Produit{
     this.produit = this.produits.find(p => p.idProduit == id);
        return this.produit;
   }

   updateProduit(produit:Produit){
     this.supprimerProduit(produit);
     this.ajouterProduit(produit);
     this.trierProduits();
   }

   trierProduits(){
     this.produits = this.produits.sort((n1, n2) => {
       if (n1.idProduit > n2.idProduit) {
         return 1;
       }
       if (n1.idProduit < n2.idProduit) {
         return -1;
       }
       return 0;
     });
   }
}
