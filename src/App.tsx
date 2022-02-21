import React from 'react';
import MarketStore from "./components/screens/Store/MarketStore";
import {Provider} from "react-redux";
import {store} from "./store/store";
import './styles.css';

function App() {
  return (
      <Provider store={store}>
        <MarketStore />
      </Provider>
  )
}

export default App;
