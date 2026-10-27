import fs from 'node:fs';
import { resolve } from 'node:path';
import { href } from './paths';
export interface ProductMedia { id: string; src: string; alt: string; caption: string; }
const captions: Record<string,string> = {
 'workbench': 'Actual RC5 workbench. Physical connections and probe positions belong to the desktop application.',
 'oscilloscope': 'Actual RC5 Oscilloscope with reconstructed steady-state voltage measurements.',
 'plot-studio': 'Actual RC5 Plot Studio showing current scientific results.',
 'experiment-library': 'Actual RC5 Experiment Library and its five guided experiments.',
 'wave-propagation': 'Actual RC5 Wave Propagation experiment.',
 'reflection-coefficient': 'Actual RC5 Reflection Coefficient experiment.',
 'standing-waves-vswr': 'Actual RC5 Standing Waves & VSWR experiment.',
 'lossy-transmission-lines': 'Actual RC5 Lossy Transmission Lines experiment.',
 'distortionless-transmission-lines': 'Actual RC5 Distortionless Transmission Lines experiment.',
};
export function media(id: string): ProductMedia | null {
 for (const ext of ['webp','png']) {
  const file = `media/${id}.${ext}`;
  if (fs.existsSync(resolve('public', file))) return { id, src: href(file), alt: captions[id] || 'Actual RBE WaveLab application', caption: captions[id] || 'Actual RBE WaveLab application' };
 }
 return null;
}
export const hasDemo = () => fs.existsSync(resolve('public/media/wave-propagation-workflow.webm'));
