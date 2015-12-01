import { View, Component, bootstrap } from 'angular2/angular2'

import * as Firebase from 'firebase'

@Component({
  selector: 'todo'
})

@View({
  template: `
    <main>
      <h1>Todos</h1>
    </main>
  `
})

export class Todo {
  constructor() {
    new Firebase('https://publicdata-weather.firebaseio.com');
  }
}

bootstrap(Todo);
