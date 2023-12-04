import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './Components/DashboardPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
