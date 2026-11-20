export interface Realm {
    id: 'north' | 'west' | 'east' | 'south',
    name: string,
    lands: string[]
}

export interface Land {
    id: string,
    name: string,
    regions: string[],
}

export interface Region {
    id: string,
    name: string
}
