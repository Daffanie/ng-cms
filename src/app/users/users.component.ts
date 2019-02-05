import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // Create a users property of type user
  users: User;

  // Inject the UsersService into the constructor
  constructor(private usersService: UsersService) { }

  // Make a call to the service on initialization
  ngOnInit() {
    this.getUsers();
  }

  // Create a local wrapper for
  getUsers(): void{
    this.usersService.getUsers().subscribe(
      (response : any) => {
        this.users = response.users
        //console.log(this.users)
      }
    )
  }
}
