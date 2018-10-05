import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTutorialApp';

  post = {
    title: "Title",
    isSelected: true
  }

  onFavoriteChanged(eventArgs: { newValue: boolean }){
    console.log("changed", eventArgs);
  }
}
