import { useEffect, useState } from 'react';

import LeftAside from './components/LeftAside';
import Main from './components/Main';
import RightAside from './components/RightAside';

import './index.css';
import axios from 'axios';

function App() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/candidates').then((response) => { 
      setCandidates(response.data);
    });
  }, []);
  

  return (
    <div className="grid grid-cols-[2fr_9fr_3fr] min-h-screen font-barlow">
      <LeftAside />
      <Main />
      <RightAside />
    </div>
    // <div className="grid grid-cols-[2fr_10fr] bg-background min-h-screen font-barlow">
    //   <LeftAside />
    //   <div className="px-10 py-5">
    //     <h1 className="text-xl font-semibold ">Application</h1>
    //     <h2 className="text-sm font-medium ">Ongoing Recruitment</h2>
    //   </div>
    // </div>
  );
}

export default App;
