import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // used for parameters
import { Router } from '@angular/router'; // sometimes we need to change router outlet component based on logic occuring in a component class

// import service
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // constructor(private route: ActivatedRoute, private router: Router) {
  //   this.route.params.subscribe(res => console.log(res.id));
  // }

  // ngOnInit() {
  // }

  // sendMeHome() {
  //   this.router.navigate(['']);
  // }

  // use the service
  goals: any;
  
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { 
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
