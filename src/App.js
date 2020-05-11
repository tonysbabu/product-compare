import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import logger from "redux-logger";

import CompareProducts from "./containers/CompareProducts";
import rootReducer from "./reducers";
import "./App.scss";

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CompareProducts />
      </Provider>
    </div>
  );
}

export default App;
