import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  //encapsulation: ViewEncapsulation.Emulated: To use shadow DOM, so the html or css code i make doesn't show to
  //the world. Emulated emulates the shadow DOM, Native uses the native shadow DOM, which not works in all browsers.
  //Shadow DOM makes his own scope, so the libraries defined in the application does not work in the shadow code.

  
  //inputs: ['isFavorite'] Another approach of make an input property, but is not very performant because
  //of the string. If you change the name of the variable, you will have to change the string.
})
export class FavoriteComponent {

  @Input('is-favorite') isSelected: boolean;
  @Output() change = new EventEmitter();

  onClick(){
    this.isSelected = !this.isSelected;
    this.change.emit({newValue: this.isSelected});
  }
}
