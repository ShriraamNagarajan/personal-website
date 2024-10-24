import { Component, OnDestroy, OnInit } from '@angular/core';
import AOS from 'aos';
import { BlogPost } from '../models/blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  providers: [DatePipe]
})
export class BlogListComponent implements OnInit, OnDestroy{
  blogPosts?: BlogPost[];
  blogPostSubscription?: Subscription;
  constructor(private blogPostService: BlogPostService, private datePipe: DatePipe){ }
  ngOnDestroy(): void {
    this.blogPostSubscription?.unsubscribe();
  }
  ngOnInit(): void {

    this.blogPostSubscription = this.blogPostService.getBlogPosts()
      .subscribe({
        next: (response) =>{
          this.blogPosts = response;
        }

      });

    //initialize animate on scroll
      AOS.init();
  }

  formatPublishedDate(date: any): string | null {
    return this.datePipe.transform(date, 'MMMM d, y');
  }

}
