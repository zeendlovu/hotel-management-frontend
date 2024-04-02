import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className='appContainer'>
      <Sidebar />
      <div className='navbar'>
        <Navbar />
      </div>
      
    </div>
    
  );
}

export default App;
