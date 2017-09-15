import { Injectable } from '@angular/core'
import { Location } from '@angular/common'

import { NavItem } from './navbar'
import { NAVITEMS, DOWNLOAD } from './mock-navbar'

@Injectable()
export class NavbarService {
  getTopNavItems(): Promise<NavItem[]> {
    return Promise.resolve(NAVITEMS)
  }
  getInitNavItem(): Promise<NavItem> {
    return new Promise((resolve, reject): void => {
      const pathname = location.pathname.split('/')[1]
      if (!pathname) {
        resolve(NAVITEMS.find(f => f.url.split('/')[1] == 'home'))
      }
      resolve(NAVITEMS.find(f => f.url.split('/')[1] == pathname))
    })
  }
  getNavDownLoad(): Promise<NavItem> {
    return Promise.resolve(DOWNLOAD)
  }
}
