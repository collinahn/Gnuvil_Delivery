import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Delivery from './component/Delivery';
import Baemin1 from './component/Baemin1';
import Takeout from './component/Takeout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        위치 버튼 자리
      </header>
      <nav className="App-nav">
        <Link to="/">배달</Link>
        <Link to="/baemin1">배민1</Link>
        <Link to="/takeout">포장</Link>
      </nav>
      <body className='App-body'>
        <Route path="/" exact={true} component={Delivery} />
        <Route path="/baemin1" component={Baemin1} />
        <Route path="/takeout" component={Takeout} />
      </body>
      <footer className="App-footer">
        <Link to="/">  검색  </Link>
        <Link to="/">   찜   </Link>
        <Link to="/"> 블로그 </Link>
        <Link to="/">주문내역</Link>
        <Link to="/"> My배민 </Link>
      </footer>
    </div>
  );
}

export default App;
