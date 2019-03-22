import React, { Component } from 'react';
import ButtonAppBar from './components/appBar'
import SimpleAppBar from './components/secondAppBar'
import FolderList from './components/Group'
import CheckboxList from './components/List'
import './App.css';

class App extends Component {
    state = {
        elements: ['10','2','3','4']
    }
    handleChangeItems = (new_item) => {
        let mod_array = this.state.elements;
        mod_array.push(new_item);
        this.setState({elements: mod_array});
    };
  render() {
        const{ elements } = this.state;
    return (
        <div className="App">
          <ButtonAppBar/>
          <SimpleAppBar add_item = {this.handleChangeItems}/>
            <FolderList items={elements}/>
            <CheckboxList/>
        </div>
    );
  }
}

export default (App);
