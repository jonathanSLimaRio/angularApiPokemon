import { Component, Input } from '@angular/core';
import {
  Pokemon,
  getPokemonImage,
  getPokemonNumber,
} from '../../_model/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
})
export class PokemonCardComponent {
[x: string]: any;
  @Input()
  public pokemon!: Pokemon;

  public getPokemonImage = getPokemonImage;

  public getPokemonNumber = getPokemonNumber;
}
