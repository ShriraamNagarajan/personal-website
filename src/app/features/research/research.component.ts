import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }


}
