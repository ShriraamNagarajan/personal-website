import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { ActivatedRoute } from '@angular/router';
import { BlogPostService } from '../services/blog-post.service';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';

declare let stButtons: any; 

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css'],
  providers: [DatePipe]
})
export class ViewBlogComponent implements OnInit, OnDestroy, AfterViewInit{
  id: string  | null = null;
  model?: BlogPost;
  blogPostSubscription?: Subscription;
  paramsSubscription?: Subscription;
  constructor(private blogPostService: BlogPostService, private route: ActivatedRoute, private dataPipe: DatePipe){}
  ngAfterViewInit(): void {
    if (typeof stButtons !== 'undefined') {
      stButtons.makeButtons();
    }
  }
  ngOnDestroy(): void {
    this.blogPostSubscription?.unsubscribe();
    this.paramsSubscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.paramsSubscription= this.route.paramMap.subscribe({
      next: (params) =>{
        this.id = params.get("id");
        if(this.id){
          this.blogPostSubscription=this.blogPostService.getBlogPostById(this.id)
            .subscribe({
              next: (response) => {
                this.model = response;
              }
            })
        }
      }
   

    });
  }

  formatPublishedDate(date: any): string | null {
    return this.dataPipe.transform(date, 'MMMM d, y');
  }

}
