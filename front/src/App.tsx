import React from 'react';
import { Route, Link,Switch} from 'react-router-dom';
import './App.css';
import MainTabs from './component/MainTabs';
import Stores from './component/Stores';


export default function App() {
  const mainPath = ['','/baemin1','/takeout','/b-mart','/shopping','/gift','/everywhere'];
  
  return (
    <div className="App">
      <Switch>
        <Route path={mainPath} exact>
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
          path={['/:menu','/:tab/:menu']} 
          component={Stores} 
          exact/>
      </Switch>
    </div>
  ); 
}
