// the following requires layers/index.ts to re-export the layers
//
import { Layer } from 'mapbox-gl';
import * as CustomLayers from './layers';

const LAYER_CLASSES = {
    ...CustomLayers,
}

export const LayerFactory = (className: string) : Layer => {
  const Class = LAYER_CLASSES[className];
  return new Class();
};

export const getAllLayers = () => {
  return Object.values(LAYER_CLASSES).map(c => c)
};

export const getAllLayerNames = () => Object.keys(LAYER_CLASSES);

