import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  nameFirst = 'Morgan';
  checked = true;
  lastAction = '';
  count = 0;
  showData = true;
  selectedNumber = 1;

  states: string[] = ['Iowa', 'South Dakota', 'Nebraska', 'Missouri'];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    const results = this.apiService.getData('hello');
  }

  buttonClicked() {
    this.count++;
    this.lastAction = 'Clicked ' + this.count +  'times...';
  }

  addState(state: string) {
    this.states.push(state);
  }

  deleteState(state: string) {
    if (state) {
      this.states.splice(this.states.indexOf(state), 1);
    }
  }
}
