import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {}
  ngOnDestroy() {
    console.log("BYE!!!");
  }
}
