import './App.css'
import { MAPBOX_TOKEN } from './secret.js';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from 'react-map-gl';
import DeckGL from '@deck.gl/react/typed';
import { Fragment } from 'react';
import { GeoJsonLayer } from '@deck.gl/layers/typed';
import PUBS from '../data/pubs';


const INITIAL_VIEW_STATE = {
  longitude:  -3.053940,
  latitude: 55.941877,
  zoom: 14,
  pitch: 0,
  bearing: 0
};

function App() {
  const layer = new GeoJsonLayer({
    id: 'geojson-layer',
    data: PUBS,
    pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    pointType: 'circle',
    lineWidthScale: 20,
    lineWidthMinPixels: 2,
    getFillColor: [255, 0, 0, 200],
    getPointRadius: 20,
    getLineWidth: 1,
    getElevation: 30
  });
  //console.log('pubs', PUBS);
  return (
    <div className="App">
      <h1>Hello Map Challenge</h1>
      <div className='container'>
        <div className='sidebar'>
          Sidebar goes here
        </div>
        <div style={{ height: '100vh', width: '70vw', position: 'relative' }} >
          <DeckGL 
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            layers={[layer]}
          >
            <Map
              style={{width: 600, height: 400}}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxAccessToken={MAPBOX_TOKEN}
            />
          </DeckGL>
        </div>
      </div>
    </div>
  )
}

export default App
