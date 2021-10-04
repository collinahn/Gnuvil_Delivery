import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Route, Link } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes"; // 스와이프 및 라우트 관리
import { PullToRefresh } from "react-js-pull-to-refresh";
import {
  PullDownContent,
  ReleaseContent,
  RefreshContent,
} from "react-js-pull-to-refresh";

import "./MainTabs.css";
import Delivery from "./Delivery";
import Baemin1 from "./Baemin1";
import Takeout from "./Takeout";

export default function MainTabs() {
  const [index, setIndex] = useState<number>(0);
  const onChangeIndex = (event?: React.ChangeEvent<{}>, newIndex?: number) => {
    if (newIndex) setIndex(newIndex);
  };

  // SwipeableRoutes 컴포넌트에서 onIndexChange를 가져다쓸 경우 동작이 일정하지 않아서 따로 만듦
  const onRoutesChangeIndex = (newIndex: number) => {
    setIndex(newIndex);
  };

  const onRefresh = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  };

  return (
    <>
      <Tabs
        className="Main-tabs"
        value={index}
        onChange={onChangeIndex}
        variant="scrollable"
        scrollButtons="on"
      >
        <Tab label="배달" component={Link} to="/" />
        <Tab label="배민1" component={Link} to="/baemin1" />
        <Tab label="포장" component={Link} to="/takeout" />
        <Tab label="B마트" component={Link} to="/b-mart" />
        <Tab label="쇼핑라이브" component={Link} to="/shopping" />
        <Tab label="선물하기" component={Link} to="/gift" />
        <Tab label="전국별미" component={Link} to="/everywhere" />
      </Tabs>
      <PullToRefresh
        pullDownContent={<PullDownContent />}
        releaseContent={<ReleaseContent />}
        refreshContent={<RefreshContent />}
        pullDownThreshold={70}
        onRefresh={onRefresh}
        triggerHeight={200}
        backgroundColor="white"
        startInvisible={true}
      >
        <SwipeableRoutes
          className="Main-Routes"
          index={index}
          onChangeIndex={onRoutesChangeIndex}
        >
          <Route path="/" component={Delivery} />
          <Route path="/baemin1" component={Baemin1} />
          <Route path="/takeout" component={Takeout} />
          <Route path="/b-mart" component={Takeout} />
          <Route path="/shopping" component={Takeout} />
          <Route path="/gift" component={Takeout} />
          <Route path="/everywhere" component={Takeout} />
        </SwipeableRoutes>
      </PullToRefresh>
    </>
  );
}
