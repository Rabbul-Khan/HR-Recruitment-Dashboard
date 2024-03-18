import JobListItem from './JobListItem';

const RightAside = () => {
  return (
    <aside className="flex flex-col items-center ">
      <div className="flex flex-col items-center gap-5 my-20">
        <p className="text-xl font-semibold ">Welcome back XTZ</p>
        <button className="px-5 py-3 text-white rounded-md bg-primary">
          + Create New Job
        </button>
      </div>
      <div className="min-w-full p-5 ">
        <p className="pb-7">Recent Added Jobs</p>
        <ul className="flex flex-col gap-5">
          <JobListItem />
          <JobListItem />
          <JobListItem />
          <JobListItem />
          <JobListItem />
        </ul>
      </div>
    </aside>
  );
};

export default RightAside;
