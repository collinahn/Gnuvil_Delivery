import React, { useEffect, useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import GPSModal from "./component/GPSModal";
import MainTabs from "./component/MainTabs";
import Stores from "./component/Stores";
import ScrollToTop from "./component/ScrollToTop";
require("dotenv").config();

export default function App() {
  const [currentHood, setCurrentHood] = useState<string>("동대문구 이문동");
  const [gpsModal, setGpsModal] = useState<boolean>(false);

  const updateHood = (hood: string) => {
    setCurrentHood(hood);
  };

  const onGpsModal = () => {
    setGpsModal(!gpsModal);
  };

  const closeGpsModal = () => {
    if (gpsModal) setGpsModal(false);
  };

  useEffect(() => {
    window.addEventListener("click", closeGpsModal);
    return () => {
      window.removeEventListener("click", closeGpsModal);
    };
  }, []);

  const mainPath = [
    "",
    "/baemin1",
    "/takeout",
    "/b-mart",
    "/shopping",
    "/gift",
    "/everywhere",
    "/map",
  ];

  return (
    <div className="App">
      <Switch>
        <Route path={mainPath} exact>
          <header className="App-header">
            <button className="App-gps" onClick={onGpsModal}>
              {currentHood} ∨
            </button>
            <GPSModal
              open={gpsModal}
              close={onGpsModal}
              currentHood={currentHood}
              updateHood={updateHood}
            />
          </header>

          <ScrollToTop />
          <MainTabs />

          <footer className="App-footer">
            <Link to="/"> 검색 </Link>
            <Link to="/"> 찜 </Link>
            <Link to="/"> 블로그 </Link>
            <Link to="/">주문내역</Link>
            <Link to="/"> My배민 </Link>
          </footer>
        </Route>
        <Route path={["/:menu", "/:tab/:menu"]} component={Stores} exact />
      </Switch>
    </div>
  );
}
