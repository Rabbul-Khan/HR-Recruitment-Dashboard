import Dropdown from './Dropdown';

const SectionHeader = ({ sectionHeaderTitle }) => {
  return (
    <div className="flex justify-between">
      <h3 className="font-bold ">{sectionHeaderTitle}</h3>
      <Dropdown />
    </div>
  );
};

export default SectionHeader;
