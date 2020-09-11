import { Component, OnInit } from '@angular/core';
import { UserRequestService } from '../user-request.service';

import { Repository } from '../repository'

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repository: Repository[];

  

  constructor() { }

  ngOnInit(): void {
  }

}
