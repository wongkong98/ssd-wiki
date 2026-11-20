'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { type DataTableFeatures } from '@/components/data-table/data-table-features';
import { Archfiend } from '@/types/monster';
import { Ailment } from '@/types/element';

const columnHelper = createColumnHelper<DataTableFeatures, Archfiend>();

export const columns = columnHelper.columns([
  columnHelper.accessor('name', {
    header: 'Name',
  }),
  columnHelper.accessor('element', {
    header: 'Element',
    cell: ({ row }) => {
      const elements: Element[] = row.getValue('element');

      return elements.map((ele, idx) =>
        idx !== elements.length - 1 ? ele + ', ' : ele
      );
    },
  }),
  columnHelper.accessor('ailment', {
    header: 'Ailment',
    cell: ({ row }) => {
      const ailments: Ailment[] = row.getValue('ailment');

      return ailments.map((ele, idx) =>
        idx !== ailments.length - 1 ? ele + ', ' : ele
      );
    },
  }),
  columnHelper.accessor('weakness', {
    header: 'Weakness',
    cell: ({ row }) => {
      const weaknesses: Element[] = row.getValue('weakness');

      return weaknesses.map((ele, idx) =>
        idx !== weaknesses.length - 1 ? ele + ', ' : ele
      );
    },
  }),
  columnHelper.accessor('breakablePart', {
    header: 'Breakable Parts',
    cell: ({ row }) => {
      const parts: string[] = row.getValue('breakablePart');

      return parts.map((ele, idx) =>
        idx !== parts.length - 1 ? ele + ', ' : ele
      );
    },
  }),
  columnHelper.accessor('breakReward', {
    header: 'Break Reward',
    cell: ({ row }) => {
      const rewards: string[] = row.getValue('breakReward');

      return rewards.map((offering_id, idx) =>
        idx !== rewards.length - 1 ? offering_id + ', ' : offering_id
      );
    },
  }),
]);
