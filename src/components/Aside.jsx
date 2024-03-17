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
import { useState } from 'react';

const Aside = () => {
  const [selected, setSelected] = useState('dashboard');
  return (
    <aside className="flex flex-col mx-10 my-5 ">
      <img
        src="/ayy-kori-logo.png"
        width={125}
        height={50}
        className="mx-auto mb-10"
      />
      <div className="flex flex-col gap-5 text-xs font-bold">
        <div>
          <div className="mb-3">Menu</div>
          <ul className="flex flex-col gap-2 font-medium ">
            <li
              onClick={() => setSelected('dashboard')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                selected === 'dashboard' ? 'bg-primary text-white' : ''
              }`}
            >
              <MdDashboard
                className={`text-xl text-grey group-hover:text-white  ${
                  selected === 'dashboard' ? 'text-white' : ''
                }`}
              />
              <div>Dashboard</div>
            </li>
            <li
              onClick={() => setSelected('message')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                selected === 'message' ? 'bg-primary text-white' : ''
              }`}
            >
              <BiSolidEnvelope
                className={`text-xl text-grey group-hover:text-white  ${
                  selected === 'message' ? 'text-white' : ''
                }`}
              />
              <div>Message</div>
            </li>
            <li
              onClick={() => setSelected('calender')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                selected === 'calender' ? 'bg-primary text-white' : ''
              }`}
            >
              <FaCalendar
                className={`text-lg text-grey group-hover:text-white  ${
                  selected === 'calender' ? 'text-white' : ''
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
              onClick={() => setSelected('jobs')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                selected === 'jobs' ? 'bg-primary text-white' : ''
              }`}
            >
              <IoMdBriefcase
                className={`text-xl text-grey group-hover:text-white  ${
                  selected === 'jobs' ? 'text-white' : ''
                }`}
              />
              <div>Jobs</div>
            </li>
            <li
              onClick={() => setSelected('applications')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                selected === 'applications' ? 'bg-primary text-white' : ''
              }`}
            >
              <TbAppsFilled
                className={`text-xl text-grey group-hover:text-white  ${
                  selected === 'applications' ? 'text-white' : ''
                }`}
              />
              <div>Applications</div>
            </li>
            <li
              onClick={() => setSelected('career')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                selected === 'career' ? 'bg-primary text-white' : ''
              }`}
            >
              <PiTreeStructureFill
                className={`text-lg text-grey group-hover:text-white  ${
                  selected === 'career' ? 'text-white' : ''
                }`}
              />
              <div>Career Site</div>
            </li>
            <li
              onClick={() => setSelected('referrals')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                selected === 'referrals' ? 'bg-primary text-white' : ''
              }`}
            >
              <FaBookBookmark
                className={`text-lg text-grey group-hover:text-white  ${
                  selected === 'referrals' ? 'text-white' : ''
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
              onClick={() => setSelected('employee')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                selected === 'employee' ? 'bg-primary text-white' : ''
              }`}
            >
              <MdPerson
                className={`text-xl text-grey group-hover:text-white  ${
                  selected === 'employee' ? 'text-white' : ''
                }`}
              />
              <div>Employee</div>
            </li>
            <li
              onClick={() => setSelected('structure')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                selected === 'structure' ? 'bg-primary text-white' : ''
              }`}
            >
              <FaBoxes
                className={`text-xl text-grey group-hover:text-white  ${
                  selected === 'structure' ? 'text-white' : ''
                }`}
              />
              <div>Structure</div>
            </li>
            <li
              onClick={() => setSelected('report')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                selected === 'report' ? 'bg-primary text-white' : ''
              }`}
            >
              <BsPieChartFill
                className={`text-xl text-grey group-hover:text-white  ${
                  selected === 'report' ? 'text-white' : ''
                }`}
              />
              <div>Report</div>
            </li>
            <li
              onClick={() => setSelected('settings')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                selected === 'settings' ? 'bg-primary text-white' : ''
              }`}
            >
              <AiFillSetting
                className={`text-xl text-grey group-hover:text-white  ${
                  selected === 'settings' ? 'text-white' : ''
                }`}
              />
              <div>Settings</div>
            </li>
            <li
              onClick={() => setSelected('logOut')}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-primary hover:text-white group ${
                selected === 'logOut' ? 'bg-primary text-white' : ''
              }`}
            >
              <IoLogOut
                className={`text-xl text-grey group-hover:text-white  ${
                  selected === 'logOut' ? 'text-white' : ''
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

export default Aside;
