import { Element } from "./element";

const SIZES = ['s', 'm', 'l', 'plus'] as const;
const TYPES = [
    // Attack
    'blood', 'stonefist', 'blitz', 'weapon', 'arm',
    'spear', 'beast', 'morph', 'roar', 'homing',
    'throw', 'explosive', 'special', 'other', 'summon',
    'transform', 'bomb', 'mine', 'terrain',
    // Support
    'heal_solo', 'heal_area', 'arboreal', 'group', 'armor',
    'shield', 'binding', 'vacuum', 'lure', 'stasis',
    'irregular', 'barrier', 'parasitic', 'rising',
    //Special
    'replicator', 'evasive', 'spatial', 'faction',
] as const;

type Size = typeof SIZES[number];
type Type = typeof TYPES[number];

export interface Offering {
    id: string,
    name: string,
    category: 'attack' | 'support' | 'special',
    mainType: Type,
    subType: number | null,
    element: Element,
    forceRatio: number,
    range: 'short' | 'mid' | 'long',
    sizes: Partial<Record<Size, SubOffering>>;
}

interface SubOffering {
    power: number,
    casts: number | null,
    duration: number | null,
    acquisition: string,
    fusable: boolean
}