import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private toastr: ToastrService, private http: HttpClient) { }

  onCheckout(form: NgForm) {
    console.log("Checkout");
    const postData = {
      items: ["Bola", "Dumbbell"]
    }
    this.http
      .post(
        'https://test-frontend-angular-68cde-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', 
        postData
      )
      .subscribe(response => {
      console.log(response);
    })
    this.toastr.success('Form submitted successfully');
    form.resetForm
  }

}
