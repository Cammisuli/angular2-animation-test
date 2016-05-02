import {Component, OnInit, HostBinding, ViewEncapsulation} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES],
  pipes: [],
  styles: [require('./home.scss')],
  template: require('./home.html'),
  encapsulation: ViewEncapsulation.None
})
export class Home implements OnInit {

  @HostBinding('class.groups-closed')
  public groupsClosed = false;

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

  close() {
    console.log('close');
    this.groupsClosed = !this.groupsClosed;
  }

}
