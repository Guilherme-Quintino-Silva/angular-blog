import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { DescriptionBlog } from '../interfaces/description';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(public http: HttpClient) { }

  public getReturn(): Observable<Array<DescriptionBlog>> {
    return this.http.get<Array<DescriptionBlog>>('http://localhost:3000/resumes');
  }

  public sendData(data: DescriptionBlog): Observable<DescriptionBlog> {
    const newData: DescriptionBlog = {
      name: data.name,
      title: data.title,
      linkImage: data.linkImage,
      description: data.description
    }
    console.log('Teste ', newData);
    return this.http.post<DescriptionBlog>('http://localhost:3000/resumes', newData);
  }

  public removeData(id: any): Observable<DescriptionBlog> {
    return this.http.delete<DescriptionBlog>(`http://localhost:3000/resumes/${ id }`);
  }
}
