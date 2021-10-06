import React, { useState, ReactElement, useEffect } from "react";
import { createPortal } from "react-dom";
import MapModal from "./MapModal";
import { Link, Route } from "react-router-dom";

import "./GPSModal.css";

interface GPSProps {
  open: boolean;
  close: () => void; //함수 타입 정의
  currentHood: string;
  updateHood: (str: string) => void;
}

export default function GPSModal(props: GPSProps) {
  const { open, close, currentHood, updateHood } = props;
  const hoodSlot = ["동대문구 회기동", "동대문구 신설동", "동대문구 신이문"];

  const [mapModal, setMapmodal] = useState<boolean>(false);

  const onChangeHood = (str: string, event?: React.MouseEvent) => {
    updateHood(str);
    close();
  };

  const onMapModal = () => {
    setMapmodal(!mapModal);
    console.log(mapModal);
  };

  return createPortal(
    <div>
      <Route path="/map" exact={true} component={MapModal} />

      <div className={open ? "GPSModal-background" : ""} onClick={close} />
      <div className={open ? "GPSModal-active" : ""}>
        {open ? (
          <>
            <div className="GPSModal-gridContainerTop">
              <h4>
                주소 설정
                <Link className="GPSModal-editBtn" to={"/"}>
                  편집
                </Link>
              </h4>
              <div className="GPSModal-inputParent">
                <input
                  className="GPSModal-input"
                  type="text"
                  placeholder="지번, 도로명, 건물명으로 검색"
                ></input>
              </div>
              <Link to="/map" className="GPSModal-setLocation">
                현재 위치로 설정
              </Link>
            </div>
            <div className="GPSModal-seperator" />
            <div className="GPSModal-gridContainerBottom">
              <button
                onClick={(e) => onChangeHood(currentHood, e)}
                className="GPSModal-slot"
              >
                {currentHood}
              </button>
              <button
                onClick={(e) => onChangeHood(hoodSlot[0], e)}
                className="GPSModal-slot"
              >
                {hoodSlot[0]}
              </button>
              <button
                onClick={(e) => onChangeHood(hoodSlot[1], e)}
                className="GPSModal-slot"
              >
                {hoodSlot[1]}
              </button>
              <button
                onClick={(e) => onChangeHood(hoodSlot[2], e)}
                className="GPSModal-slot"
              >
                {hoodSlot[2]}
              </button>
            </div>
            <div className="GPSModal-seperator" />
          </>
        ) : null}
      </div>
    </div>,
    document.getElementById("modal")!
  );
}
