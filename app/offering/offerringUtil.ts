import rawOfferings from "@/data/offerings.json";
import type { Offering, SIZES, SubOffering } from "@/types/offering";

const offerings = rawOfferings as Record<string, Offering>;

export const offeringList: Offering[] = Object.values(offerings);
export const getOfferings = (id: string): Offering => offerings[id];

export const getOfferingBySize = (id: string, size: SIZES): SubOffering => {
    const o = offerings[id];

    if (!o.sizes[size]) {
        throw new Error(`Offering ${size}: unknown offering "${id}"`); 
    }

    return o.sizes[size];
};

