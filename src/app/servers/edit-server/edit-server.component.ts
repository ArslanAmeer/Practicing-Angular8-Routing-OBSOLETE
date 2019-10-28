import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams); // fetching queryParams & fragment.We can also subscribe to direct observable route.params
    console.log(this.route.snapshot.fragment);  // fetching queryParams & fragment.We can also subscribe to direct observable route.params
    this.server = this.serversService.getServer(1);
    this.route.queryParams.subscribe((queryParams: Params) => {
    // fetching queryParams 'allowEdit' to check if user is allowed to edit specified server component
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
