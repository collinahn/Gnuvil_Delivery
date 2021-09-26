import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import MainTabs from './component/MainTabs';
import ScrollToTop from './component/ScrollToTop';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        위치 버튼 자리
      </header>

      <ScrollToTop />
      <MainTabs />

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
