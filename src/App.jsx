import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Firstpage from './Pages/FirstPage';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-wrapper min-h-screen bg-black text-white">
        <Navbar />
        <main className="w-full relative">
          <Routes>
            <Route path="/" element={<Firstpage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Firstpage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
