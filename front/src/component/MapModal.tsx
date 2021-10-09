// 2021.10.06 created by taeyoung

// chrome 브라우저의 경우 https 환경에서만 geolocation api가 동작함 - http환경에서는 현재 위치 찾기 불가

// GPSModal에서 현재 위치로 설정 버튼을 누르면 뜨는 지도 모달창
// 카카오 지도 api를 사용한다. (구글 지도 api보다 사용이 편리함)
// front/ 폴더에 .env 파일을 생성한 뒤 카카오 맵 키를 REACT_APP_KAKAO_MAP_KEY 변수에 저장한다.
// ex) REACT_APP_KAKAO_MAP_KEY=123131209310983...

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { History } from "history";
import "./MapModal.css";

interface MapModalProps {
  history: History;
}

const MapModal: React.FC<MapModalProps> = ({ history }) => {
  const [location, setLocation] =
    useState<string>("지도에서 위치를 선택해주세요");

  // index.html에서 로드하는 스크립트 네임스페이스 ts에서 사용할 수 있도록
  const kakao = (window as any).kakao;

  useEffect(() => {
    kakao?.maps.load(() => {
      let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      let options = {
        center: new kakao.maps.LatLng(37.5959, 127.0587), //지도의 중심좌표.
        level: 5, //지도의 레벨(확대, 축소 정도)
      };

      let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

      // 주소-좌표 변환 객체를 생성
      let geocoder = new kakao.maps.services.Geocoder();

      // 마커 생성
      let marker = new kakao.maps.Marker({
        map: map,
        draggable: true,
        position: map.getCenter(),
      });
      let infowindow = new kakao.maps.InfoWindow({ zindex: 1 });

      // 지도 드래깅 이벤트를 등록한다 (드래그 시작 : dragstart, 드래그 종료 : dragend)
      kakao.maps.event.addListener(map, "drag", function () {
        let message = "중심 좌표: " + map.getCenter().toString();
        console.log(message);
      });

      // 지도를 클릭하면 마지막 파라미터로 넘어온 함수 호출
      kakao.maps.event.addListener(map, "click", function (mouseEvent: any) {
        // 클릭한 위도, 경도 정보
        let latlng = mouseEvent.latLng;

        // 마커 위치를 클릭한 위치로
        marker.setPosition(latlng);

        let message = "onClick\nLat: " + latlng.getLat() + ", \n";
        message += "Lng: " + latlng.getLng();

        let resultDiv = document.getElementById("clickLatlng");
        if (resultDiv) resultDiv.innerHTML = message;
        console.log(message);
      });

      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치 확인
        navigator.geolocation.getCurrentPosition(function (position) {
          let lat = position.coords.latitude; // 위도
          let lon = position.coords.longitude; // 경도

          // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성
          let locPosition = new kakao.maps.LatLng(lat, lon);

          map.setCenter(locPosition);
        });
      } else {
        // HTML5의 GeoLocation을 사용할 수 없을때
        let locPosition = new kakao.maps.LatLng(37.5959, 127.0587);
        map.setCenter(locPosition);
        alert("GPS정보를 사용할 수 없습니다.");
      }

      //  지도 좌측 상단 현재 지도 중심좌표로 주소 표시
      // searchAddrFromCoords(map.getCenter(), displayCenterInfo);

      // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록
      // TODO 타입 정보를 올바르게 표시하기 2021.10.08
      kakao.maps.event.addListener(map, "click", function (mouseEvent: any) {
        searchDetailAddrFromCoords(
          mouseEvent.latLng,
          function (result: any, status: any) {
            if (status === kakao.maps.services.Status.OK) {
              //api단에서 도로명주소로 변환할 수 없을 떄가 있는듯? - 현재는 사용안함
              var detailAddr = !!result[0].road_address
                ? "<div>도로명주소 : " +
                  result[0].road_address.address_name +
                  "</div>"
                : "";
              detailAddr +=
                "<div>지번 주소 : " + result[0].address.address_name + "</div>";

              var content =
                '<div class="MapModal-address">' +
                '<span class="title">주소정보</span>' +
                detailAddr +
                "</div>";

              // 마커를 클릭한 위치에 표시
              marker.setPosition(mouseEvent.latLng);
              marker.setMap(map);

              // 인포윈도우에 법정동 상세 주소정보를 표시
              // infowindow.setContent(content);
              // infowindow.open(map, marker);

              setLocation(result[0].address.address_name);
            }
          }
        );
      });

      function searchDetailAddrFromCoords(coords: any, callback: any) {
        // 좌표로 법정동 상세 주소 정보를 요청
        geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
      }
    });
  }, []);

  const goBack = (history: History, e: React.MouseEvent) => {
    history.goBack();
  };

  return createPortal(
    <>
      <div className={"MapModal-page"}>
        <div className="MapModal-header">
          <button
            className="MapModal-backBtn"
            onClick={(e) => goBack(history, e)}
          >
            뒤로가기
          </button>
          <div>클릭하여 위치 설정</div>
        </div>
        <div id="map" className="MapModal-map" />
        <div className="MapModal-footer">
          <div> {location} </div>
          <input
            className="MapModal-input"
            type="text"
            placeholder="상세 주소 입력"
          ></input>
          <button>이 위치로 주소 설정</button>
        </div>
      </div>
    </>,
    document.getElementById("root")!
  );
};

export default MapModal;
