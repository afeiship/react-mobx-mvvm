import React from 'react';
import { observer, inject } from 'mobx-react';

// Since putting observer only on the TodoView will result in re-rendering all the todos
// any time a single todo is updated, we create a subcomponent that handles the editing for a single todo
// and decorate it with observer. This way updates in the single todo will result in an update of the SingleTodoView.
@observer
export default class extends React.Component {

  render() {
    const model = this.props.model;
    const todo = this.props.todo;

    return (
      <p>
        #{todo.id}
        <strong>{todo.text}</strong>
        <i>{todo.done ? 'DONE!' : ''}</i>

        <br />

        <input type="checkbox" checked={todo.done} onChange={e => todo.done = e.target.checked} />
        <input type="text" value={todo.text} onChange={e => { todo.text = e.target.value; }} />
        <button onClick={() => model.remove(todo)}>Delete</button>
      </p>
    )
  }
}
