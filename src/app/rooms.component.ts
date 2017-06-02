import { RoomService } from './room.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'room-list',
  template: `<h2> Room List</h2>
            <ul *ngFor = "let room of rooms">
              <li>{{room.name}}</li>
            </ul>`
})

export class RoomsComponent implements OnInit {
  rooms = [];

  constructor(private _roomService: RoomService){}
  ngOnInit(){
    this._roomService.getRooms()
    .subscribe(resRoomData => this.rooms = resRoomData);
    console.log(rooms);
  }
}
