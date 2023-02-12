import {EventParser} from '#/combatlog/parsers/event-parser';
import {RawLogEntry, ZoneChange} from '#/combatlog/models';
import {readNumber, readString} from '#/combatlog/parsers';

export class ZoneChangeParser implements EventParser<ZoneChange> {
  parse(entry: RawLogEntry): ZoneChange {
    return {
      type: readString(entry, 0),
      instanceId: readNumber(entry, 1),
      name: readString(entry, 2),
      difficultyId: readNumber(entry, 3),
    }
  }
}
