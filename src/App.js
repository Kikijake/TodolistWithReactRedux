import React,{Suspense} from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/router';
import Loading from './components/Loading/Loading';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading/>}>
          <Router/>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
