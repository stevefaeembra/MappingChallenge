
import { MAPBOX_TOKEN } from '../../secret';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { ViewState } from 'react-map-gl';
import { Layer } from 'mapbox-gl';
import DeckGL from '@deck.gl/react/typed';
import SideBar from './SideBar';

interface Props {
  layers: any[],
  initialViewState: ViewState,
  refreshLayers: Function,
}

function Mappa(props: Props) {
    console.log('Redraw mappa');

    function toggleLayer(chosenLayerId: String) {
      const newLayers = props.layers.map( layer => {
        console.log('chosen layer', layer);
        return (
          chosenLayerId === layer.id ? 
            layer.clone({visible: !(layer.props.visible)}) : 
            layer.clone()
        );
      });
      console.log('layer status now', newLayers.map(item => item.props.visible));
      console.log('updated current Layers', newLayers);
      props.refreshLayers(newLayers);
    };

   
    return (
    <div className="App">
      <h1>Pubs and Bus Routes</h1>
      <div className='container'>
        <div className='sidebar'>
          <SideBar 
            toggleHandler={toggleLayer}
            layers={props.layers} 
          />
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