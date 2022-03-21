import { Party } from "src/types/party";

/** Data for passing around shorthand info about a game when results might depend (ex: computing boss health). */
export interface GameContext {
  party: Party;
}
