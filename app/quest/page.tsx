"use client";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Quest } from "@/types/quest";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { getMonster } from "../monster/monsterUtil";
import { Monster } from "@/types/monster";

export default function Page() {
  const quests: Quest[] = [];
  
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.title = 'Quests';
  }, []);

  const results = useMemo(() => {
      const q = query.trim().toLowerCase();
      if (!q) return quests;
      return quests.filter(m => m.name.toLowerCase().includes(q));
  }, [query, quests]);

  const renderOffering = (quest_id: string, monster_id: string) => {
    const monster: Monster = getMonster(monster_id);
    const key = quest_id + "_" + monster_id;

    if (!monster) {
        return <Button key={key} variant="link">
            {monster_id}
        </Button>
    }

    return <Button key={key} variant="link">
        <Link href={'/monster/' + monster.id}>{monster.name}</Link>
    </Button>;
  };

  return (
    <div>
      <Input
        className="flex mb-4"
        suppressHydrationWarning
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search Quests..."
      />

      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden">Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Monsters</TableHead>
              <TableHead>Land</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((quest) => (
              <TableRow key={quest.id}>
                <TableCell className="hidden">{quest.id}</TableCell>
                <TableCell><Button variant={'link'}><Link href={'/offering/' + quest.id}>{quest.name}</Link></Button></TableCell>
                <TableCell className="capitalize">{quest.monsters.map((monster) => renderOffering(quest.id, monster))}</TableCell>
                <TableCell className="capitalize">{quest.level}</TableCell>
                <TableCell className="capitalize">{quest.land.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
