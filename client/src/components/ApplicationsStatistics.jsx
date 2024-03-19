import React from 'react';
import SectionHeader from './SectionHeader';
import { FaCircle } from 'react-icons/fa6';
import ProgressBar from './ProgressBar';

const ApplicationsStatistics = ({ candidates }) => {
  function calculateStatusPercentage(data) {
    const statusCounts = {};

    // Count occurrences of each status
    data.forEach((obj) => {
      if (statusCounts[obj.application_status]) {
        statusCounts[obj.application_status]++;
      } else {
        statusCounts[obj.application_status] = 1;
      }
    });

    // Calculate percentage for each status
    const totalCount = data.length;
    const statusPercentages = {};
    for (const status in statusCounts) {
      const count = statusCounts[status];
      const percentage = (count / totalCount) * 100;
      statusPercentages[status] = percentage;
    }
    return statusPercentages;
  }
  const percentage = calculateStatusPercentage(candidates);
  console.log(percentage);

  return (
    <div className="flex flex-col gap-5 ">
      <SectionHeader sectionHeaderTitle="Accquisitions" />
      <div className="grid grid-cols-[1fr_3fr] grid-rows-5 gap-8">
        <div className="flex items-center gap-3">
          <FaCircle className="text-primary" />
          Applications
        </div>
        <ProgressBar progress={percentage.shortlisted} bgColor="#11998E" />
        <div className="flex items-center gap-3 ">
          <FaCircle className="text-linear-yellow" />
          Shortlisted
        </div>
        <ProgressBar progress={percentage.shortlisted} bgColor="#E7B860" />

        <div className="flex items-center gap-3">
          <FaCircle className="text-linear-red" />
          Rejected
        </div>
        <ProgressBar progress={percentage.rejected} bgColor="#FF6A49" />
        <div className="flex items-center gap-3">
          <FaCircle className="text-grey" />
          <span className="min-w-max ">On Hold</span>
        </div>
        <ProgressBar progress={percentage['on hold']} bgColor="#7B7B7B" />
        <div className="flex items-center gap-3">
          <FaCircle className="text-shade" />
          Finalised
        </div>
        <ProgressBar progress={percentage.finalised} bgColor="#B9F2E5" />
      </div>
    </div>
  );
};

export default ApplicationsStatistics;
