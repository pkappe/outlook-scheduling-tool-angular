import { Component } from '@angular/core';
import { RoomService } from './room.service';
import { RoomsComponent } from 'rooms.component';

@Component({
  selector: 'my-app',
  template:
  `<h1>Hello, Welcome to {{ name }}</h1>
  <room-list></room-list>`,
  providers: [ RoomService, RoomsComponent ]
})

export class AppComponent  {
name = 'Outlook Room Scheduling';
}
