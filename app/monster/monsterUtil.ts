import rawMonsters from "@/data/monsters.json";
import type { Monster } from "@/types/monster";

const monsters = rawMonsters as Record<string, Monster>;

export const monsterList: Monster[] = Object.values(monsters);
export const getMonster = (id: string): Monster => monsters[id];