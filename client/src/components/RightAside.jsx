import JobListItem from './JobListItem';

const RightAside = ({ candidates }) => {
  function countRoles(data) {
    const roleCounts = {};

    // Count occurrences of each role
    data.forEach((obj) => {
      const role = obj.role;
      if (roleCounts[role]) {
        roleCounts[role]++;
      } else {
        roleCounts[role] = 1;
      }
    });

    return roleCounts;
  }

  const roleCounts = countRoles(candidates);

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
          <JobListItem
            roleCount={roleCounts['Product Designer']}
            title="Product Designer"
          />
          <JobListItem
            roleCount={roleCounts['Brand Strategist']}
            title="Brand Strategist"
          />
          <JobListItem
            roleCount={roleCounts['Jr UI/UX Designer']}
            title="Jr UI/UX Designer"
          />
        </ul>
      </div>
    </aside>
  );
};

export default RightAside;
