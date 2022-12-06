import PUBS from "../../../data/pubs";
import { IconLayer } from '@deck.gl/layers/typed';
import ICON_ATLAS from '../../../data/assets/beer.png';
import { ICON_MAPPING } from '../../constants';

const pubIcons = new IconLayer({
    id: 'pubIcons',
    data: PUBS.features,
    pickable: true,
    iconAtlas: ICON_ATLAS,
    iconMapping: ICON_MAPPING,
    getIcon: d => 'marker',
    sizeScale: 5,
    getPosition: d => d.geometry.coordinates,
    getSize: d => 5,
    getColor: d => [255, 0, 0],
    billboard: true,
    getPixelOffset: [0,0],
 });

 export default pubIcons;


