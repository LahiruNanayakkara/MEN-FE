import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'MenFE';

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.iconRegistry.addSvgIcon(
      'secure',
      this.sanitizer.bypassSecurityTrustResourceUrl("assets/icons/secure.svg")
    );
  }
}
