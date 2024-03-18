import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import SectionHeader from './SectionHeader';

const AreaChartStatistic = () => {
  return (
    <div className="max-w-[500px]">
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
            stroke="#8884d8"
            fill="#8884d8"
            strokeWidth={2}
            activeDot={{ stroke: 'white', strokeWidth: 1.5, r: 7 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartStatistic;

const data = [
  {
    name: '8PM',
    applicationsReceived: 20,
  },
  {
    name: '10PM',
    applicationsReceived: 40,
  },
  {
    name: '12AM',
    applicationsReceived: 30,
  },
  {
    name: '2AM',
    applicationsReceived: 50,
  },
  {
    name: '4AM',
    applicationsReceived: 90,
  },
  {
    name: '6AM',
    applicationsReceived: 10,
  },
  {
    name: '8AM',
    applicationsReceived: 50,
  },
];
