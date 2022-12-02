import BUILDINGS from '../../../data/buildings';
import { GeoJsonLayer } from '@deck.gl/layers/typed';

const buildings = new GeoJsonLayer({
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

export default buildings;