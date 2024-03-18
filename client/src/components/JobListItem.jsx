import React from 'react';

const JobListItem = () => {
  return (
    <li className="flex min-w-full gap-5 p-3 rounded-md bg-shade">
      <div className="p-3 text-lg font-semibold text-white rounded-md bg-primary">
        54
      </div>
      <div>
        <p className="text-lg font-medium ">Product Designer</p>
        <p className="text-sm font-light ">Total Application</p>
      </div>
    </li>
  );
};

export default JobListItem;
