import { LayerFactory } from './../layerFactory';
// provides a wrapper around layer

import { Layer } from "mapbox-gl";

interface LayerWrapperProps {
  id: string,
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
    this.layer = props.layer || undefined;
  }

  async loadLayer(layerName: string): Promise<LayerWrapper> {
    const newWrapperInstance = await LayerFactory(layerName);
    console.log('layer loaded', newWrapperInstance);
    return Promise.resolve(newWrapperInstance);
  }

};

export default LayerWrapper;
