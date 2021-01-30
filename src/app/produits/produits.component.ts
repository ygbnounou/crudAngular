import { Produit } from './../model/produit.model';
import { ProduitService } from './../services/produit.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

  produits: Produit[]; 
  constructor(private produitService: ProduitService) { 
    this.produits = produitService.listeProduits();
  }

  supprimerProduit(produit: Produit){
    let conf = confirm("Etes-vous sur?");
    if (conf)
      this.produitService.supprimerProduit(produit)    
  }
  ngOnInit(): void {
  }

}
