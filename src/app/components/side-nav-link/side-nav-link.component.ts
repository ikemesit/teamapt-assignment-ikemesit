import {
  Component,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-side-nav-link',
  templateUrl: './side-nav-link.component.html',
  styleUrls: ['./side-nav-link.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SideNavLinkComponent implements OnChanges {
  @Input()
  assetPath!: string;

  @Input()
  highlighted!: boolean;

  @Input()
  title!: string;

  @Input()
  expanded!: boolean;

  ngOnChanges(changes: SimpleChanges): void {}

  // @HostListener('mouseover', ['$event.target'])
  // onHover() {
  //   this.expanded = true;
  // }

  // @HostListener('mouseout', ['$event.target'])
  // onMouseOut() {
  //   this.expanded = false;
  // }
}
