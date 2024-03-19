import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import SectionHeader from './SectionHeader';

const AreaChartStatistic = ({ candidates }) => {
  return (
    <div className="">
      <SectionHeader sectionHeaderTitle="Applications Received Time" />

      <ResponsiveContainer aspect={550 / 300}>
        <AreaChart data={data}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            padding={{ top: 20, bottom: 20 }}
            unit="%"
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="applicationsReceived"
            stroke="#11998E"
            fill="#B9F2E5"
            strokeWidth={2}
            activeDot={{ stroke: 'white', strokeWidth: 1.5, r: 7 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartStatistic;

// Sample data. Can be fetched from the database and transformed into the following format.
const data = [
  {
    name: '8PM',
    applicationsReceived: 2,
  },
  {
    name: '10PM',
    applicationsReceived: 4,
  },
  {
    name: '12AM',
    applicationsReceived: 3,
  },
  {
    name: '2AM',
    applicationsReceived: 5,
  },
  {
    name: '4AM',
    applicationsReceived: 9,
  },
  {
    name: '6AM',
    applicationsReceived: 1,
  },
  {
    name: '8AM',
    applicationsReceived: 5,
  },
];
