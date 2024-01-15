import { Component, OnInit } from '@angular/core';
import { ListComponent } from './list/list.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListBlogShared } from './shared/list-blog';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public listBlog: FormGroup = new FormGroup('');
  constructor(
    public formBuilder: FormBuilder,
    public listBlogShared: ListBlogShared,
    public homeService: HomeService
    ) { }
  ngOnInit() {
    this.listBlog = this.formBuilder.group({
      name: [this.listBlogShared.name, [Validators.required]],
      title: [this.listBlogShared.title, [Validators.required]],
      linkImage: [this.listBlogShared.linkImage, [Validators.required]],
      description: [this.listBlogShared.description, [Validators.required]]
    })
  }
  sendForm(): void {
    this.homeService.sendData(this.listBlog.value).subscribe({
      next: () => alert('Dados salvos com sucesso'),
      error: (err) => alert('Houve um erro ao mandar a request: ' + err),
      complete: () => alert('Requisição completada.')
    })
  }

}
