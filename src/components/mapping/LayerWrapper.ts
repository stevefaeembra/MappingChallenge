import { LayerFactory } from './../layerFactory';
// provides a wrapper around layer

import { Layer } from "mapbox-gl";

interface LayerWrapperProps {
  name: string,
  visible: boolean,
  layer?: Layer,
}

class LayerWrapper {
  id?: string;
  name: string;
  visible: boolean;
  layer?: Layer;

  constructor(props: LayerWrapperProps) {
    this.id = `layer_${props.name}`;
    this.name = props.name;
    this.visible = false;
    this.layer = undefined;
  }

  loadLayer(layerName: string) {
    this.layer = LayerFactory(layerName);
  }

};

export default LayerWrapper;
