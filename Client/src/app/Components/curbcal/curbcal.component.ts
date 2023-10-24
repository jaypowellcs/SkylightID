import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CurbmountService } from 'src/app/Services/curbmount.service';
import { CurbMount } from 'src/app/Models/curbmount.model';

@Component({
  selector: 'app-curbcal',
  templateUrl: './curbcal.component.html',
  styleUrls: ['./curbcal.component.css'],
})
export class CurbcalComponent {
  
  constructor(private curbMountService: CurbmountService) {}

  curbMount?: CurbMount;

  measurementForm = new FormGroup({
    ocdw: new FormControl('', Validators.required),
    ocdh: new FormControl('', Validators.required),
  });

  submitted = false;
  showMenu = false;
  showCurbSize = false; 
  elseBlock = false; 


  onSubmit() {
    this.submitted = true;
    this.showMenu = !this.showMenu;
    
    let ocdh = Number(this.measurementForm.value.ocdh);
    let ocdw = Number(this.measurementForm.value.ocdw);
    
    this.whichCurb(ocdw, ocdh);
    console.log(this.whichCurb(ocdw, ocdh));
    this.measurementForm.reset();
    this.showCurbSize = false;  
  }

  whichCurb(a: any, b: any) {
    if (a >= 16 && a <= 18.25 && b >= 32 && b <= 34.25) {
      this.curbMountService.get(1).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 16 && a <= 18.25 && b >= 48 && b <= 50.25) {
      this.curbMountService.get(2).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 24 && a <= 26.25 && b >= 24 && b <= 26.25) {
      this.curbMountService.get(3).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
          this.showCurbSize = true; 
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 24 && a <= 26.25 && b >= 32 && b <= 34.25) {
      this.curbMountService.get(4).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 24 && a <= 26.25 && b >= 36 && b <= 38.25) {
      this.curbMountService.get(5).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 24 && a <= 26.25 && b >= 48 && b <= 50.25) {
      this.curbMountService.get(6).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 24 && a <= 26.25 && b >= 72 && b <= 74.25) {
      this.curbMountService.get(7).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 32 && a <= 34.25 && b >= 32 && b <= 34.25) {
      this.curbMountService.get(8).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 32 && a <= 34.25 && b >= 48 && b <= 50.25) {
      this.curbMountService.get(9).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 32 && a <= 34.25 && b >= 57 && b <= 59.25) {
      this.curbMountService.get(10).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 36 && a <= 38.25 && b >= 36 && b <= 38.25) {
      this.curbMountService.get(11).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 36 && a <= 38.25 && b >= 48 && b <= 50.25) {
      this.curbMountService.get(12).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
    }else if (a >= 48 && a <= 50.25 && b >= 48 && b <= 50.25) {
      this.curbMountService.get(13).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 48 && a <= 50.25 && b >= 74 && b <= 76.25) {
      this.curbMountService.get(14).subscribe({
        next: (data) => {
          this.curbMount = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
    } else {
      this.elseBlock = true; 
      console.log(this.elseBlock);
    }
  } 
}
