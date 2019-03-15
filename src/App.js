import React, { Component } from 'react';
import ButtonAppBar from './components/appBar'
import SimpleAppBar from './components/secondAppBar'
import FolderList from './components/Group'
import CheckboxList from './components/List'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <ButtonAppBar/>
          <SimpleAppBar/>
            <FolderList/>
            <CheckboxList/>
        </div>
    );
  }
}

export default (App);
