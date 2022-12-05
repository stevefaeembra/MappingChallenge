import WORLD from '../../../data/shouldbefixed5';
import { GeoJsonLayer } from '@deck.gl/layers/typed';

const worldLayer = new GeoJsonLayer({
    id: 'World',
    data: WORLD,
    pickable: true,
    stroked: true,
    filled: true,
    extruded: false,
    lineWidthScale: 1,
    lineWidthMinPixels: 1,
    getFillColor: [255, 0, 0],
    getPointRadius: 15,
    getLineWidth: 1,
    //getElevation: 10,
    //getPolygon: d => d.geometry.coordinates,
    //fontSettings: {sdf: true, outlineWidth: 4,},
    visible: true,
});

export default worldLayer;