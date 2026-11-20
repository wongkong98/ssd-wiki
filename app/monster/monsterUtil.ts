import rawArchfiends from "@/data/archfiends.json";
import rawGrunts from "@/data/grunts.json";
import type { Archfiend, Grunt } from "@/types/monster";

const archfiends = rawArchfiends as Record<string, Archfiend>;
const grunts = rawGrunts as Record<string, Grunt>;

export const archfiendList: Archfiend[] = Object.values(archfiends);
export const getArchfiend = (id: string): Archfiend => archfiends[id];

export const gruntList: Grunt[] = Object.values(grunts);
export const getGrunt = (id: string): Grunt => grunts[id];