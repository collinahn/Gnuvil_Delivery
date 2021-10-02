import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import MainTabs from './component/MainTabs';
import Stores from './component/Stores';


export default function App() {
  return (
    //아이콘 클릭시 전체 페이지가 전환되는 것같아 
    //일단 라우터로 감싸놓았습니다. 

    <div className="App">
      <Route path={['', '/:tab']} exact>
        <header className="App-header">
            위치 버튼 자리
        </header>

        <MainTabs />

        <footer className="App-footer">
          <Link to="/">  검색  </Link>
          <Link to="/">   찜   </Link>
          <Link to="/"> 블로그 </Link>
          <Link to="/">주문내역</Link>
          <Link to="/"> My배민 </Link>
        </footer>
      </Route>
      <Route 
        path={['/stores/:menu','/:tab/stores/:menu']} 
        component={Stores} 
        exact/>
    </div>
  ); 
}
