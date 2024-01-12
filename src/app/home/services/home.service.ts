import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { DescriptionBlog } from '../interfaces/description';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(public http: HttpClient) {}
  public getReturn(): Observable<Array<DescriptionBlog>> {
    return this.http.get<Array<DescriptionBlog>>('http://localhost:3000/resumes');
  }
}
