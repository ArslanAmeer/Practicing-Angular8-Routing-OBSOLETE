import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Getting this parameter passed to this component route url
    // this will set for the very first time when component intialized
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
  }
}
