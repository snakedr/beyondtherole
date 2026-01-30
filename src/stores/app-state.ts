
import { atom } from 'nanostores';

export const $isThink = atom<boolean>(false);

export function toggleMode() {
  $isThink.set(!$isThink.get());
}
