import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id,title, completed);
})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
  `);
};

// Function
const logNumber:(i:number) => void = (i: number) => {
  console.log(i);
}

// When to use annotations

// 1) Function that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: { x:number; y:number } = JSON.parse(json);
console.log(coordinates); //{x:10, y:20}


// 2) when declare a variable on one line
// and initializa it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let i=0; i<words.length; i++){
  if(words[i] === 'green'){
    foundWord = true;
  }
}

// Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero:boolean | number = false;

for(let i=0; i<numbers.length; i++){
  if(numbers[i] > 0){
    numberAboveZero = numbers[i]
  }
}