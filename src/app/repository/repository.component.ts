import { Component, OnInit } from '@angular/core';
import { UserRequestService } from '../user-request.service';
import { RepositoryService } from '../repository.service'

import { Repository } from '../repository'

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos:any[]=[];

  

  constructor(private repoService:RepositoryService) { }

  ngOnInit(): void {
    this.repoService.getRepos()
    .subscribe((response:any)=>{
      this.repos = response.data;
    });
  }

}
