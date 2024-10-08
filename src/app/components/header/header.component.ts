import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  home_btn = "HOME"
  header_title = "Filme Find"
  username  = "NTT DATA"

}
