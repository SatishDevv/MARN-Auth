import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
export default function App() {
  return (
    <BrowserRouter>
    {/* Headers componentes is comman for all pages that why we adding Outside the routes and inside the BrowserRoutes  */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='/sign-in' element={<SignIn />} /> 
        <Route path='/sign-Up' element={<SignUp />} /> 
        <Route path='/profile' element={<Profile />} /> 
      </Routes>
    </BrowserRouter>
    
  );
}
