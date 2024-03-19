const JobListItem = ({ roleCount, title }) => {
  return (
    <li className="flex min-w-full gap-5 p-3 rounded-md bg-shade">
      <div className="p-3 text-lg font-semibold text-white rounded-md bg-primary">
        {roleCount}
      </div>
      <div>
        <p className="text-lg font-medium ">{title}</p>
        <p className="text-sm font-light ">Total Application</p>
      </div>
    </li>
  );
};

export default JobListItem;
