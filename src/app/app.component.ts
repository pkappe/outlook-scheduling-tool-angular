import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello, Welcome to {{name}}</h1>`,
})
export class AppComponent  { name = 'Outlook Room Scheduling'; }
