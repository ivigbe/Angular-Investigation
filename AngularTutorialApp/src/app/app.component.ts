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

  courses = [1, 2];

  coursesStr = [];

  viewMode = 'map';

  apps;

  canSave = true;

  task = {
    title: 'Review Applications',
    assignee: {
      name: 'Ivan Belleil'
    }
  }

  onFavoriteChanged(eventArgs: { newValue: boolean }){
    console.log("changed", eventArgs);
  }

  onAdd(){
    this.apps.push({ id: 4, name: "app4" });
  }

  onRemove(app){
    let index = this.apps.indexOf(app);
    this.apps.splice(index, 1);
  }

  loadApps(){
    this.apps = [
      { id: 1, name:'app1' },
      { id: 2, name:'app2' },
      { id: 3, name:'app3' }
    ]
  }

  trackApp(index, app){
    app ? app.id : undefined;
  }
}
