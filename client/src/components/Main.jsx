import Statistic from './Statistic';
import AreaChartStatistic from './AreaChartStatistic';
import BarChartStatistic from './BarChartStatistic';
import GenderPieChart from './GenderPieChart';
import ApplicationsStatistics from './ApplicationsStatistics';
import { IoSearchOutline } from 'react-icons/io5';

const Main = ({ candidates }) => {
  const totalCandidates = candidates.length;

  const shortlistedCandidates = candidates.filter(
    (candidate) => candidate.application_status === 'shortlisted'
  ).length;

  const rejectedCandidates = candidates.filter(
    (candidate) => candidate.application_status === 'rejected'
  ).length;

  return (
    <main className="mx-10 grid grid-cols-3 grid-rows-[100px_150px_400px_400px] gap-10">
      <header className="flex items-center justify-between col-start-1 col-end-4 row-start-1 row-end-2 my-10">
        <p className="text-2xl font-semibold">Good Morning</p>
        <div className="flex">
          <input
            type="text"
            className="px-4 py-2 rounded-md bg-shade"
            placeholder="Search"
          />
          <div className="p-2 text-xl text-white rounded-md bg-primary">
            <IoSearchOutline />
          </div>
        </div>
      </header>
      <div className="grid grid-cols-3 col-start-1 col-end-4 row-start-2 row-end-3 gap-16">
        <Statistic
          typeOfCandidates="Total Candidates"
          noOfCandidates={totalCandidates}
          percentageIncrease="26"
          piePercentage="74"
          color="#11998E"
        />
        <Statistic
          typeOfCandidates="Shortlisted Candidates"
          noOfCandidates={shortlistedCandidates}
          percentageIncrease="45"
          piePercentage="64"
          color="#E78860"
        />
        <Statistic
          typeOfCandidates="Rejected Candidates"
          noOfCandidates={rejectedCandidates}
          percentageIncrease="04"
          piePercentage="35"
          color="#FF6A49"
        />
      </div>
      <div className="grid grid-cols-2 col-start-1 col-end-4 row-start-3 row-end-4">
        <BarChartStatistic />
        <ApplicationsStatistics candidates={candidates} />
      </div>
      <div className="grid grid-cols-2 col-start-1 col-end-4 row-start-4 row-end-5 ">
        <AreaChartStatistic candidates={candidates} />
        <GenderPieChart candidates={candidates} />
      </div>
    </main>
  );
};

export default Main;
