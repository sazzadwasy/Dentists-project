import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Home/Login/Login';
import Register from './Pages/Home/Register/Register';
import About from './Pages/About/About';
import TreatmentDetail from './Pages/TreatmentDetail/TreatmentDetail';
import RequireAuth from './Pages/Home/Login/RequireAuth/RequireAuth';
import CheckOut from './Pages/CheckOut/CheckOut';
import Blogs from './Pages/Blogs/Blogs';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/treatment/:treatmentId' element={<TreatmentDetail></TreatmentDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
