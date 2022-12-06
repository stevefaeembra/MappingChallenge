// the following requires layers/index.ts to re-export the layers
//
import { Layer } from 'mapbox-gl';
import * as CustomLayers from './layers';
import LayerWrapper from './mapping/LayerWrapper';

const LAYER_CLASSES = {
    ...CustomLayers,
}

export const LayerFactory = async (className: string) : Promise<LayerWrapper> => {
  // const Clazz = await LAYER_CLASSES[className];
  // console.log('Clazz', Clazz);
  // return Clazz;
  const module = await import(`./layers/${className}.ts`);
  const importedLayer = module.default;
  console.log('imported layer ==>', importedLayer);
  const newLayerWrapper = new LayerWrapper({
    id: importedLayer.id,
    name: importedLayer.props.id,
    visible: true,
    layer: importedLayer,
  });
  console.log('newLayer', newLayerWrapper);
  return Promise.resolve(newLayerWrapper);
};

export const getAllLayers = () => {
  return Object.values(LAYER_CLASSES).map(c => c)
};

export const getAllLayerNames = () => Object.keys(LAYER_CLASSES);

