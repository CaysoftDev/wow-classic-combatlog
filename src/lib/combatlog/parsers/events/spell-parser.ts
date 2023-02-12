import {EventParser} from '#/combatlog/parsers/event-parser';
import {RawLogEntry, Spell} from '#/combatlog/models';
import {readNumber, readString} from '#/combatlog/parsers';

export class SpellParser implements EventParser<Spell> {
  parse(entry: RawLogEntry): Spell {
    return {
      type: readString(entry, 0),
      sourceGUID: readString(entry, 1),
      sourceName: readString(entry, 2),
      sourceFlags: readNumber(entry, 3),
      sourceFlags2: readNumber(entry, 4),
      destGUID: readString(entry, 5),
      destName: readString(entry, 6),
      destFlags: readNumber(entry, 7),
      destFlags2: readNumber(entry, 8),
      spellId: readNumber(entry, 9),
      spellName: readString(entry, 10),
      spellSchool: readNumber(entry, 11),
    }
  }
}
