import ApplicationsTable from './ApplicationsTable';
import JobsDropdown from './JobsDropdown';
import { useState } from 'react';

const ApplicationsPage = ({ candidates, selectedJob, setSelectedJob }) => {
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);
  const [status, setStatus] = useState('all');

  const filterCandidates = (status) => {
    if (status === 'all') {
      setFilteredCandidates(candidates);
    } else {
      setStatus(status);
      setFilteredCandidates(
        candidates.filter(
          (candidate) =>
            candidate.application_status === status &&
            candidate.role === selectedJob
        )
      );
    }
  };
  return (
    <div className="flex flex-col gap-3 px-10 py-5 ">
      <h1 className="text-xl font-semibold ">Application</h1>
      <h2 className="text-sm font-medium ">Ongoing Recruitment</h2>
      <JobsDropdown
        candidates={candidates}
        selectedJob={selectedJob}
        setSelectedJob={setSelectedJob}
      />
      <div className="flex justify-between p-5 bg-white rounded-md ">
        <p
          className={`cursor-pointer font-semibold  ${
            status === 'all' ? 'border-b-2  border-primary' : ''
          }`}
          onClick={() => filterCandidates('all')}
        >
          All
        </p>

        <p
          className={`cursor-pointer font-semibold  ${
            status === 'shortlisted' ? 'border-b-2  border-primary' : ''
          }`}
          onClick={() => filterCandidates('shortlisted')}
        >
          Shortlisted
        </p>
        <p
          className={`cursor-pointer font-semibold  ${
            status === 'finalised' ? 'border-b-2  border-primary' : ''
          }`}
          onClick={() => filterCandidates('finalised')}
        >
          Finalised
        </p>
        <p
          className={`cursor-pointer font-semibold  ${
            status === 'on hold' ? 'border-b-2  border-primary' : ''
          }`}
          onClick={() => filterCandidates('on hold')}
        >
          On Hold
        </p>
        <p
          className={`cursor-pointer font-semibold  ${
            status === 'rejected' ? 'border-b-2  border-primary' : ''
          }`}
          onClick={() => filterCandidates('rejected')}
        >
          Rejected
        </p>
      </div>
      <ApplicationsTable
        filteredCandidates={filteredCandidates}
        selectedJob={selectedJob}
      />
    </div>
  );
};

export default ApplicationsPage;
