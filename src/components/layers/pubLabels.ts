import PUBS from "../../../data/pubs";
import { TextLayer } from '@deck.gl/layers/typed';

const pubLabels = new TextLayer({
    id: 'pubLabels',
    data: PUBS.features,
    pickable: true,
    getPosition: d => d.geometry.coordinates,
    getText: d => d.properties.name,
    sizeUnits: 'pixels',
    getSize: 20,
    getAngle: 0,
    getTextAnchor: 'middle',
    getAlignmentBaseline: 'center',
    getElevation: 100,
    billboard: true,
    getColor: [0,0,0],
    getPixelOffset: [0,-20],
    fontSettings: { buffer: 8, sdf: true},
    background: true,
    visible: true,
});

export default pubLabels;
