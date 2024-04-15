import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  username: string = '';
  userData: any;
  repositories: any[] = [];




  constructor(
    private apiService: ApiService
  ) {}

  searchUser(){
    this.apiService.getUser(this.username).subscribe(data => {
      this.userData = data;}
    );

  }
  getUserRepositories() {
    this.apiService.getRepo(this.username)
      .subscribe((data: any) => {
        this.repositories = data;
      }
      );
    }

  ngOnInit() {
    
  }
}
