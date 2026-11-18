import { Ailment, Element } from "./element";

export interface Monster {
    id: string,
    name: string,
    element: Element[],
    ailment: Ailment[],
    weakness: Element[],
    type: 'grunts' | 'archfiend',
    breakablePart: string[],
    breakReward: string[],
}
