import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  active = '';

  links = [
    { title: 'Pending', fragment: 'pending' },
    { title: 'Overdue', fragment: 'overdue' },
    { title: 'Finished', fragment: 'finished' },
    { title: 'All', fragment: 'all' },
  ];

  constructor(public route: ActivatedRoute) {}
}
