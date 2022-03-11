// TODO: write your code here
import Person from './person';

class Team {
  constructor(...args) {
    this.team = [...args];
  }

  * [Symbol.iterator]() {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.team.length; i++) {
      yield this.team[i];
    }
  }
}
const magic = new Person('Magic', 'Magic', 90, 3, 20, 15);
const health = new Person('Health', 'Health', 87, 2, 10, 40);
const tank = new Person('Tank', 'Tank', 100, 10, 40, 10);
const thisTeam = new Team(magic, health, tank);

for (const item of thisTeam) {
  console.log(item);
}
