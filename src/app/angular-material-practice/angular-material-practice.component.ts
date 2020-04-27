import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-material-practice',
  templateUrl: './angular-material-practice.component.html',
  styleUrls: ['./angular-material-practice.component.scss']
})
export class AngularMaterialPracticeComponent implements OnInit {

  notifications: number = 7;

  constructor() { }


  ngOnInit() {
  }

}
