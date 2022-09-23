import {Event} from '#/combatlog/models';

export interface LogEntry<T extends Event = Event> {
  timestamp: Date;
  event: T;
}
