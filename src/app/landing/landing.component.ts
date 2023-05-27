import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('open', style({ transform: 'translateX(0)' })),
      state('close', style({ transform: 'translateX(100%)' })),
      transition('close => open', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s 100ms ease'),
      ]),
      transition('open => close', [
        animate('0.5s 100ms ease', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class LandingComponent implements OnInit {
  sideNavItems = [
    {
      title: 'All Homes',
      path: 'assets/images/icons/airbnb.png',
      highlighted: true,
    },
    {
      title: 'Amazing Views',
      path: 'assets/images/icons/window.png',
      highlighted: false,
    },
    {
      title: 'Tiny Homes',
      path: 'assets/images/icons/house.png',
      highlighted: false,
    },
    {
      title: "Chef's Kitchen",
      path: 'assets/images/icons/cooking.png',
      highlighted: false,
    },
    {
      title: 'Surfing',
      path: 'assets/images/icons/skiing.png',
      highlighted: false,
    },
    {
      title: 'Mansions',
      path: 'assets/images/icons/castle.png',
      highlighted: false,
    },
    {
      title: 'Luxe',
      path: 'assets/images/icons/dinner.png',
      highlighted: false,
    },
    {
      title: 'Treehouses',
      path: 'assets/images/icons/trees.png',
      highlighted: false,
    },
    {
      title: 'Camping',
      path: 'assets/images/icons/tent.png',
      highlighted: false,
    },
    {
      title: 'Beachfronts',
      path: 'assets/images/icons/beach.png',
      highlighted: false,
    },
    {
      title: 'Farms',
      path: 'assets/images/icons/hut.png',
      highlighted: false,
    },
    {
      title: 'Castles',
      path: 'assets/images/icons/fort.png',
      highlighted: false,
    },
    {
      title: 'Islands',
      path: 'assets/images/icons/island.png',
      highlighted: false,
    },
    {
      title: 'Vineyards',
      path: 'assets/images/icons/grapes.png',
      highlighted: false,
    },
    {
      title: 'Amazing pools',
      path: 'assets/images/icons/dive.png',
      highlighted: false,
    },
    {
      title: 'Skiing',
      path: 'assets/images/icons/skateboard.png',
      highlighted: false,
    },
    {
      title: 'Deserts',
      path: 'assets/images/icons/cactus.png',
      highlighted: false,
    },
  ];

  destinations = [
    {
      id: 1,
      name: 'Whitefish Estate',
      address: 'Whitefish, Montana, United States',
      rate: 10000,
      rating: 5,
      imageUrl:
        'https://framerusercontent.com/images/TQv9Req7ZME40dmudtRtkwz9lcQ.webp',
    },
    {
      id: 2,
      name: 'Luxury stay in Weston, Saint James, Barbados',
      address: 'Weston, Saint James, Barbados',
      rate: 1500,
      rating: 5,
      imageUrl:
        'https://framerusercontent.com/images/afIWyPD7bAqXpOTuGYeO4FzrnU.webp',
    },
    {
      id: 3,
      name: 'Numero 22 - Lake Como - Design Living & Lake View',
      address: 'Laglio, Lombardia, Italy',
      rate: 359,
      rating: 4.99,
      imageUrl:
        'https://framerusercontent.com/images/wTSsHOfD0gXYkODZBWWWOfdkw.webp',
    },
    {
      id: 4,
      name: '7,500 sq ft Private Beachfront Estate',
      address: 'Dubai, United Arab Emirates',
      rate: 2478,
      rating: 4.73,
      imageUrl:
        'https://framerusercontent.com/images/3E8SIyOR9oYK20P1hy1BtAelgI.webp',
    },
    {
      id: 5,
      name: 'Bohemian & Spacious / Private Pool and Garden',
      address: 'Tulum, Quintana Roo, Mexico',
      rate: 199,
      rating: 4.97,
      imageUrl:
        'https://framerusercontent.com/images/0RUEx3es60Z3CuB1eFkBxcPxmA.webp',
    },
    {
      id: 6,
      name: 'Designer A-Frame Cabin in the Trees',
      address: 'Lake Arrowhead, California, United States',
      rate: 225,
      rating: 4.93,
      imageUrl:
        'https://framerusercontent.com/images/3fX1fjZlrzbcXKbTqPD7FpY4Z8.webp',
    },
    {
      id: 7,
      name: 'Fully Renovated 2 BR on River w/ Pool - Walk to To',
      address: 'Aspen, Colorado, United States',
      rate: 225,
      rating: 5.0,
      imageUrl:
        'https://framerusercontent.com/images/lIXcszNPyY7PC0yaVFg5TBtmfA.webp',
    },
  ];

  iconNames: string[] = [];
  showInfoPanel = false;
  showSideNavLabels = false;
  showFilterPanel = false;

  constructor(private _renderer: Renderer2) {}

  ngOnInit(): void {}

  toggleInfoPanel(event?: MouseEvent): void {
    if (event) event.stopPropagation();

    window.scrollTo(0, 0);

    this.showInfoPanel = !this.showInfoPanel;

    switch (this.showInfoPanel) {
      case true:
        this._renderer.addClass(document.body, 'no-scroll');
        break;
      case false:
        this._renderer.removeClass(document.body, 'no-scroll');
        break;

      default:
        break;
    }
  }

  toggleFilterPanel(event?: boolean) {
    if (event !== undefined && event !== null) {
      this.showFilterPanel = event;
      return;
    }

    this.showFilterPanel = true;
  }

  enableSideNavLabels(event: MouseEvent): void {
    event.stopImmediatePropagation();
    this.showSideNavLabels = true;
  }

  disableSideNavLabels(event: MouseEvent): void {
    event.stopImmediatePropagation();
    this.showSideNavLabels = false;
  }
}
