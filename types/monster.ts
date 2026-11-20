import { Ailment, Element } from "./element";

export type Family = 'goblin' | 'orc' | 'fairy' | 'fruit_spider' | 'ghoul' | 'gnome' | 'kobold' | 'orichalcum'

interface Monster {
    id: string,
    name: string,
    weakness: Element[],
    essence: string
}

export interface Archfiend extends Monster {
    element: Element[],
    ailment: Ailment[],
    breakablePart: string[],
    breakReward: string[],
}

export interface Grunt extends Monster {
    family: Family,
    element: Element,
}
