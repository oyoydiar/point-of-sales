import {
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  Tooltip,
  XAxis,
} from 'recharts';

function formatDateID(value: string) {
  const date = new Date(value);

  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'Asia/Jakarta',
  }).format(date);
}

export default function LineCharts({
  data,
}: {
  data: { name: string; total: number }[] | undefined;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Tooltip
          formatter={(value) => value}
          labelFormatter={(label) => formatDateID(label as string)}
          wrapperClassName="!bg-white z-20 dark:!bg-neutral-900 rounded-md"
        />

        <Legend />

        <Line
          type="monotone"
          dataKey="total"
          stroke="#00bba7"
          strokeWidth={2}
        />

        <XAxis dataKey="name" tickFormatter={(value) => formatDateID(value)} />
      </LineChart>
    </ResponsiveContainer>
  );
}
