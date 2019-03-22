import { Component, Input } from '@angular/core';
import { Isayings } from '../shared/isayings';

@Component({
  selector: 'app-sayings-list',
  templateUrl: './sayings-list.component.html',
  styleUrls: ['./sayings-list.component.scss']
})
export class SayingsListComponent {
  @Input() sayings: Isayings[];
}
