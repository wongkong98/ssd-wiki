import { Faction } from "./faction";

export interface Quest {
    id: string,
    name: string,
    difficulty: number,
    target: string,
    grunts: string[],
    archfiends: string[],
    region: string,
    rewards: OfferingRef[],
    unlockCondition?: RouteUnlockCondition
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

interface OfferingRef {
    offering: string,
    size: string
}

interface RouteUnlockCondition {
    type: 'sacrifice' | 'save' | 'complete'
    quest: string
}

interface WhiteQuestUnlockCondition {
    type: 'le' | 'se'
    quantity: number,
    unlocks: string
}

interface BlackQuestUnlockCondition {
    text: string
}
