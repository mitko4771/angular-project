import { Component, OnInit, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-motivation-letter',
  templateUrl: './motivation-letter.component.html',
  styleUrls: ['./motivation-letter.component.less']
})
export class MotivationLetterComponent implements OnInit {

  constructor(private _elRef: ElementRef) { }

  ngOnInit() {  
  }

}
