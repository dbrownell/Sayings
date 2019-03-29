import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-suggested-saying',
  templateUrl: './suggested-saying.component.html',
  styleUrls: ['./suggested-saying.component.scss']
})
export class SuggestedSayingComponent implements OnInit {
  suggestionsForm: FormGroup;
  constructor() {
    this.suggestionsForm = this.createForm();
  }

  ngOnInit() {}

  createForm() {
    return new FormGroup({
      name: new FormControl(''),
      suggestion: new FormControl('', Validators.required)
    });
  }
  reSet() {
    console.log('Cancel Button Clicked!');
  }
}
