'use client';

import Link from 'next/link';
import { archfiendList } from './monsterUtil';
import type { Archfiend } from '@/types/monster';
import { getOfferings } from '../offering/offerringUtil';
import type { Offering } from '@/types/offering';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect, useMemo, useState } from 'react';
import { DataTable } from '@/components/data-table/data-table';
import { columns } from './columns';

export default function Page() {
  const monsters: Archfiend[] = archfiendList;

  const [query, setQuery] = useState('');

  useEffect(() => {
    document.title = 'Monsters';
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return monsters;
    return monsters.filter((m) => m.name.toLowerCase().includes(q));
  }, [query, monsters]);

  const renderOffering = (monster_id: string, offering_id: string) => {
    const offering: Offering = getOfferings(offering_id);
    const key = monster_id + '_' + offering_id;

    if (!offering) {
      return (
        <Button key={key} variant="link">
          {offering_id}
        </Button>
      );
    }

    return (
      <Button key={key} variant="link">
        <Link href={'/offering/' + offering.id}>{offering.name}</Link>
      </Button>
    );
  };

  return (
    <>
      <Input
        className="mb-4 flex"
        suppressHydrationWarning
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Monsters..."
      />

      <DataTable columns={columns} data={results} />
    </>
  );
}
