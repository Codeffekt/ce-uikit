import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'foxtool-uikit-demo';

  radioValues = [
    {
      id: 0,
      label: "Option 1"
    },
    {
      id: 1,
      label: "Option 2"
    },
    {
      id: 2,
      label: "Option 3"
    }
  ];

  formGroup = inject(FormBuilder).group(
    {
      radioGroup: this.radioValues[0],
      colorPicker: "#ff00ff"
    }
  )

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(_ => console.log(_));
  }
}
