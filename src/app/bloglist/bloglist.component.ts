import { Component, OnInit } from '@angular/core';
// de bt5leni amsk kol eldata ali fe file json 3n trik blogList de
import blogList from "../../assets/blogs.json";
import { Blog } from '../interfaces/blog';
@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
blogs: Blog[]=blogList
  constructor() { }

  ngOnInit(): void {
  }

}
