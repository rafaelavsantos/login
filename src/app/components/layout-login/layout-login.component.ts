import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-layout-login',
  standalone: true,
  imports: [],
  templateUrl: './layout-login.component.html',
  styleUrl: './layout-login.component.scss'
})
export class LayoutLoginComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }
}
