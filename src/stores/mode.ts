
import { atom } from 'nanostores';

export type Mode = 'lite' | 'think';

export const $mode = atom<Mode>('lite');

export function toggleMode() {
  $mode.set($mode.get() === 'lite' ? 'think' : 'lite');
}
