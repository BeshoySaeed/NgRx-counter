import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrease, increase } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nxrx-test';
  number!: number;
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.subscribe((data: any) => (this.number = data.counter.countable));
  }

  plus() {
    this.store.dispatch(new increase(2));
  }

  minus() {
    this.store.dispatch(new decrease(3));
  }
}
