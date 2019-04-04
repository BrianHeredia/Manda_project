import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import { ProductInterface } from '../models/product';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  constructor(private dataApi: DataApiService){

  }
  public electronics = [];
  public art = [];
  public beauty = [];
  public cellphones = [];
  public books = [];
  public gentlemen = [];
  public ladys = [];
  public kids = [];
  public sports = [];
  public home = [];
  public health = [];
  public games = [];

  ngOnInit(){

    this.dataApi.getElectronics().subscribe(electronics =>{
      this.electronics = electronics;
    });
    this.dataApi.getArt().subscribe(electronics =>{
      this.art = electronics;
    });
    this.dataApi.getBeauty().subscribe(electronics =>{
      this.beauty = electronics;
    });
    this.dataApi.getCelulares().subscribe(electronics =>{
      this.cellphones = electronics;
    });
    this.dataApi.getBooks().subscribe(electronics =>{
      this.books = electronics;
    });
    this.dataApi.getGentlemen().subscribe(electronics =>{
      this.gentlemen = electronics;
    });
    this.dataApi.getLadys().subscribe(electronics =>{
      this.ladys = electronics;
    });
    this.dataApi.getKids().subscribe(electronics =>{
      this.kids = electronics;
    });
    this.dataApi.getSports().subscribe(electronics =>{
      this.sports = electronics;
    });
    this.dataApi.getHome().subscribe(electronics =>{
      this.home = electronics;
    });
    this.dataApi.getGames().subscribe(electronics =>{
      this.games = electronics;
    });
    this.dataApi.getHealth().subscribe(electronics =>{
      this.health = electronics;
    });
  }
}
