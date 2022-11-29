import './App.css'
import { MAPBOX_TOKEN } from './secret.js';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from 'react-map-gl';
import DeckGL from '@deck.gl/react/typed';
import { Fragment } from 'react';


const INITIAL_VIEW_STATE = {
  longitude:  -3.053940,
  latitude: 55.941877,
  zoom: 14,
  pitch: 0,
  bearing: 0
};

function App() {

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
          >
            <Map
              style={{width: 600, height: 400}}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxAccessToken={MAPBOX_TOKEN}
            />
          </DeckGL>
        </div>
        {/* <div className='map'>Map goes here</div>       */}
      </div>
    </div>
  )
}

export default App
