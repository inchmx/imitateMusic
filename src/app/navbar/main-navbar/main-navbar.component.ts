import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service'

import { NavItem } from '../navbar'
@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss'],
  providers: [
    NavbarService
  ]
})
export class MainNavbarComponent implements OnInit {

  constructor(private navbarservice: NavbarService) { }


  navItems: Array<NavItem>
  download: NavItem
  selectNavItem: NavItem

  ngOnInit() {
    this.navbarservice.getTopNavItems()
      .then((NAVITEMS): void => {
        this.navItems = NAVITEMS
      })
    this.navbarservice.getNavDownLoad()
      .then((DOWNLOAD): void => {
        this.download = DOWNLOAD
      })
    this.navbarservice.getInitNavItem()
      .then((SELECTNAVITEM): void => {
        this.selectNavItem = SELECTNAVITEM
      })
  }

  onSelectNavItem(selectItem: NavItem): void {
    this.selectNavItem = selectItem
  }

}
