import { Component } from '@angular/core';
import { LayoutLoginComponent } from '../../components/layout-login/layout-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LayoutLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
