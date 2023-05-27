import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.scss'],
})
export class DestinationCardComponent {
  @Input()
  name!: string;

  @Input()
  address!: string;

  @Input()
  rate!: number;

  @Input()
  rating!: number;

  @Input()
  imageUrl!: string;

  @Output()
  onClickEvent: EventEmitter<void> = new EventEmitter();

  @HostListener('click', ['$event.target'])
  onClick() {
    this.onClickEvent.emit();
  }
}
