import rawOfferings from "@/data/offerings.json";
import type { Offering } from "@/types/offering";

const offerings = rawOfferings as Record<string, Offering>;

export const offeringList: Offering[] = Object.values(offerings);
export const getOffering = (id: string): Offering => offerings[id];