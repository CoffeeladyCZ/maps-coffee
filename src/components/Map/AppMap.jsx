import React, {createRef} from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import  MarkerComponent from '../Marker/AppMarker';

// import Marker from '../Marker/AppMarker';

import coffeePin from '../../img/coffee-shop.png';

import './AppMap.css';
import { listCoffeehouse } from "../../data/data";


class Map extends React.Component {
  settings = {
    center: { lat: 50.08033951568018, lng: 14.407263420492933 },
    zoom: 12,
    secret: 'AIzaSyBmh8Jp0cdEFCQ2N5wsXy6Hu6xBOtm9lfU',
    style: {
      width: '100%',
      height: '100%'  
    }
  };

  showWindow = index => {
    this.setState({
      currentWindowVisibleIndex: index
    })
  }

  constructor(props) {
    super(props);

    this.state = {
      windowPosition: {},
      windowWisible: false,
      currentWindowVisibleIndex: null
    }
  }

  render() {
    const {
      center,
      zoom,
      secret,
      style
    } = this.settings;
    const { currentWindowVisibleIndex } = this.state;
    
    return (
        <div className="map">
          <LoadScript
            googleMapsApiKey={secret}
          >
            <GoogleMap
              zoom={zoom}
              center={center}
              mapContainerStyle={style}
            >
            {
              listCoffeehouse.map((coffeehouse, i) => {
                return <MarkerComponent
                  className='coffee-marker'
                  infoVisible={i === currentWindowVisibleIndex}
                  onClick={() => this.showWindow(i)}
                  data={coffeehouse}
                  icon={coffeePin}
                  animation={'DROP'}
                  position={{
                    lat: coffeehouse.lat,
                    lng: coffeehouse.lng
                  }}
                  key={coffeehouse.name}
                  title={coffeehouse.name}
                />
              })
            }
            </GoogleMap>
          </LoadScript>
        </div>)
  }
}

export default Map;
