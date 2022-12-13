
import { MAPBOX_TOKEN } from '../../secret';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { ViewState } from 'react-map-gl';
import DeckGL from '@deck.gl/react/typed';
import SideBar from './SideBar';
import { FC, ReactElement, useState } from 'react';
import { MAP_THEMES } from '../../constants';

interface Props {
  props: { longitude: number; latitude: number; zoom: number; pitch: number; bearing: number; };
  layers: any[],
  initialViewState: ViewState,
  refreshLayers: Function,
}

const Mappa: FC<Props> = (props: Props) : ReactElement =>  {
    let [viewState, ] = useState(props.initialViewState);

    let [currentTheme, setCurrentTheme] = useState(window.localStorage.getItem('themeName') || 'light');
    console.log('theme is now', currentTheme);

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
    <div className="bg-stone-300 dark:bg-stone-900 text-stone-900 dark:text-stone-300">
      <h1>Pubs and Bus Routes</h1>
      <div className="container">
        <div className="sidebar">
          <SideBar
            toggleHandler={toggleLayer}
            layers={props.layers}
            changeThemeHandler={setCurrentTheme}
          />
        </div>
        <div style={{ height: '100vh', width: '70vw', position: 'relative' }} >
          <DeckGL
            initialViewState={viewState}
            controller={true}
            layers={props.layers}
            getTooltip={({object}) => object && (object?.properties?.name || object?.properties?.ref || "No data")}
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
              mapStyle={MAP_THEMES[currentTheme]}
              mapboxAccessToken={MAPBOX_TOKEN}
            />
          </DeckGL>
        </div>
      </div>
    </div>
  )

}

export default Mappa;

