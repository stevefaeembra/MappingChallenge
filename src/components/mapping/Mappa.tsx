
import { MAPBOX_TOKEN } from '../../secret';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { ViewState } from 'react-map-gl';
import { Layer } from 'mapbox-gl';
import DeckGL from '@deck.gl/react/typed';
import SideBar from './SideBar';
import { INITIAL_VIEW_STATE } from '../../constants';
import { useState } from 'react';

interface Props {
  props: { longitude: number; latitude: number; zoom: number; pitch: number; bearing: number; };
  layers: any[],
  initialViewState: ViewState,
  refreshLayers: Function,
}

function Mappa(props: Props) {
    let [viewState, setViewState] = useState(props.initialViewState);

    const resetLocation = () => {};

    function toggleLayer(chosenLayerId: String) {
      const newLayers = props.layers.map( layer => {
        return (
          chosenLayerId === layer.id ? 
            layer.clone({visible: !(layer.props.visible)}) : 
            layer.clone()
        );
      });
      props.refreshLayers(newLayers);
    };

   
    return (
    <div className="App">
      <h1>Pin the tail on the country</h1>
      <div className='container'>
        <div className='sidebar'>
          <SideBar 
            toggleHandler={toggleLayer}
            layers={props.layers} 
          />
        </div>
        <div style={{ height: '100vh', width: '70vw', position: 'relative' }} >
          <DeckGL 
            initialViewState={viewState}
            controller={true}
            layers={props.layers}
            getTooltip={({object}) => object && (object?.properties?.name || object?.properties?.ref || object?.properties?.SOVEREIGNT || "No data")} 
            layerFilter={ ({layer, viewport}) => {
              if (viewport.zoom<15 && layer.id === 'Pubs Labels') {
                // hide labels when zoomed out
                return false;
              }
              return true;
              }
            }
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

function useCallback(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}
