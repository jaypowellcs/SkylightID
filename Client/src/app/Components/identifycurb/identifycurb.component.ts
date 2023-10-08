import { Component, OnInit } from '@angular/core';
import { CurbmountService } from 'src/app/Services/curbmount.service';
import { CurbMount } from 'src/app/Models/curbmount.model';

@Component({
  selector: 'app-identifycurb',
  templateUrl: './identifycurb.component.html',
  styleUrls: ['./identifycurb.component.css'],
})
export class IdentifycurbComponent implements OnInit {
  curbMount?: CurbMount[];

  constructor(private curbMountService: CurbmountService) {}

  ngOnInit() {
    this.curbMountService.getAll().subscribe({
      next: (data) => {
        this.curbMount = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
