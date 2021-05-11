import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  register;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.register = {
      username: '',
      password: '',
      email: ''
    };
  }

  registerUser() {
    // console.log(this.register);
    // this.dataService.registrUser(this.register)
    //   .subscribe(
    //     response => {
    //       alert('user' + this.register.username + ' has been created');
    //       console.log(response);
    //     },
    //     // error => console.log('error', error);
    // );
  }

}
