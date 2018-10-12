import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import allReducers from "./reducers";
import ContactList from "./components/ContactList";

import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";

import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import { composeWithDevTools } from "redux-devtools-extension";
// for initialitasion data
import { initStorageData } from "./initStorageData";

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(logger))
);

class App extends Component {
  render() {
    // initStorageData();

    return (
      <Provider store={store}>
        <ContactList />
      </Provider>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
