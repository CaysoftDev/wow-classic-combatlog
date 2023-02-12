import {RawLogEntry} from '#/combatlog/models';

export function readNumber(entry: RawLogEntry, index: number): number {
  if (entry.event[index] === null || entry.event[index] === undefined) {
    throw new Error(`cannot read event at position ${index}`);
  }
  if (entry.event[index].startsWith('0x')) {
    return Number.parseInt(entry.event[index], 16);
  }
  return +entry.event[index];
}

export function readString(entry: RawLogEntry, index: number): string {
  if (entry.event[index] === null || entry.event[index] === undefined) {
    throw new Error(`cannot read event at position ${index}`);
  }
  return entry.event[index].split('"').join('');
}

export function readBoolean(entry: RawLogEntry, index: number): boolean {
  if (entry.event[index] === null || entry.event[index] === undefined) {
    throw new Error(`cannot read event at position ${index}`);
  }
  return +entry.event[index] === 1;
}
