import { BsArrowUpRightCircle } from 'react-icons/bs';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { GoArrowUpRight } from 'react-icons/go';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Statistic = ({
  typeOfCandidates,
  noOfCandidates,
  percentageIncrease,
  piePercentage,
  color,
}) => {
  const colorClassName = `text-[${color}]`;
  console.log(colorClassName);

  return (
    <div>
      <BiDotsHorizontalRounded className="ml-auto text-2xl text-grey" />
      <div className="flex items-center justify-between gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-lg font-medium">{typeOfCandidates}</p>
          <p className="text-xl font-bold ">{noOfCandidates}</p>
          <div className="flex gap-2">
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-background">
              <GoArrowUpRight className={`text-xs text-[${color}]`} />
            </div>
            <p className={`text-xs font-medium text-[${color}]`}>
              +{percentageIncrease}% Inc
            </p>
          </div>
        </div>
        <div style={{ width: '75px', height: '75px' }}>
          <CircularProgressbar
            value={piePercentage}
            text={`+${piePercentage}%`}
            strokeWidth={8}
            styles={buildStyles({
              textSize: '1.15rem',
              pathColor: color,
              textColor: color,
              trailColor: '#E0EDEA',
              //backgroundColor: '#3e98c7',
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default Statistic;
