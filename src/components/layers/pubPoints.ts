import PUBS from "../../../data/pubs";
import { GeoJsonLayer } from '@deck.gl/layers/typed';

const pubPoints = new GeoJsonLayer({
    id: 'Pubs Points',
    data: PUBS.features,
    pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    pointType: 'circle',
    lineWidthScale: 20,
    lineWidthMinPixels: 2,
    getFillColor: [255, 255, 0, 200],
    getPointRadius: 30,
    getLineWidth: 1,
    getElevation: 100,
    pointBillboard: true,
    fontSettings: {sdf: true, outlineWidth: 4,},
    visible: false,
});

export default pubPoints;