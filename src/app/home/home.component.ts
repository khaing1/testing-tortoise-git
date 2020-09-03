import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  title = 'Food Delivery from the restaurants.Order now! BLahhh are you kidding me';
  search(township: string) {
    this.router.navigate([`/${township}`]);
  }
}
