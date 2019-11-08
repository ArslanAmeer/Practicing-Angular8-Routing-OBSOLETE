import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs';

import {ServersService} from '../servers.service';
import {CanComponentDeactivate} from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams); // fetching queryParams & fragment.We can also subscribe to direct observable route.params
    console.log(this.route.snapshot.fragment);  // fetching queryParams & fragment.We can also subscribe to direct observable route.params
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.queryParams.subscribe((queryParams: Params) => {
      // fetching queryParams 'allowEdit' to check if user is allowed to edit specified server component
      this.allowEdit = queryParams['allowEdit'] === '1';
    });
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do You Want to Discard Changes?');
    } else {
      return true;
    }


  }

}
