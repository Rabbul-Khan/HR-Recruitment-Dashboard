import { MdDashboard } from 'react-icons/md';
import { BiSolidEnvelope } from 'react-icons/bi';
import { FaCalendar } from 'react-icons/fa6';
import { IoMdBriefcase } from 'react-icons/io';
import { TbAppsFilled } from 'react-icons/tb';
import { PiTreeStructureFill } from 'react-icons/pi';
import { FaBookBookmark } from 'react-icons/fa6';
import { MdPerson } from 'react-icons/md';
import { FaBoxes } from 'react-icons/fa';
import { BsPieChartFill } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';
import { IoLogOut } from 'react-icons/io5';

const LeftAside = ({ setActiveTab, activeTab }) => {
  return (
    <aside className="flex flex-col mx-10 my-5 ">
      <img
        src="/ayy-kori-logo.png"
        width={125}
        height={50}
        className="mx-auto mb-10"
      />
      <div className="flex flex-col gap-5 text-sm font-bold">
        <div>
          <div className="mb-3">Menu</div>
          <ul className="flex flex-col gap-2 font-medium ">
            <li
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                activeTab === 'dashboard' ? 'bg-primary text-white' : ''
              }`}
            >
              <MdDashboard
                className={`text-xl text-grey group-hover:text-white  ${
                  activeTab === 'dashboard' ? 'text-white' : ''
                }`}
              />
              <div>Dashboard</div>
            </li>
            <li
              onClick={() => setActiveTab('applications')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                activeTab === 'applications' ? 'bg-primary text-white' : ''
              }`}
            >
              <TbAppsFilled
                className={`text-xl text-grey group-hover:text-white  ${
                  activeTab === 'applications' ? 'text-white' : ''
                }`}
              />
              <div>Applications</div>
            </li>
            <li
              onClick={() => setActiveTab('message')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                activeTab === 'message' ? 'bg-primary text-white' : ''
              }`}
            >
              <BiSolidEnvelope
                className={`text-xl text-grey group-hover:text-white  ${
                  activeTab === 'message' ? 'text-white' : ''
                }`}
              />
              <div>Message</div>
            </li>
            <li
              onClick={() => setActiveTab('calender')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                activeTab === 'calender' ? 'bg-primary text-white' : ''
              }`}
            >
              <FaCalendar
                className={`text-xl text-grey group-hover:text-white  ${
                  activeTab === 'calender' ? 'text-white' : ''
                }`}
              />
              <div>Calender</div>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-3">Recruitment</div>
          <ul className="flex flex-col gap-2 font-medium">
            <li
              onClick={() => setActiveTab('jobs')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                activeTab === 'jobs' ? 'bg-primary text-white' : ''
              }`}
            >
              <IoMdBriefcase
                className={`text-xl text-grey group-hover:text-white  ${
                  activeTab === 'jobs' ? 'text-white' : ''
                }`}
              />
              <div>Jobs</div>
            </li>

            <li
              onClick={() => setActiveTab('career')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                activeTab === 'career' ? 'bg-primary text-white' : ''
              }`}
            >
              <PiTreeStructureFill
                className={`text-lg text-grey group-hover:text-white  ${
                  activeTab === 'career' ? 'text-white' : ''
                }`}
              />
              <div>Career Site</div>
            </li>
            <li
              onClick={() => setActiveTab('referrals')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                activeTab === 'referrals' ? 'bg-primary text-white' : ''
              }`}
            >
              <FaBookBookmark
                className={`text-xl text-grey group-hover:text-white  ${
                  activeTab === 'referrals' ? 'text-white' : ''
                }`}
              />
              <div>My Referrals</div>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-3">Organization</div>
          <ul className="flex flex-col gap-2 font-medium">
            <li
              onClick={() => setActiveTab('employee')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                activeTab === 'employee' ? 'bg-primary text-white' : ''
              }`}
            >
              <MdPerson
                className={`text-xl text-grey group-hover:text-white  ${
                  activeTab === 'employee' ? 'text-white' : ''
                }`}
              />
              <div>Employee</div>
            </li>
            <li
              onClick={() => setActiveTab('structure')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                activeTab === 'structure' ? 'bg-primary text-white' : ''
              }`}
            >
              <FaBoxes
                className={`text-xl text-grey group-hover:text-white  ${
                  activeTab === 'structure' ? 'text-white' : ''
                }`}
              />
              <div>Structure</div>
            </li>
            <li
              onClick={() => setActiveTab('report')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                activeTab === 'report' ? 'bg-primary text-white' : ''
              }`}
            >
              <BsPieChartFill
                className={`text-xl text-grey group-hover:text-white  ${
                  activeTab === 'report' ? 'text-white' : ''
                }`}
              />
              <div>Report</div>
            </li>
            <li
              onClick={() => setActiveTab('settings')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                activeTab === 'settings' ? 'bg-primary text-white' : ''
              }`}
            >
              <AiFillSetting
                className={`text-xl text-grey group-hover:text-white  ${
                  activeTab === 'settings' ? 'text-white' : ''
                }`}
              />
              <div>Settings</div>
            </li>
            <li
              onClick={() => setActiveTab('logOut')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                activeTab === 'logOut' ? 'bg-primary text-white' : ''
              }`}
            >
              <IoLogOut
                className={`text-xl text-grey group-hover:text-white  ${
                  activeTab === 'logOut' ? 'text-white' : ''
                }`}
              />
              <div>Log Out</div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default LeftAside;
