import {Event, RawLogEntry} from '#/combatlog/models';

export interface EventParser<TResult extends Event = any> {
  parse(entry: RawLogEntry): TResult;
}
