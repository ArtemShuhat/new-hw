"use strict";
function Animal(name) {
  this.name = name;
  this.speed = 0;
}

Animal.prototype.run = function () {
  alert(this.name + " біжить!");
};

//RABBIT
function Rabbit(name) {
  Animal.apply(this, arguments);
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " підстрибує!");
};

let rabbit = new Rabbit("Кролик");

//CAT
function Cat(name) {
  Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " виляє хвостом!");
};

let cat = new Cat("Кіт");

//DOG
function Dog(name) {
  Animal.apply(this, arguments);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " гавкає!");
};

let dog = new Dog("Пес");

//SNAKE
function Snake(name) {
  Animal.apply(this, arguments);
}

Snake.prototype = Object.create(Animal.prototype);
Snake.prototype.constructor = Snake;

Snake.prototype.run = function () {
  alert(this.name + " повзе!");
};

let snake = new Snake("Змія");

//ROOSTER
function Rooster(name) {
  Animal.apply(this, arguments);
}

Rooster.prototype = Object.create(Animal.prototype);
Rooster.prototype.constructor = Rooster;

Rooster.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " кукурікає!");
};

let rooster = new Rooster("Півень");

//ELEPHANT
function Elephant(name) {
  Animal.apply(this, arguments);
}

Elephant.prototype = Object.create(Animal.prototype);
Elephant.prototype.constructor = Elephant;

Elephant.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " трубить!");
};

let elephant = new Elephant("Слон");

let arr = [elephant, rooster, snake, cat, dog, rabbit];

for (let i = 0; i < arr.length; i++) {
  arr[i].run();
}
