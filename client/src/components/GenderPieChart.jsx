import { FaCircle } from 'react-icons/fa6';
import { PieChart } from 'react-minimal-pie-chart';

const GenderPieChart = ({ candidates }) => {
  // Function to count the number of males and females.
  function countGenders(objects) {
    let maleCount = 0;
    let femaleCount = 0;

    objects.forEach((obj) => {
      if (obj.gender === 'male') {
        maleCount++;
      } else if (obj.gender === 'female') {
        femaleCount++;
      }
    });

    return { male: maleCount, female: femaleCount };
  }

  const data = countGenders(candidates);

  return (
    <section className="flex flex-col max-h-[400px] items-center ">
      <h3 className="font-bold ">Candidates by Gender</h3>

      <PieChart
        lineWidth={20}
        radius={20}
        rounded
        data={[
          {
            title: 'Male',
            value: data.male,
            color: '#11998E',
          },
          { title: 'Female', value: data.female, color: '#E7B860' },
        ]}
      />

      <div className="flex gap-8">
        <div className="flex items-center gap-3">
          <FaCircle className="text-primary" />
          Male
        </div>
        <div className="flex items-center gap-3">
          <FaCircle className="text-linear-yellow" />
          Female
        </div>
      </div>
    </section>
  );
};

export default GenderPieChart;
