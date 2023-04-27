import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
    catalog: any;
    constructor(private http: HttpClient) { }

    ngOnInit(): void {
      this.getData();
    }

    getData() {
      this.http
        .get(
          'https://www.mockachino.com/37a64f27-314f-4c/producer/get-items'
        )
        .subscribe(response => {
          this.catalog = response;
          this.catalog = this.catalog.items;
        })
    }
}
