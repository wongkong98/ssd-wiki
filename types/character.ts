import { Faction } from "./faction"

export interface Character {
    id: number,
    name: string,
    faction: Faction,
    arm: Arm
}

interface Arm {
    type: 'dark' | 'neutral' | 'divine',
    level: number
}