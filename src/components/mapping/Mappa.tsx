
import { MAPBOX_TOKEN } from '../../secret';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { ViewState } from 'react-map-gl';
import { Layer } from 'mapbox-gl';
import DeckGL from '@deck.gl/react/typed';

interface Props {
  layers: Layer[],
  initialViewState: ViewState,
}

function Mappa(props: Props) {
    console.log('props', props);
    return (
    <div className="App">
      <h1>Pubs and Bus Routes</h1>
      <div className='container'>
        <div className='sidebar'>
          Sidebar goes here
        </div>
        <div style={{ height: '100vh', width: '70vw', position: 'relative' }} >
          <DeckGL 
            initialViewState={props.initialViewState}
            controller={true}
            layers={props.layers}
          >
            <Map
              style={{width: 600, height: 400}}
              mapStyle="mapbox://styles/mapbox/outdoors-v12"
              mapboxAccessToken={MAPBOX_TOKEN}
            />
          </DeckGL>
        </div>
      </div>
    </div>
  )

} 

export default Mappa;