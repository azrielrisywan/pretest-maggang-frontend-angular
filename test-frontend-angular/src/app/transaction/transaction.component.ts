import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
    transactions: any;
  
    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.getData();
    }

    getData() {
      this.http
        .get(
          'https://test-frontend-angular-68cde-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
        )
        .pipe(map((response) => {
          let posts = [];
          let postValues = Object.values(response);
          for (let key in postValues) {
            posts.push({...postValues[key], key});
          }
          return posts;
        }))
        .subscribe(response => {
          this.transactions = response;
        })
    }
}
