import {EventParser} from '#/combatlog/parsers/event-parser';
import {MapChange, RawLogEntry} from '#/combatlog/models';
import {readNumber, readString} from '#/combatlog/parsers';

export class MapChangeParser implements EventParser<MapChange> {
  parse(entry: RawLogEntry): MapChange {
    return {
      type: readString(entry, 0),
      mapId: readNumber(entry, 1),
      name: readString(entry, 2),
      x: readNumber(entry, 3),
      y: readNumber(entry, 4),
      z: readNumber(entry, 5),
      o: readNumber(entry, 6),
    }
  }
}
