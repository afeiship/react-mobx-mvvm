import React from 'react'
import { observer, inject } from 'mobx-react'
import TodoItem from './item';
// This is a React component.
// The property "model" of the passed props object is an instance of our TodoViewModel class.
// do you remember all those @observable and @computed?
// In order to let your React component automatically update whenever any of
// those observable property of an object in the component props update,
// you should pass your component to the "observer" function/decorator
@observer
export default class extends React.Component {

  render() {
    const model = this.props.model;

    // just some HTML markup based of the ViewModel data.
    return <div>
      <h1>React & MobX Todo List!</h1>
      <p>
        <button onClick={model.add}>New Todo</button>
        <button onClick={model.load}>Reload Todos</button>
        <button onClick={model.save}>Save Todos</button>
      </p>
      {model.todos.map((todo, i) => <TodoItem key={todo.id} model={model} todo={todo} />)}
    </div>
  }
};
