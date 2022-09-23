import {Event} from '#/combatlog/models';
import {BuildVersion} from '#/combatlog/types';

export interface CombatLogVersion extends Event {
  version: number;
  advancedLogEnabled: boolean;
  buildVersion: BuildVersion;
  projectId: number;
}
