import {Event} from '#/combatlog/models';

export interface ZoneChange extends Event {
  instanceId: number;
  name: string;
  difficultyId: number;
}
