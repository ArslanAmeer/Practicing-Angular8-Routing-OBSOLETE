import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs'; // For Subscrition of parameters

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  // A variable holding subscription to Destroy or remove Subscription on Component Destroy later
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Getting this parameter passed to this component route url
    // this will set for the very first time when component intialized
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };

    // This is to subscribe to paramaters change when remain on same component
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }

  // TO Destroy or remove Subscription on Component Destroy
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
