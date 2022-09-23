import {CombatLogVersionParser} from '#/combatlog/parsers/events';
import {EventParser} from '#/combatlog/parsers/event-parser';
import {Type} from '#/combatlog/types';

export type EventParserMap = {[key: string]: Type<EventParser>};

export const EventParserMapping: EventParserMap = {
  'COMBAT_LOG_VERSION': CombatLogVersionParser,
}
