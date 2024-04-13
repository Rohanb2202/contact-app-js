import React from 'react';
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './reduxStore/store.js';
import router from './components/RoutePaths/Router';
import './App.css';
import './UI/general_css.css';
import './UI/components_css.css';

const App = () => {

  return (
    <div className="App">

      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>

    </div>
  );

}

export default App;