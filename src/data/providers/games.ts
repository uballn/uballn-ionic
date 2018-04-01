import { Injectable } from '@angular/core';
import { Game } from '../../models/game';

@Injectable()
export class Games {
  games: Game[] = [];

  defaultGame: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let games = [
      {
        "name": "Burt Bear",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Burt is a Bear."
      },
      {
        "name": "Charlie Cheetah",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "name": "Donald Duck",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald is a Duck."
      },
      {
        "name": "Eva Eagle",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Ellie Elephant",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "name": "Molly Mouse",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "name": "Paul Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Paul is a Puppy."
      }
    ];

    for (let game of games) {
      this.games.push(new Game(game));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.games;
    }

    return this.games.filter((game) => {
      for (let key in params) {
        let field = game[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return game;
        } else if (field == params[key]) {
          return game;
        }
      }
      return null;
    });
  }

  add(game: Game) {
    this.games.push(game);
  }

  delete(game: Game) {
    this.games.splice(this.games.indexOf(game), 1);
  }
}
