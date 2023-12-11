import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  img1 = "/assets/instagram-logo.png";
  img2 = "/assets/faccebook-logo.png";

  redSocial = true; // true = instagram, false = facebook
}
