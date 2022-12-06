import { cloneDeep } from 'lodash';
// the following requires layers/index.ts to re-export the layers
//
import { Layer } from 'mapbox-gl';
import * as CustomLayers from './layers';
import LayerWrapper from './mapping/LayerWrapper';

const LAYER_CLASSES = {
    ...CustomLayers,
}

export const LayerFactory = async (className: string) : Promise<LayerWrapper> => {
  // returns a promise to return a new LayerWrapper object
  // this means we wait for the user to select the layer to load it
  // from the module
  const module = await import(`./layers/${className}.ts`);
  const importedLayer = module.default;
  //console.log('imported layer ==>', importedLayer);
  const newLayerWrapper = new LayerWrapper({
    id: importedLayer.id,
    name: importedLayer.props.id,
    visible: true,
    layer: importedLayer,
  });
  //console.log('newLayer', newLayerWrapper);
  return Promise.resolve(newLayerWrapper);
};

export const LayerUnload = (layerWrapperInstance: LayerWrapper) : LayerWrapper => {
  // clones a layerWrapper instance, sets it to invisible and replaces
  // the layer with undefined. This should the layer from the map
  const layerWrapperCopy = cloneDeep(layerWrapperInstance);
  layerWrapperCopy.visible = false;
  layerWrapperCopy.layer = undefined;
  return layerWrapperCopy;
}

export const getAllLayers = () => {
  return Object.values(LAYER_CLASSES).map(c => c)
};

export const getAllLayerNames = () => Object.keys(LAYER_CLASSES);

