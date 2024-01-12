import { Component } from '@angular/core';
import { HomeService } from './services/home.service';
import { AsyncPipe } from '@angular/common';
import { descriptionBlog } from './interfaces/description';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div class="container">
      <h2>Lista de requisição.</h2>
      <ul>
      @for (user of consume$ | async; track user.id) {
            <li>{{ user.name }}</li>
            <li>{{ user.title }}</li>
            <li>{{ user.linkImage }}</li>
            <li>{{ user.description }}</li>
        }
      </ul>
    </div>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public consume$: Observable<Array<descriptionBlog>>;
  constructor(private homeService: HomeService) {
    this.consume$ = this.homeService.getReturn();
  }
}
