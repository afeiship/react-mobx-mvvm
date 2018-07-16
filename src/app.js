import React from 'react';
import hotable from 'react-hmr-decorator';
import { Provider } from 'mobx-react';

// import the view and the viewModel
import View from './views/todo';
import ViewModel from './viewmodels/todo';

// create a viewModel singleton
const viewModel = new ViewModel();

@hotable(module)
export default class extends React.Component {
  render() {
    return (
      <View model={viewModel} />
    )
  }
}
