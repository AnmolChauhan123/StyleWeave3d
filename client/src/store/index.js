import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#a448ef',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './a402f-16694231050443-1920.png',
});

export default state;