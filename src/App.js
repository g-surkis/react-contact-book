import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";
import ContactList from "./components/ContactList";

import { initStorageData } from "./initStorageData";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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

export default App;
