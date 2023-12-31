import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  url!: string;
  bgClass = 'default';

  constructor(private router: Router,private element: ElementRef,private renderer: Renderer2) {
    // router.events.subscribe((val)=>console.log(val));
    this.getHeaderStyle();
  }
  ngOnInit() {
    this.url = this.router.url;
  }
  getHeaderStyle(): string {
    let targetDiv1 = document.getElementById("numberCircle1");
    let targetDiv2 = document.getElementById("numberCircle2");
    let targetDiv3 = document.getElementById("numberCircle3");
    let targetDiv4 = document.getElementById("numberCircle4");
    let l1 = document.getElementById("line1");
    let l2 = document.getElementById("line2");
    let l3 = document.getElementById("line3");
    console.log(l1);
    this.router.events.subscribe(val => {
      if (this.router.url.toString() == "/") {
        console.log(this.router.url.toString());
        targetDiv1?.classList.add("p");
      }
      if (this.router.url.toString() == "/personalDetails") {
        console.log(this.router.url.toString());
        targetDiv1?.classList.add("p");
        

      }
      else if (this.router.url.toString() == "/contactDetails") {
        targetDiv2?.classList.add("c");
        l1?.classList.add("green");
      }
      else if (this.router.url.toString() == "/skill") {
        targetDiv3?.classList.add("s");
        l2?.classList.add("green");
      }
      else if (this.router.url.toString() == "/workExperience") {
        targetDiv4?.classList.add("w");
        l3?.classList.add("green");
      }
      else {
        targetDiv1?.classList.add("a");
        targetDiv1?.classList.add("a");
        targetDiv1?.classList.add("a");
        targetDiv1?.classList.add("a");
      }
    })
    console.log(this.bgClass);
    return this.bgClass;
  }
}
