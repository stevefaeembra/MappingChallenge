import BUSROUTES from "../../../data/busroutes";
import { GeoJsonLayer } from '@deck.gl/layers/typed';

const BusRoutesLayer = new GeoJsonLayer({
    id: 'busRoutes',
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

export default BusRoutesLayer;
