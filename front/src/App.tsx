import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import GPSModal from "./component/GPSModal";
import MainTabs from "./component/MainTabs";
import ScrollToTop from "./component/ScrollToTop";

export default function App() {
  const [currentHood, setCurrentHood] = useState<string>("동대문구 이문동");
  const [gpsModal, setGpsModal] = useState<boolean>(false);

  const updateHood = (hood: string) => {
    setCurrentHood(hood);
  }

  const onGpsModal = () => {
    setGpsModal(!gpsModal);
  };

  const closeGpsModal = () => {
    if (gpsModal) setGpsModal(false);
  }

  useEffect(() => {
    window.addEventListener('click', closeGpsModal);
    return () => {
      window.removeEventListener('click', closeGpsModal);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button className="App-gps" onClick={onGpsModal}>
          {currentHood} ∨
        </button>
        <GPSModal open={gpsModal} close={onGpsModal} update={updateHood} />
      </header>

      <ScrollToTop />
      <MainTabs />

      <footer className="App-footer">
        <Link to="/">_검_색_</Link>
        <Link to="/">___찜___</Link>
        <Link to="/">_블로그_</Link>
        <Link to="/">주문내역</Link>
        <Link to="/">My배민</Link>
      </footer>
    </div>
  );
}

