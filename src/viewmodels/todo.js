import {observable, action, autorun} from 'mobx';
import Todo from '../models/todo';

export default class {

  @observable todos = [];

  // when the viewmodel is constructed, attempt to load the todos.
  constructor() {
    this.load();

    autorun(()=>{
      console.log('someting update!');
    });
  }

  // this is an action, using the "@action" decorator tells MobX we are going to change
  // some observable inside this function. With this function we are going to add a new
  // todo into the tods list.
  @action
  add() {
    // simple vanilla js, adding a new Todo instance to the todos.
    const newTodo = new Todo();
    this.todos.push(newTodo);
    return newTodo;
  }

  // remove and deletes the given todo
  @action
  remove(todo) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  // load saved todos, if possible.
  @action
  load() {
    // if the browser has support for localStorage, try to retrieve the saved todos
    if (window.localStorage) {
      const json = JSON.parse(window.localStorage.getItem("todos") || "[]");

      // Notice: the todo => Todo.deserialize(todo) is an ES2015 arrow function
      this.todos = json.map(todo => Todo.deserialize(todo));
    }
  }

  // save todos, if possible
  @action
  save() {
    // are there invalid todos?
    // if (this.todos.filter(todo => todo.isValid === false).length > 0) {
    //   alert("Unable to save: There are invalid Todos.");
    // }

    if (window.localStorage) {
      window.localStorage.setItem(
        "todos",
        JSON.stringify(
          this.todos.map(todo => todo.serialize())
        )
      );
    }
  }
}
