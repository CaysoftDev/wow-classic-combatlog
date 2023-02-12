import {Event} from '#/combatlog/models';

export interface Spell extends Event {
  sourceGUID: string;
  sourceName: string;
  sourceFlags: number;
  sourceFlags2: number;
  destGUID: string;
  destName: string;
  destFlags: number;
  destFlags2: number;
  spellId: number;
  spellName: string;
  spellSchool: number;
}
