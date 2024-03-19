import { GoPersonFill } from 'react-icons/go';

const ApplicationsTable = ({ filteredCandidates, selectedJob }) => {
  return (
    <ul className="flex flex-col gap-10">
      {filteredCandidates.map((candidate) => {
        if (candidate.role === selectedJob) {
          return (
            <li
              key={candidate.id}
              className="flex items-center justify-between min-w-full p-5 bg-white rounded-md cursor-pointer hover:bg-shade group"
            >
              <div className="flex items-center gap-5 ">
                <GoPersonFill className="p-2 text-5xl rounded-full text-shade bg-primary" />
                <div>
                  <div className="text-lg font-semibold">{candidate.name}</div>
                  <div className="text-sm font-medium text-grey">
                    {candidate.experience} year exp. | Expected{' '}
                    {candidate.expected_salary}
                  </div>
                </div>
              </div>

              <div className="font-medium capitalize text-primary group-hover:text-black ">
                {candidate.application_status}
              </div>
              <div className="font-medium ">
                {candidate.date_applied.slice(0, 10)}
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default ApplicationsTable;
