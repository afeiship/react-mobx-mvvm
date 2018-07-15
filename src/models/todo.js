import { observable, computed } from 'mobx';
import 'next-id';

// this is our domain model class
export default class {

  static deserialize(inData) {
    const todo = new this();
    todo.id = inData['id'] || nextId();
    todo.text = inData['text'] || '';
    todo.done = inData['done'] || false;
    return todo;
  }

  id = nx.id();
  @observable text = '';
  @observable done = false;

  @computed get isValid() {
    return this.text !== '';
  }

  serialize() {
    return {
      id: this.id,
      text: this.text,
      done: this.done
    }
  }

}
