import Appartment from "./Appartment.js";
import Coin from "./Coin.js";
import Train from "./Train.js";

const oldCoin = new Coin(
  "Moneta",
  "Square",
  69,
  "latun_alloy",
  "face",
  "herb",
  "tooMany"
);
const MyFirstTrain = new Train("Lufthanha", 45, 15, 10, 1000, "blue", false);

console.log(oldCoin.cost_in_$);
console.log(MyFirstTrain.color);
oldCoin.trading(420);
console.log(oldCoin.cost_in_$);
MyFirstTrain.painting("black");
console.log(MyFirstTrain.color);
console.log(MyFirstTrain.dirty);
MyFirstTrain.cleaing(true);
console.log(MyFirstTrain.dirty);

const VerchovnaRadaBlvd = new Appartment(
  "first flat!",
  46,
  2,
  29,
  2,
  33000,
  "laminat",
  "hipsocarton",
  "oboi",
  false
);

console.log(
  "This is my",
  VerchovnaRadaBlvd.name,
  "It is of a",
  VerchovnaRadaBlvd.sizeInSqMtr,
  "squared meters.",
  "It has",
  VerchovnaRadaBlvd.roomNum,
  "rooms. It`s numver",
  VerchovnaRadaBlvd.number,
  ".",
  "It was made of",
  VerchovnaRadaBlvd.material.floor,
  ",",
  VerchovnaRadaBlvd.material.roof,
  ",",
  "and",
  VerchovnaRadaBlvd.material.wall,
  "It must be clear, but it is",
  VerchovnaRadaBlvd.cleanAppartment,
  VerchovnaRadaBlvd.clearingFlat(true),
  "After cleaning it becomes prettier and that`s",
  VerchovnaRadaBlvd.cleanAppartment,
  "also we can change oboi to",
  VerchovnaRadaBlvd.repair("nothing", "but", "painting"),
  VerchovnaRadaBlvd.material.wall
);
