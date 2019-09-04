'use strict'

// 配列


// const scores = [80,90,40];
//
// console.log(scores);
// console.log(scores.length);
// console.log(scores[1]);
//
// scores[2] = 120;

class Player{
  constructor(name,score){//メソッド
    this.name = name;
    this.score = score;
  }

  showInfo(){
    console.log(`$name: ${this.name} score:${this.score}`);
  }

  static showInfo(){
    console.log("Player class ver.1.0");
  }
}

const taguchi = new Player("taguchi",32);
const koji = new Player("koji",44);

console.log(taguchi.name);
taguchi.showInfo();
koji.showInfo();

Player.showInfo();

// console.log(player);
// console.log(player["name"]);
// player.score = 100;
// player.email = 'aaaa@ggaa.com';
// console.log(player);
// delete player.email;
// console.log(player);
