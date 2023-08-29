import { ActorPF2e } from "@/interfaces/pf2e/actor";
import { ChatMessagePF2e } from "@/interfaces/pf2e/chat-message";
declare const ACTION_COST: readonly ["free", "reaction", 1, 2, 3];
type ActionCost = (typeof ACTION_COST)[number];
interface ActionMessageOptions {
  blind: boolean;
  variant: string;
  whisper: string[];
}
interface ActionVariantUseOptions extends Record<string, unknown> {
  actors: ActorPF2e | ActorPF2e[];
  event: Event;
  traits: string[];
}
interface ActionVariant {
  cost?: ActionCost;
  description?: string;
  glyph?: string;
  name?: string;
  slug: string;
  traits: string[];
  toMessage(options?: Partial<ActionMessageOptions>): Promise<ChatMessagePF2e | undefined>;
  use(options?: Partial<ActionVariantUseOptions>): Promise<unknown>;
}
interface ActionUseOptions extends ActionVariantUseOptions {
  variant: string;
}
interface Action {
  cost?: ActionCost;
  description?: string;
  glyph?: string;
  img?: string;
  name: string;
  slug: string;
  traits: string[];
  variants: Array<ActionVariant>;
  toMessage(options?: Partial<ActionMessageOptions>): Promise<ChatMessagePF2e | undefined>;
  /** Uses the default variant for this action, which will usually be the first one in the collection. */
  use(options?: Partial<ActionUseOptions>): Promise<unknown>;
}
export type { ACTION_COST, Action, ActionCost, ActionMessageOptions, ActionUseOptions, ActionVariant, ActionVariantUseOptions };
