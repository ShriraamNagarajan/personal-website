import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ResearchComponent } from './features/research/research.component';
import { BlogListComponent } from './features/blogs/blog-list/blog-list.component';
import { ViewBlogComponent } from './features/blogs/view-blog/view-blog.component';

const routes: Routes = [
  { path: '', component: AboutMeComponent, pathMatch: 'full' },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'research',
    component: ResearchComponent
  },
  {
    path: 'blog-list',
    component: BlogListComponent
  },
  {
    path: 'blog/:id',
    component: ViewBlogComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
