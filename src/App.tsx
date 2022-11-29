import './App.css'
import { MAPBOX_TOKEN } from './secret.js';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from 'react-map-gl';

function App() {

  return (
    <div className="App">
      <h1>Hello Map Challenge</h1>
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        style={{width: 600, height: 400}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      />
    </div>
  )
}

export default App
