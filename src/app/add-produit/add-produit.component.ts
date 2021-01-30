import { ProduitService } from './../services/produit.service';
import { Produit } from './../model/produit.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {

  newProduit = new Produit();

  constructor(private ProduitService: ProduitService,
              private router: Router ) { }

  addProduit(){
    this.ProduitService.ajouterProduit(this.newProduit);
    this.router.navigate(['produits']);
  }
  
  ngOnInit(): void {
  }

}
