import { Component, Input } from '@angular/core';

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
}
