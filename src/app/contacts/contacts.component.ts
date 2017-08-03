import { Component, OnInit, ElementRef, Inject } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit {

  constructor(private _elRef: ElementRef, @Inject('Window') window: Window) {}

  ngOnInit() {
    $('#numberSpan').click(function() {
      $('#numberInput').fadeToggle('slow', 'linear');
    })

    $('#linkedinSpan').click(function() {
      $('#linkedinDiv').fadeToggle('slow', 'linear');
    });
  }
}
