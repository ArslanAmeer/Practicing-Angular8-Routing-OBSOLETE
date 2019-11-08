import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit() {
    // this.errorMessage = this.router.snapshot.data['message'];
    this.router.data.subscribe((data: Data) => {
      this.errorMessage = data['message'];
    });
  }

}
