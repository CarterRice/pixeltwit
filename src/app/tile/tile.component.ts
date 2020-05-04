import { Component, OnInit } from '@angular/core';
import {Tile} from '../tile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  tile: Tile = {
    id: 1,
    color: '#FFFFFF'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
