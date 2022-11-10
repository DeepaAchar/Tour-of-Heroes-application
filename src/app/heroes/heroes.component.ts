import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import {HEROES} from "../mock-heroes";
import {HeroService} from "../hero.service";
import {Observable, of} from "rxjs";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm';


/*

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
*/

  // heroes = HEROES;
  heroes: Hero[] = [];

  // Injecting a dependency
  constructor(private heroService: HeroService, private messageService: MessageService) { }

/*
  // This method has synchronous signature for getHeroes()
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
*/

    /*
      Use the Angular HttpClient.get method to fetch the heroes and return an Observable.
      This is asynchronous method
   */

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

}
