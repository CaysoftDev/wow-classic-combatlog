import {LogEntry, RawLogEntry} from '#/combatlog/models';
import {EventParserMapping} from '#/combatlog/parsers';

export class Parser {
  parse(entry: RawLogEntry): LogEntry {
    const EventParser = EventParserMapping[entry.event[0]];
    const event = new EventParser().parse(entry)
    return {
      timestamp: entry.timestamp,
      event: event
    };
  }
}
