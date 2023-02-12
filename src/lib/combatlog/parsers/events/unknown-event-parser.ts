import {EventParser} from '#/combatlog/parsers/event-parser';
import {Event, RawLogEntry} from '#/combatlog/models';
import {readString} from '#/combatlog/parsers';

export interface UnknownEvent extends Event {
  data: string[];
}
export class UnknownEventParser implements EventParser<UnknownEvent> {
  parse(entry: RawLogEntry): UnknownEvent {
    return {
      type: readString(entry, 0),
      data: entry.event
    }
  }
}
