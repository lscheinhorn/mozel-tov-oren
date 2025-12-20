import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Red from './Red/Red';
import Bull from './Bull/Bull';
import Gives from './Gives/Gives';
import You from './You/You';
import Wings from './Wings/Wings';
import Gift from './Gift/Gift';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Red" element={<Red />} />
          <Route path="/Bull" element={<Bull />} />
          <Route path="/Gives" element={<Gives />} />
          <Route path="/You" element={<You />} />
          <Route path="/Wings" element={<Wings />} />
          <Route path="/Gift" element={<Gift />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
