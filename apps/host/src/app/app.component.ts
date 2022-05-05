import { Component } from '@angular/core';

@Component({
  selector: 'test-kendo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'host';
  public listItems: Array<string> = [
    'X-Small',
    'Small',
    'Medium',
    'Large',
    'X-Large',
    '2X-Large',
  ];
}
