import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ResearchComponent } from './features/research/research.component';
import { BlogListComponent } from './features/blogs/blog-list/blog-list.component';
import { ViewBlogComponent } from './features/blogs/view-blog/view-blog.component';
import {HttpClientModule} from '@angular/common/http';
import { MarkdownModule, MarkdownService  } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutMeComponent,
    ProjectsComponent,
    ResearchComponent,
    BlogListComponent,
    ViewBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [MarkdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
