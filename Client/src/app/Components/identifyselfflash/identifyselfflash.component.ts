
import { Component, OnInit } from '@angular/core';
import { SelfFlashed } from 'src/app/Models/selfflashed.mount';
import { SelfflashedService } from 'src/app/Services/selfflashed.service';

@Component({
  selector: 'app-identifyselfflash',
  templateUrl: './identifyselfflash.component.html',
  styleUrls: ['./identifyselfflash.component.css']
})
export class IdentifyselfflashComponent implements OnInit {
  selfFlashed?: SelfFlashed[];

  constructor(private selfFlashedService: SelfflashedService) {}

  ngOnInit() {
    this.selfFlashedService.getAll().subscribe({
      next: (data) => {
        this.selfFlashed = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
