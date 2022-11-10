import {Component, Input, OnInit} from '@angular/core';
import { Hero } from "../hero";


@Component({
  selector: 'app-hero-detail [',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

/*
    Use @Input decorator to make the hero property available for binding by the external HeroesComponent.
    The parent, HeroesComponent, controls the child, HeroDetailComponent by sending it a new hero to display
    whenever the user selects a hero from the list.
 */

export class HeroDetailComponent implements OnInit {

  @Input() hero?:Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
