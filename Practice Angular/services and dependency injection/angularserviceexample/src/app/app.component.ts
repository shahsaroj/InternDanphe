import { Component } from '@angular/core';
import { FruitListComponent } from './fruit-list/fruit-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularserviceexample';
onDelete:((FruitListComponent: 0, index: 1) => undefined) | undefined;
dataArray: any;
}
