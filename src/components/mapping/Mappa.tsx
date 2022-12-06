
import { MAPBOX_TOKEN } from '../../secret';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { ViewState } from 'react-map-gl';
import { Layer } from 'mapbox-gl';
import DeckGL from '@deck.gl/react/typed';
import SideBar from './SideBar';
import { INITIAL_VIEW_STATE } from '../../constants';
import { useState } from 'react';
import LayerWrapper from './LayerWrapper';
import cloneDeep from 'lodash';
import { LayerUnload } from '../layerFactory';

interface Props {
  props: { longitude: number; latitude: number; zoom: number; pitch: number; bearing: number; };
  layers: LayerWrapper[],
  initialViewState: ViewState,
  refreshLayers: Function,
}

function Mappa(props: Props) {
    let [viewState, setViewState] = useState(props.initialViewState);

    async function toggleLayer(chosenLayerId: String) {
      console.log(`toggleLayer(${chosenLayerId})`);
      console.log(`with layers`, props.layers);
      const newLayers = await props.layers.map( async layerwrap => {
        if (chosenLayerId === layerwrap.id) {
          if (!layerwrap.layer) {
            // not loaded yet, so load it
            const newLayer = await layerwrap.loadLayer(layerwrap.name);
            return newLayer;
          } else {
            // otherwise, unload it
            return LayerUnload(layerwrap);
          }
        }
        else {
          return layerwrap;
        }
      });
      //console.log('New layers updated', newLayers);
      Promise.all(newLayers).then((newLayers) => {
        console.log('New layers updated', newLayers);
        props.refreshLayers(newLayers);
        return newLayers;
      });
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
            initialViewState={viewState}
            controller={true}
            layers={props.layers.map(layerWrap => layerWrap.layer)}
            getTooltip={({object}) => object && (object?.properties?.name || object?.properties?.ref || "No data")}
            // layerFilter={ ({layer, viewport}) => {
            //   if (viewport.zoom<15 && layer.id === 'Pubs Labels') {
            //     // hide labels when zoomed out
            //     return false;
            //   }
            //   return true;
            //   }
            // }
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
