import './App.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import Mappa from './components/mapping/Mappa';
import { Layer } from 'react-map-gl';
import { Suspense, useState } from 'react';
import { ICON_MAPPING, INITIAL_VIEW_STATE } from './constants';
import { getAllLayers } from './components/layerFactory';


function App() {

  let [layers, setLayers] = useState(getAllLayers());

  const refreshLayerList = (newLayers: Layer[]) => {
    setLayers(newLayers);
  };

  return (
      <Mappa
        initialViewState={INITIAL_VIEW_STATE}
        layers={layers}
        refreshLayers={refreshLayerList}
      />
  );

}

export default App
