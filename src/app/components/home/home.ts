import {Component, OnInit, ElementRef, ViewChild, AfterViewInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES],
  pipes: [],
  styles: [require('./home.scss')],
  template: require('./home.html')
})
export class Home implements OnInit, AfterViewInit {

  @ViewChild('groups') groupsElement: ElementRef;
  @ViewChild('list') listElement: ElementRef;
  public timeline: TimelineLite;

  private closed: boolean = false;
  private aniTiming = 0.7;
  constructor(private _el: ElementRef) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
    //this.timeline = new TimelineLite();
  }

  ngAfterViewInit() {
    //this.timeline.to(this.groupsElement.nativeElement, 2, { height: 0 });
  }

  close() {
    console.log('close');

    // if (!this.closed) {
    //   this.timeline.play();
    //   this.closed = true;
    // } else {
    //   this.timeline.reverse();
    //   this.closed = false;
    // }

    TweenMax.to(this.groupsElement.nativeElement, this.aniTiming, { height: 0, position: 'absolute' });
    TweenMax.to(this.listElement.nativeElement, this.aniTiming, { width: this._el.nativeElement.clientWidth, x: '-336px' });

  }

}
