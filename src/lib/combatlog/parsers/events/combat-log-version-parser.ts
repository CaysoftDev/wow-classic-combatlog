import {EventParser} from '#/combatlog/parsers/event-parser';
import {CombatLogVersion, RawLogEntry} from '#/combatlog/models';
import {BuildVersion} from '#/combatlog/types';

export class CombatLogVersionParser implements EventParser<CombatLogVersion> {
  parse(entry: RawLogEntry): CombatLogVersion {
    return {
      type: entry.event[0],
      version: +entry.event[1],
      advancedLogEnabled: +entry.event[3] === 1,
      buildVersion: entry.event[5] as BuildVersion,
      projectId: +entry.event[7]
    }
  }
}
