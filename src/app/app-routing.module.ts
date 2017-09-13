import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeIndexComponent } from './home/home-index/home-index.component'
import { MyMusicIndexComponent } from './my-music/my-music-index/my-music-index.component'
import { FriendIndexComponent } from './friend/friend-index/friend-index.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeIndexComponent
  },
  {
    path: 'myMusic',
    component: MyMusicIndexComponent
  },
  {
    path: 'friend',
    component: FriendIndexComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
