import React, { useEffect, useRef } from 'react';
import './App.scss';
import './views/components/core/styles/styles.scss';
import { RouterProvider } from 'react-router-dom';
import router from './views/routes/router';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );

  // const canvasRef = useRef(null);
  // const contextRef = useRef(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   canvas.width = canvas.parentElement.clientWidth;
  //   canvas.height = canvas.parentElement.clientHeight;
  //   const context = canvas.getContext('2d');
  //   contextRef.current = context;
  //   console.log(canvas.width, canvas.height);

  // }, []);

  // const drawFilledRectangle = () => {
  //   if (!contextRef.current) return;

  //   // Set the fill color to red
  //   contextRef.current.fillStyle = 'red';

  //   // Draw a filled rectangle at (50, 50) with a width and height of 100
  //   contextRef.current.fillRect(758, 490, 100, 100);
  // };

  // return (
  //   <div style={{ width: '50%', height: '500px' }}>
  //     <canvas
  //       ref={canvasRef}
  //       style={{ border: '1px solid #000' }}
  //     />
  //     <button onClick={drawFilledRectangle}>Draw Filled Rectangle</button>
  //   </div>
  // );
}

export default App;
