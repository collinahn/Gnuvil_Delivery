import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Route, Link } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';  // 스와이프 및 라우트 관리
import {PullToRefresh} from "react-js-pull-to-refresh";
import {PullDownContent, ReleaseContent, RefreshContent} from "react-js-pull-to-refresh";

import "./MainTabs.css"
import Delivery from './Delivery';
import Baemin1 from './Baemin1';
import Takeout from './Takeout';

class MainTabs extends React.Component {
  state = {
    index: 0,
  };

  handleChange = (event: React.ChangeEvent<{}>, value: number) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = (index: number) => {
    this.setState({
      index,
    });
  };

  private onRefresh() {
      return new Promise((resolve) => {
          setTimeout(resolve, 2000);
      });
  }
  render() {
    const { index } = this.state;

    return (
      <div>
        <Tabs 
          className="Main-tabs" 
          value={index} 
          onChange={this.handleChange} 
          variant="scrollable"
          scrollButtons="on"
        >
          <Tab label="배달"  component={ Link } to='/' />
          <Tab label="배민1" component={ Link } to='/baemin1' />
          <Tab label="포장"  component={ Link } to='/takeout' />
          <Tab label="B마트" component={ Link } to='/b-mart' />
          <Tab label="쇼핑라이브" component={ Link } to='/shopping' />
          <Tab label="선물하기" component={ Link } to='/gift' />
          <Tab label="전국별미" component={ Link } to='/everywhere' />
        </Tabs>
        <PullToRefresh
          pullDownContent={<PullDownContent />}
          releaseContent={<ReleaseContent />}
          refreshContent={<RefreshContent />}
          pullDownThreshold={100}
          onRefresh={this.onRefresh}
          triggerHeight={1000}
          backgroundColor='white'
          startInvisible={true}
        >
          <SwipeableRoutes className="Main-Routes" index={index} onChangeIndex={this.handleChangeIndex}>
            <Route path='/'        component={Delivery} />
            <Route path='/baemin1' component={Baemin1} />
            <Route path='/takeout' component={Takeout} />
            <Route path='/b-mart' component={Takeout} />
            <Route path='/shopping' component={Takeout} />
            <Route path='/gift' component={Takeout} />
            <Route path='/everywhere' component={Takeout} />
          </SwipeableRoutes>
        </PullToRefresh>
      </div>
    );
  }
}

export default MainTabs;