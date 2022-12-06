import './App.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import Mappa from './components/mapping/Mappa';
import { Layer } from 'react-map-gl';
import { useState } from 'react';
import { INITIAL_VIEW_STATE } from './constants';
import { getAllLayers, getAllLayerNames } from './components/layerFactory';
import LayerWrapper from './components/mapping/LayerWrapper';


function App() {

  console.log('Layer names', getAllLayerNames());

  const layerList = getAllLayerNames().map(layerName => new LayerWrapper(
    {
      id: layerName,
      name: layerName,
      visible: false,
      layer: undefined,
    }
  ));

  console.log('layerList', layerList);
  let [layers, setLayers] = useState(layerList);

  const refreshLayerList = (newLayers: LayerWrapper[]) => {
    setLayers([...newLayers]);
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
