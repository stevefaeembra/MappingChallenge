export const ICON_MAPPING = { marker: {x: 0, y: 0, width: 512, height: 512, mask: true} };

export const INITIAL_VIEW_STATE = {
  longitude:  -3.053940,
  latitude: 55.941877,
  zoom: 14,
  pitch: 0,
  bearing: 0,
};

export const MAP_THEMES : Record<string, string> = {
  'light': 'mapbox://styles/mapbox/light-v11',
  'dark' : 'mapbox://styles/mapbox/dark-v11'
};

export const THEME_KEY = 'themeName';
