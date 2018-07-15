import React from 'react';
import hotable from 'react-hmr-decorator';
import { Provider } from 'mobx-react';

// import the view and the viewModel
import { TodoView } from './views/todo';
import TodoViewModel from './viewmodels/todo';

// create a viewModel singleton
const viewModel = new TodoViewModel();

@hotable(module)
export default class extends React.Component{
  render(){
    return (
      <Provider>
        <TodoView model={viewModel} />
      </Provider>
    )
  }
}
