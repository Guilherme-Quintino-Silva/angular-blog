import { Component, OnInit } from '@angular/core';
import { ListComponent } from './list/list.component';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public listBlog: any = new FormGroup('');
  constructor(public formBuilder: FormBuilder) { }
  ngOnInit() {
    this.listBlog = this.formBuilder.group({
      name: [''],
      title: [''],
      image: [''],
      describe: ['']
    })
  }
  sendForm(): void {
    alert('Olá mundo!');
  }
}
