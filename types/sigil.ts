import { Essence } from "./essence";

export interface Sigil {
    id: number,
    name: string,
    location: 'upper' | 'forearm' | 'palm' | 'hand' | 'heart',
    effect1: Effect,
    effect2: Effect,
    requirement: Requirement[],
    acquisition: string
}

interface Effect {
    name: string,
    description: string,
    impact: string,
    activation: string | null
}

interface Requirement {
    condition: Essence | string,
    quantity: number
}

