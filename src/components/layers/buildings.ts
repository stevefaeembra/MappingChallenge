import BUILDINGS from '../../../data/buildings';
import { PolygonLayer } from '@deck.gl/layers/typed';

const polygons = BUILDINGS.features.map(feature => {
    return {
        coordinates: feature.geometry.coordinates
    }
});

const buildings = new PolygonLayer({
    id: 'Buildings',
    data: polygons,
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
    getPolygon: d => d.coordinates,
    //fontSettings: {sdf: true, outlineWidth: 4,},
    visible: false,
});

export default buildings;