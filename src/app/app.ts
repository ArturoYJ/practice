import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header.component/header.component';
import { AsideComponent } from "./shared/components/aside.component/aside.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AsideComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hugin_munin_ng');
}
