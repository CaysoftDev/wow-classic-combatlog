import {LogEntry} from '#/combatlog/models';
import {Parser} from '#/combatlog/parsers';

const parseTimestamp = (data: string): Date => {
  const [date, time] = data.split(' ');
  const [month, day] = date.split('/');
  const currentYear = new Date().getFullYear();
  return new Date(
    Date.parse(`${currentYear}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T${time}`)
  );
}

export function parseRow(row: string): LogEntry {
  const [timestamp, data] = row.split('  ');
  const rawEvent = data.split(',');
  const parser = new Parser();
  return parser.parse({
    timestamp: parseTimestamp(timestamp),
    event: rawEvent
  })
}
