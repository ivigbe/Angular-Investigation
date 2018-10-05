import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    <h2>{{title}}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>
    <img [src]="imgUrl" />

    <table>
        <tr>
            <td [attr.colspan]="colSpan"></td>
        </tr>
    </table>

    <div (click)="onDivClicked()">
    <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'white'" 
    (click)="onSave($event)">Save</button>
    </div>

    <input [value]="email" (keyup.enter)="onKeyUp()" /> 
    <!-- keyup.enter fires the event if enter is pressed -->
    <!-- #email is a variable that references the html element, so you can use in the js -->
    <!-- [value]="email": for one way data binding, from the component to the view -->

    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    <!-- [(ngModel)]="email": for two way data binding in "email", changes in the view reflects in the variable
    "email" of the component -->

    <br/>

    {{course.title | uppercase}} <br/> <!-- |(pipe): to pass properties to the field that is showing -->
    {{course.students | number}} <br/>
    {{course.rating | number: '1.2-2'}} <br/> <!-- number: '[numInt].[minDigits]-[maxDigits]' 
    The first arg is the number of integer digits, the second arg is the min digits after the decimal point,
    the third arg is the max after the decimal point -->
    {{course.price | currency: 'ARS': 'symbol-narrow': '3.2-2'}} <br/>
    {{course.releaseDate | date: 'shortDate'}}

    <br/>

    {{text | summary: 10}}
    `
})
export class CoursesComponent{
    title = "List of courses";
    courses;
    imgUrl = "../assets/about-bkg.jpeg";
    colSpan = 2;
    isActive = true;
    email = "me@example.com";

    course = {
        title: "The complete angular course",
        rating: 4.97,
        students: 3,
        price: 190.95,
        releaseDate: new Date(2018, 3, 1)
    }

    text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit ipsum a ante mattis 
    sollicitudin at et enim. Pellentesque lectus ante, tempor nec lobortis id, semper at neque. 
    Quisque a convallis mauris. Orci varius natoque penatibus et magnis dis parturient montes, 
    nascetur ridiculus mus.`

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    onDivClicked(){
        console.log("div was clicked");
    }

    onSave($event){
        $event.stopPropagation();
        console.log("btn clicked", $event);
    }

    onKeyUp(){
        console.log(this.email);
    }
}