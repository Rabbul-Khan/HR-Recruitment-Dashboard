import { useEffect, useState } from 'react';
import axios from 'axios';

import LeftAside from './components/LeftAside';
import Main from './components/Main';
import RightAside from './components/RightAside';

import './index.css';
import ApplicationsPage from './components/ApplicationsPage';
import ComingSoonPage from './components/ComingSoonPage';

const baseUrl = '/api/candidates';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [candidates, setCandidates] = useState([]);
  const [selectedJob, setSelectedJob] = useState('Jr UI/UX Designer');

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setCandidates(response.data);
    });
  }, []);

  return (
    <div
      className={`grid grid-cols-[2fr_10fr] min-h-screen font-barlow ${
        activeTab === 'applications' ? 'bg-background' : ''
      }`}
    >
      <LeftAside setActiveTab={setActiveTab} activeTab={activeTab} />

      {activeTab === 'dashboard' && (
        <div className="grid grid-cols-[8fr_2fr]">
          <Main candidates={candidates} />
          <RightAside />
        </div>
      )}

      {activeTab === 'applications' && (
        <ApplicationsPage
          candidates={candidates}
          selectedJob={selectedJob}
          setSelectedJob={setSelectedJob}
        />
      )}

      {activeTab !== 'dashboard' && activeTab !== 'applications' && (
        <ComingSoonPage />
      )}
    </div>
  );
}

export default App;
