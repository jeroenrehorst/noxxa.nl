import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Lightbox } from './shared/lightbox/lightbox';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Lightbox],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
