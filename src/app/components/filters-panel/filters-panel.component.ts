import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-filters-panel',
  templateUrl: './filters-panel.component.html',
  styleUrls: ['./filters-panel.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      // state('close', style({ transform: 'translateX(100%)' })),
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s 100ms ease'),
      ]),
      transition(':leave', [
        animate('0.5s 100ms ease', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class FiltersPanelComponent implements OnInit {
  @Input()
  show!: boolean;

  @Output()
  onClickEvent: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {}

  @HostListener('click', ['$event.target'])
  onClick() {
    this.onClickEvent.emit(false);
  }
}
