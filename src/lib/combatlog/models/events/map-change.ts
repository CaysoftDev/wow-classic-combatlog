import {Event} from '#/combatlog/models';

export interface MapChange extends Event {
  mapId: number;
  name: string;
  x: number;
  y: number;
  z: number;
  o: number;
}
