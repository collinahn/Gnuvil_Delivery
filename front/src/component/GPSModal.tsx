import React, { useState, ReactElement, useEffect } from "react";
import { createPortal } from "react-dom";
import MapModal from "./MapModal";

import "./GPSModal.css"


interface GPSProps {
  open: boolean;
  close: () => void; //함수 타입 정의
  update: (str: string) => void;
}

export default function GPSModal( props: GPSProps ) {
  const { open, close } = props;

  const [mapModal, setMapmodal] = useState<boolean>(false);

  const onGoogleMap = () => {
    setMapmodal(!mapModal);    
  };
  

  return createPortal(
    <div>
      <div className={open ? 'GPSModal-background' : ''} onClick={close} />
      <div className={open ? 'GPSModal-active' : ''}>
        {open ? (
          <div className="GPSModal-window">
            <button className="GPSModal-closebutton" onClick={close}>
              {' '}&times;{' '}
            </button>
            <div>모달창모달창모달창</div>
            <div>모달창모달창모달창</div>
            <div>모달창모달창모달창</div>
            <div>모달창모달창모달창</div>
            <div>모달창모달창모달창</div>
            <div>모달창모달창모달창</div>
            <div>모달창모달창모달창</div>
            {/* <button className="GPSModal-googlemap" onClick={onGoogleMap}>GPS</button> */}
            {/* <MapModal open={mapModal} close={onGoogleMap} /> */}
          </div>
        ) : null}
      </div>
    </div>,
    document.getElementById('modal')!
  );
};
