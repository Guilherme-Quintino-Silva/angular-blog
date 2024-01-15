import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from '../services/home.service';
import { DescriptionBlog } from '../interfaces/description';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public consume$: Observable<Array<DescriptionBlog>>;
  constructor(private homeService: HomeService) {
    this.consume$ = this.homeService.getReturn();
  }

  deleteBlog(id: any): void {
    this.homeService.removeData(id).subscribe({
      next: () => {
        alert('Dados removidos com sucesso.');
      },
      error: (err) => console.log(err)
    });
  }
}
