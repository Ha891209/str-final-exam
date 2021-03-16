import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();


  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getAll();
  }

  onClickDelete(id: number): void {
    this.userService.remove(id).subscribe(
      () => this.userService.getAll(),

    );
    if (confirm('Are you sure you want to delete this user?')) {
      console.log('The user was deleted to the database.');
    } else {
      console.log('The user was not deleted to the database.');
    }

  }
}
