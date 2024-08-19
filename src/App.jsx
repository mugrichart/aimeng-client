import './App.css';
import Home from './pages/home/Home';
import Header from './pages/header/Header';

import ProtectedRoute from './ProtectedRoute';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard';
import Info from './pages/info/Info';
import Plants from './pages/plants/Plants';

function App() {
  localStorage.setItem('token', 'just for now')

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='*' element={<Home />} />
          <Route path="work-space/*" element={<ProtectedRoute element={Workspace} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

const Workspace = () => {
  return (
    <div className='work-space'>
    <Header />
    <main>
      <Routes>
        <Route path='' element={ <Dashboard /> } />
        <Route path='info' element={ <Info /> } />
        <Route path='record' element={ <Dashboard /> } />
        <Route path='plants' element={ <Plants /> } />
      </Routes>
    </main>
  </div>
  )
}
