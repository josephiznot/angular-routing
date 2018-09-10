import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";
import Product from "./Product";
import products from "./../../assets/products";
import { Router, ActivatedRoute } from "@angular/router";
import { Route } from "@angular/compiler/src/core";
import { HttpClient, HttpResponse } from "@angular/common/http";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}
  products: Product[] = [];
  selected_product: Product;
  search: string;
  sub: Observable<any>;
  ngOnInit() {
    this.products = products;

    this.sub = this.route.queryParams;

    this.sub.subscribe(params => {
      //subscribes to query params
      this.search = params.product;
      console.log("SEARCH:", this.search);
    });
    this.loadData();
  }
  queryUrl() {
    //Url detects query change
    this.router.navigate(["/products"], {
      queryParams: { product: this.search }
    });
  }
  selectProduct(product: Product) {
    this.selected_product = product;
    this.search = product.product_name;
    this.queryUrl();
  }
  loadData() {
    this.selected_product = this.products.find(
      (e: Product) => e.product_name == this.search
    );
  }
}
