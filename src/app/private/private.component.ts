import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-private',
  standalone: true,
  imports: [CommonModule, UsersComponent],
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss'],
})
export class PrivateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
