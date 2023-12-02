import React, { useRef } from 'react';
import './App.scss';
import './views/components/core/styles/styles.scss';
import { RouterProvider } from 'react-router-dom';
import router from './views/routes/router';
import { Provider } from 'react-redux';
import store from './redux/store';
import DrawingCanvas from './views/components/canvas_component';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
