// import Statistic from './components/Statistic';
// import AreaChartStatistic from './components/AreaChartStatistic';
// import BarChartStatistic from './components/BarChartStatistic';

import Statistic from './Statistic';
import AreaChartStatistic from './AreaChartStatistic';
import BarChartStatistic from './BarChartStatistic';
import { IoSearchOutline } from 'react-icons/io5';

const Main = () => {
  return (
    <main className="mx-10">
      <header className="flex items-center justify-between my-10">
        <p className="text-lg font-semibold">Good Morning</p>
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
      <div className="flex justify-between">
        <Statistic
          typeOfCandidates="Total Candidates"
          noOfCandidates="201"
          percentageIncrease="26"
          piePercentage="74"
          color="#11998E"
        />
        <Statistic
          typeOfCandidates="Shortlisted Candidates"
          noOfCandidates="361"
          percentageIncrease="45"
          piePercentage="74"
          color="#E78860"
        />
        <Statistic
          typeOfCandidates="Rejected Candidates"
          noOfCandidates="160"
          percentageIncrease="04"
          piePercentage="74"
          color="#FF6A49"
        />
      </div>
      <BarChartStatistic />
      <AreaChartStatistic />
    </main>
  );
};

export default Main;
