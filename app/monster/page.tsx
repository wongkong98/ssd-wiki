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
import { monsterList } from "./monsterUtil";
import type { Monster } from "@/types/monster";
import { getOffering } from "../offering/offerringUtil";
import { Offering } from "@/types/offering";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useMemo, useState } from "react";

export default function Page() {
    const monsters: Monster[] = monsterList;

    const [query, setQuery] = useState("");

    useEffect(() => {
        document.title = 'Monsters';
    }, []);

    const results = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return monsters;
        return monsters.filter(m => m.name.toLowerCase().includes(q));
    }, [query, monsters]);
    
    const renderOffering = (monster_id: string, offering_id: string) => {
        const offering: Offering = getOffering(offering_id);
        const key = monster_id + "_" + offering_id;

        if (!offering) {
            return <Button key={key} variant="link">
                {offering_id}
            </Button>
        }

        return <Button key={key} variant="link">
            <Link href={'/offering/' + offering.id}>{offering.name}</Link>
        </Button>;
    };

    return (
        <div>
            <Input
                className="flex mb-4"
                suppressHydrationWarning
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search Monsters..."
            />

            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden">Id</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Element</TableHead>
                            <TableHead>Ailment</TableHead>
                            <TableHead>Weakness</TableHead>
                            <TableHead>Breakable Parts</TableHead>
                            <TableHead>Break Reward</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {results.map((monster) => (
                            <TableRow key={monster.id}>
                                <TableCell className="hidden">{monster.id}</TableCell>
                                <TableCell>
                                    <Button variant="link">
                                        <Link href={'/monster/' + monster.id}>{monster.name}</Link>
                                    </Button>
                                </TableCell>
                                <TableCell className="capitalize">{monster.element.map((ele, idx) => idx !== monster.element.length - 1 ? ele + ", " : ele)}</TableCell>
                                <TableCell className="capitalize">{monster.ailment.map((ail, idx) => idx !== monster.ailment.length - 1 ? ail + ", " : ail)}</TableCell>
                                <TableCell className="capitalize">{monster.weakness.map((weak, idx) => idx !== monster.weakness.length - 1 ? weak + ", " : weak)}</TableCell>
                                <TableCell className="capitalize">{monster.breakablePart.map((part, idx) => idx !== monster.breakablePart.length - 1 ? part + ", " : part)}</TableCell>
                                <TableCell className="capitalize">{monster.breakReward.map((part) => renderOffering(monster.id, part))}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
