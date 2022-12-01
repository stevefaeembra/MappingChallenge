import './App.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import { GeoJsonLayer, TextLayer, IconLayer } from '@deck.gl/layers/typed';
import PUBS from '../data/pubs';
import BUSROUTES from '../data/busroutes'
import ICON_ATLAS from '../data/assets/beer.png';
import Mappa from './components/mapping/Mappa';
import BUILDINGS from '../data/buildings';
import { Layer } from 'react-map-gl';
import { Suspense, useState } from 'react';
import PointsAndLabelsLayer from './components/mapping/PointsAndLabelsLayer';

const ICON_MAPPING = { marker: {x: 0, y: 0, width: 512, height: 512, mask: true} };

const INITIAL_VIEW_STATE = {
  longitude:  -3.053940,
  latitude: 55.941877,
  zoom: 14,
  pitch: 0,
  bearing: 0,
};

function App() {
  console.log('Rendered map');
  
  // const layer = new GeoJsonLayer({
  //   id: 'Pubs Points',
  //   data: PUBS.features,
  //   pickable: true,
  //   stroked: false,
  //   filled: true,
  //   extruded: true,
  //   pointType: 'circle',
  //   lineWidthScale: 20,
  //   lineWidthMinPixels: 2,
  //   getFillColor: [255, 255, 0, 200],
  //   getPointRadius: 30,
  //   getLineWidth: 1,
  //   getElevation: 30,
  //   fontSettings: {sdf: true, outlineWidth: 4,},
  // });
  
  // const layer2 = new TextLayer({
  //   id: 'Pubs Labels',
  //   data: PUBS.features,
  //   pickable: true,
  //   getPosition: d => d.geometry.coordinates,
  //   getText: d => d.properties.name,
  //   sizeUnits: 'pixels',
  //   getSize: 20,
  //   getAngle: 0,
  //   getTextAnchor: 'middle',
  //   getAlignmentBaseline: 'center',
  //   getElevation: 100,
  //   billboard: true,
  //   getColor: [0,0,0],
  //   getPixelOffset: [0,-20],
  // });
  
  const pubsLayer = new PointsAndLabelsLayer(PUBS);

  const layer3 = new GeoJsonLayer({
    id: 'Bus routes',
    data: BUSROUTES,
    pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    pointType: 'circle',
    lineWidthScale: 10,
    lineWidthMinPixels: 2,
    getFillColor: [160, 160, 180, 200],
    getLineColor: d => [0,0,255],
    getPointRadius: 100,
    getLineWidth: 1,
    getElevation: 60,
  });
  
  const layer4 = new IconLayer({
    id: 'Pubs Icons',
    data: PUBS.features,
    pickable: true,
    iconAtlas: ICON_ATLAS,
    iconMapping: ICON_MAPPING,
    getIcon: d => 'marker',
    sizeScale: 5,
    getPosition: d => d.geometry.coordinates,
    getSize: d => 5,
    getColor: d => [255, 0, 0],
    billboard: true,
    getPixelOffset: [0,-20],
  });

  const layer5 = new GeoJsonLayer({
    id: 'Buildings',
    data: BUILDINGS.features,
    pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    pointType: 'circle',
    lineWidthScale: 20,
    lineWidthMinPixels: 2,
    getFillColor: [255, 255, 255, 255],
    getPointRadius: 15,
    getLineWidth: 1,
    getElevation: 10,
    //fontSettings: {sdf: true, outlineWidth: 4,},
    visible: false,
  });
  

  let [layers, setLayers] = useState([layer5, layer3, layer4, pubsLayer]);


  const refreshLayerList = (newLayers: Layer[]) => {
    console.log('refreshed Layer list');
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
