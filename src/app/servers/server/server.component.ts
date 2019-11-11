import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';

import {ServersService} from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    // const serverId = +this.route.snapshot.params['id']; // + sign is to cast into integer
    // // passing Id fetched from router params into gertServer function.
    // this.server = this.serversService.getServer(serverId);
    //
    // this.route.params.subscribe(
    //   (param: Params) => {
    //     this.server = this.serversService.getServer(+param['id']);
    //   }
    // );
    // ---- This is to User resolver to fetch some data right before router calling and initializing component
    // this.server =  this.route.data['Server'];
    this.route.data.subscribe((data: Data) => {
      this.server = data['Server'];
    });
  }

  onEdit() {
    // queryParamsHandling: 'preserve' is used to hold previous(or parents) query parameters. while merge used to overwrite with new ones
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
