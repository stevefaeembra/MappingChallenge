import * as CustomLayers from './layers';

const LAYER_CLASSES = {
    ...CustomLayers,
}

export const LayerFactory = (className: string) => {
  const Class = LAYER_CLASSES[className];
  return new Class();
};

export const getAllLayers = () => {
  return Object.values(LAYER_CLASSES).map(c => c)
};
