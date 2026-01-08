'use client';

import LineCharts from '@/components/commons/line-charts';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { createClient } from '@/lib/supabase/client';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [dateRange, setDateRange] = useState<string>('');
  const supabase = createClient();
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 6);
  lastWeek.setHours(0, 0, 0, 0);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('id-ID', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      timeZone: 'Asia/Jakarta',
    });

    setDateRange(
      `Showing orders from ${formatter.format(lastWeek)} to ${formatter.format(
        new Date()
      )}`
    );
  }, []);

  const { data: orders } = useQuery({
    queryKey: ['orders-per-day'],
    queryFn: async () => {
      const { data } = await supabase
        .from('orders')
        .select('created_at')
        .gte('created_at', lastWeek.toISOString())
        .order('created_at', { ascending: true });

      const counts: Record<string, number> = {};

      (data ?? []).forEach((order) => {
        const formatter = new Intl.DateTimeFormat('id-ID', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          timeZone: 'Asia/Jakarta',
        });

        const date = formatter.format(new Date(order.created_at));
        counts[date] = (counts[date] || 0) + 1;
      });

      return Object.entries(counts).map(([name, total]) => ({ name, total }));
    },
  });
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row mb-4 gap-2 justify-between w-full">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Order Create Per Week</CardTitle>
          <CardDescription>{dateRange}</CardDescription>
        </CardHeader>
        <div className="w-full h-64 p-6">
          <LineCharts data={orders} />
        </div>
      </Card>
    </div>
  );
}
