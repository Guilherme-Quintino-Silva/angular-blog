import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ListBlogShared {
  name: string = "";
  title: string = "";
  linkImage: string = "";
  description: string = "";
}
