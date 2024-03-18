import React from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

import ToggleSwitch from './ToggleSwitch';
import SectionHeader from './SectionHeader';

const data = [
  {
    name: 'Mon',
    applications: 15,
    shortlisted: 40,
    rejected: 40,
    onHold: 0,
  },
  {
    name: 'Tue',
    applications: 30,
    shortlisted: 20,
    rejected: 30,
    onHold: 0,
  },
  {
    name: 'Wed',
    applications: 35,
    shortlisted: 20,
    rejected: 35,
    onHold: 0,
  },
  {
    name: 'Thu',
    applications: 25,
    shortlisted: 30,
    rejected: 35,
    onHold: 5,
  },
  {
    name: 'Fri',
    applications: 40,
    shortlisted: 30,
    rejected: 5,
    onHold: 0,
  },
  {
    name: 'Sat',
    applications: 20,
    shortlisted: 40,
    rejected: 20,
    onHold: 0,
  },
  {
    name: 'Sun',
    applications: 30,
    shortlisted: 40,
    rejected: 20,
    onHold: 0,
  },
];

const BarChartStatistic = () => {
  return (
    <div className="flex flex-col gap-5 py-10 max-w-[500px]">
      <SectionHeader sectionHeaderTitle="Statistics of Active Applications" />

      <ResponsiveContainer aspect={550 / 300}>
        <BarChart data={data} stackOffset="sign">
          <CartesianGrid strokeDasharray="6 6" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis unit="%" tickCount={6} axisLine={false} tickLine={false} />
          <Bar dataKey="onHold" fill="#7B7B7B" stackId="stack" barSize={5} />
          <Bar dataKey="rejected" fill="#FF6A49" stackId="stack" />
          <Bar dataKey="shortlisted" fill="#E78860" stackId="stack" />
          <Bar dataKey="applications" fill="#11998E" stackId="stack" />
        </BarChart>
      </ResponsiveContainer>

      <div className="flex justify-between gap-5">
        <ToggleSwitch
          activeColor="primary"
          inactiveColor="inactive"
          label="Applications"
        />
        <ToggleSwitch
          activeColor="yellow"
          inactiveColor="inactive"
          label="Shortlisted"
        />
        <ToggleSwitch
          activeColor="red"
          inactiveColor="inactive"
          label="Rejected"
        />
        <ToggleSwitch
          activeColor="grey"
          inactiveColor="inactive"
          label="On Hold"
        />
      </div>
    </div>
  );
};

export default BarChartStatistic;
