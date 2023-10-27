import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelfFlashed } from 'src/app/Models/selfflashed.mount';
import { SelfflashedService } from 'src/app/Services/selfflashed.service';

@Component({
  selector: 'app-selfcal',
  templateUrl: './selfcal.component.html',
  styleUrls: ['./selfcal.component.css'],
})
export class SelfcalComponent {
  constructor(private selfFlashService: SelfflashedService) {}

  selfFlash?: SelfFlashed;

  measurementForm = new FormGroup({
    row: new FormControl('', Validators.required),
    roh: new FormControl('', Validators.required),
  });

  submitted = false;
  showMenu = false;
  showSelfSize = false;
  customSelf = false;

  onSubmit() {
    this.submitted = true;
    this.showMenu = !this.showMenu;

    let roh = Number(this.measurementForm.value.roh);
    let row = Number(this.measurementForm.value.row);

    this.whichSelf(row, roh);
    console.log(this.whichSelf(row, roh));
    this.measurementForm.reset();
    this.showSelfSize = false;
  }

  onReset() {
    this.customSelf = false;
    this.submitted = true;
    this.showMenu = !this.showMenu;
    this.showSelfSize = false;
  }

  whichSelf(a: number, b: number) {
    if (a >= 21.5 && a <= 23 && b >= 21.5 && b <= 23) {
      this.selfFlashService.get(1).subscribe({
        next: (data) => {
          this.selfFlash = data;
          console.log(data);
          this.showSelfSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 21.5 && a <= 23 && b >= 29.5 && b <= 31) {
      this.selfFlashService.get(2).subscribe({
        next: (data) => {
          this.selfFlash = data;
          console.log(data);
          this.showSelfSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 21.5 && a <= 23 && b >= 45.5 && b <= 47) {
      this.selfFlashService.get(3).subscribe({
        next: (data) => {
          this.selfFlash = data;
          console.log(data);
          this.showSelfSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 29.5 && a <= 31 && b >= 29.5 && b <= 31) {
      this.selfFlashService.get(4).subscribe({
        next: (data) => {
          this.selfFlash = data;
          console.log(data);
          this.showSelfSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 29.5 && a <= 31 && b >= 45.5 && b <= 47) {
      this.selfFlashService.get(5).subscribe({
        next: (data) => {
          this.selfFlash = data;
          console.log(data);
          this.showSelfSize = true;
        },
        error: (e) => console.error(e),
      });
    } else if (a >= 45.5 && a <= 47 && b >= 45.5 && b <= 47) {
      this.selfFlashService.get(6).subscribe({
        next: (data) => {
          this.selfFlash = data;
          console.log(data);
          this.showSelfSize = true;
        },
        error: (e) => console.error(e),
      });
    } else {
      this.customSelf = true;
    }
  }
}
