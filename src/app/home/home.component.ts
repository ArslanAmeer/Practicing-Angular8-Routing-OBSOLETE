import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  loadRouter() {
    // Just Like redirecting to some other page we can redirect with injecting Router in any TS file
    this.router.navigate(['servers']);
  }

  loadServer(id: number) {
    // testing passing QueryParams & fragment programmatically
    this.router.navigate(['servers', id, 'edit'], {queryParams: {allowGet: '2'}, fragment: 'loading2'});
  }
}
