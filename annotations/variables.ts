let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let noting: undefined = undefined;

//Built in Objects
let now: Date = new Date();

//Array
let colors: string [] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true,false,true];

//Classes
class Car {

}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number; } = {
  x:10,
  y:20
};

//Function
const logNumber: (i:number) => void  = (i:number) => {
  console.log(i);
}

//When to use annotations
// 1) Function that returns the 'any' type
const json = '"x":10, "y":20';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

