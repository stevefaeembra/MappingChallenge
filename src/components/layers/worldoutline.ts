import WORLD from '../../../data/landforms';
import { GeoJsonLayer } from '@deck.gl/layers/typed';

// const polygons = WORLD.features.map((feature,ix) => {
//     console.log('new feature: ',ix);
//     return {
//         coordinates: feature.geometry.coordinates
//     }
// });

const polygons = WORLD.features.map(feature => {
    return {
        coordinates: feature.geometry.coordinates
    }
});

//console.log('polygons', polygons);
const worldLayer = new GeoJsonLayer({
    id: 'World',
    data: WORLD,
    pickable: true,
    stroked: true,
    filled: true,
    extruded: false,
    lineWidthScale: 10,
    lineWidthMinPixels: 2,
    getFillColor: [255, 0, 0],
    getPointRadius: 15,
    getLineWidth: 1,
    //getElevation: 10,
    //getPolygon: d => d.geometry.coordinates,
    //fontSettings: {sdf: true, outlineWidth: 4,},
    visible: true,
});

export default worldLayer;