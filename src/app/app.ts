import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './core/services/api-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('real-estate-web');

  constructor(
    private readonly apiService: ApiService
  ) {
    this.apiService.get('authors').subscribe(response => console.log(response));
  }
}
