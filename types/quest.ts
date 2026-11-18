import { Faction } from "./faction";
import { Offering } from "./offering";

export interface Quest {
    id: string,
    name: string,
    level: number,
    grunts: string[],
    archfiends: string[],
    land: string,
    rewards: Record<string, Offering[]>
}

export interface Pact {
    id: string,
    chapter: string,
    quests: Record<string, Quest[]>
}

export interface SorcerousDeed {
    faction: Faction,
    pacts: Record<string, Pact[]>
}

export interface ForgttenPact {
    id: string,
    name: string,
    pacts: Record<string, Pact[]>
}
