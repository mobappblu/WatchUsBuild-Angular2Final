import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  @Input() race;

  constructor() { }

  ngOnInit() {
  }

  castDate(date) {
    return new Date(date);
  }

}
