import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  @Output() sendCredentials = new EventEmitter<object>;

  sendData() {
    this.sendCredentials.emit({ username: this.username.value, password: this.password.value });
    alert(JSON.stringify({ username: this.username.value, password: this.password.value }));
  }
}
