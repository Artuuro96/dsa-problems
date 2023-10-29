
const players = [
  {
    id: 1,
    name: 'Carolina Jaramillo',
  },
  {
    id: 2,
    name: 'Alicia Cervantes',
  },
  {
    id: 3,
    name: 'Gabriela Valenzuela',
  },
]

const findPlayer = function (i: number, name: string): object | null {
  if(name === players[i].name) {
    return players[i];
  }
  if(i <= 0) return null;
  return findPlayer(i - 1, name);
} 

console.log(findPlayer(players.length - 1, 'Carolina Jaramillo'));