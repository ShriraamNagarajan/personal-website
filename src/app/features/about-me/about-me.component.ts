import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  ngOnInit(): void {
    const options = {
      strings: [
        "Shriraam <br><span style='color:#EAB308;'>Nagarajan</span>"
      ],
      typeSpeed: 100,
      showCursor: false,
      loop: false
    };
    new Typed('#type-element', options);
  }
  

}
