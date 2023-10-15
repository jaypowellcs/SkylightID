
import { Component, OnInit } from '@angular/core';
import { DeckmountService } from 'src/app/Services/deckmount.service';
import { DeckMount } from 'src/app/Models/deckmount.model';

@Component({
  selector: 'app-identifydeck',
  templateUrl: './identifydeck.component.html',
  styleUrls: ['./identifydeck.component.css']
})
export class IdentifydeckComponent implements OnInit {
  deckMount?: DeckMount[];

  constructor(private deckMountService: DeckmountService) {}

  ngOnInit() {
    this.deckMountService.getAll().subscribe({
      next: (data) => {
        this.deckMount = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
