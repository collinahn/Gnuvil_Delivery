import React from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker, IGoogleApiOptions } from "google-maps-react";
import apikey from "../__googlemap";

// TODO 훅으로 리팩토링
class MapModal extends React.Component<any> {
  state = {
    mapMarker: null,
    showingInfoWindow: false
  };

  onMarkerClick = (props: any) => {
    this.setState({
      showingInfoWindow: true
    });
  };

  onInfoWindowClose = () =>
    this.setState({
      showingInfoWindow: false
    });

  onLoad = (mapMarker: boolean) => {
    this.setState({
      mapMarker
    });
  };

  public render() {
    return (
      <div className={"MapModal"}>
        <Map google={this.props.google} >
          <Marker />
          {/* <InfoWindow >
            <div>
              <h1>test</h1>
            </div>
          </InfoWindow> */}
        </Map>
      </div>
    );
  }
}

let newApiKey = apikey as unknown as IGoogleApiOptions["apiKey"];
export default GoogleApiWrapper({
  apiKey: newApiKey
})(MapModal);

