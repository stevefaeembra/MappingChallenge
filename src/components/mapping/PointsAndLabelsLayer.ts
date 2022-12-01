// Composite layer which combines a geojson point and text label layer
import { CompositeLayer, GeoJsonLayer, TextLayer } from 'deck.gl/typed';

class PointsAndLabelsLayer extends CompositeLayer {

  data: Record<string, any>; // geojson data

  constructor(data: Record<string,any>) {
    super();
    this.data = data;
  };


  renderLayers() {
    return [
      new GeoJsonLayer({
        id: 'Pubs Points',
        data: this.data.features,
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
        getElevation: 30,
        fontSettings: {sdf: true, outlineWidth: 4,},
      }),
      new TextLayer({
        id: 'Pubs Labels',
        data: this.data.features,
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
      }),
    ];
  }
};

export default PointsAndLabelsLayer;