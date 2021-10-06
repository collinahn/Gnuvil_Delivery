// 2021.10.06 created by taeyoung

// GPSModal에서 현재 위치로 설정 버튼을 누르면 뜨는 지도 모달창
// 카카오 지도 api를 사용한다. (구글 지도 api보다 사용이 편리함)
// front/ 폴더에 .env 파일을 생성한 뒤 카카오 맵 키를 REACT_APP_KAKAO_MAP_KEY 변수에 저장한다.
// ex) REACT_APP_KAKAO_MAP_KEY=123131209310983...

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./MapModal.css";

// public/index.html에 링크된 스크립트 사용할 수 있도록
// 실행전에는 kakao가 존재하지 않는다고 오류가 발생하기 때문에
// global로 인터페이스 생성하여 kakao가 존재한다고 정의함
declare global {
  interface Window {
    kakao: any;
  }
}

const API_KEY = `${process.env.REACT_APP_KAKAO_MAP_KEY}`;
const API_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&autoload=false`;

// TODO 훅으로 리팩토링
export default function MapModal() {
  // const { open, close } = props;

  useEffect(() => {
    // script 및 tag가 완성되기 전 map을 만들게 되어 오류가 발생함.
    // autoload=false 선언으로 onload함수가 script완성 이후 콜백되도록 작성
    const kakaoMapScript = document.createElement("script");

    // 카카오맵 소스, 키는 .env파일에 저장
    kakaoMapScript.src = API_URL;
    // if (!API_KEY) {
    //   throw new Error("No API key");
    // }
    document.head.appendChild(kakaoMapScript);

    kakaoMapScript.onload = () => {
      window?.kakao.maps.load(() => {
        let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        let options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
      });
    };

    console.log(API_KEY);

    return () => kakaoMapScript.remove();
  }, []);

  return createPortal(
    <>
      <div className={"MapModal-page"}>
        <div id="map" className="MapModal-map" />
      </div>
    </>,
    document.getElementById("root")!
  );
}
