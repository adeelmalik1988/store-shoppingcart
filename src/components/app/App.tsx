import React from 'react';
import RouteConfig from "../../config/Routes"
import './App.css';
import { Provider } from "react-redux"
import { store } from "../../store/index"

function App() {
  return (
    <Provider store={store} >

      <div className="App">

        <RouteConfig />
      </div>
    </Provider>
  );
}

export default App;
