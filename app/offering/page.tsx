"use client";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import Link from "next/link";
import { offeringList } from "./offerringUtil";
import type { Offering } from "@/types/offering";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";

export default function Page() {
    const offerings: Offering[] = offeringList;

    const [query, setQuery] = useState("");

    useEffect(() => {
        document.title = 'Offerings';
    }, []);

    const results = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return offerings;
        return offerings.filter(m => m.name.toLowerCase().includes(q));
    }, [query, offerings]);

    return (
        <div>
            <Input
                className="flex mb-4"
                suppressHydrationWarning
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search Offerings..."
            />

            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden">Id</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Element</TableHead>
                            <TableHead>Force Ratio</TableHead>
                            <TableHead>Range</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {results.map((offering) => (
                            <TableRow key={offering.id}>
                                <TableCell className="hidden">{offering.id}</TableCell>
                                <TableCell><Button variant={'link'}><Link href={'/offering/' + offering.id}>{offering.name}</Link></Button></TableCell>
                                <TableCell className="capitalize">{offering.category}</TableCell>
                                <TableCell className="capitalize">{offering.mainType}</TableCell>
                                <TableCell className="capitalize">{offering.element}</TableCell>
                                <TableCell>{offering.forceRatio}%</TableCell>
                                <TableCell className="capitalize">{offering.range}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
