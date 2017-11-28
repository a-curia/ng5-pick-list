import { Injectable } from '@angular/core';

// A great way of sharing data between components is to use the Rxjs BehaviorSubject library. 
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable() //  which means we can import it into other components and access its properties and methods
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();


  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal)
  }
  

}
