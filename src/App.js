import logo from './logo.svg';
import './App.css';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Register from './pages/About/About';
import Login from './pages/Shared/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Contact from './pages/Contact/Contact/Contact';
import AuthProvider from './context/AuthProvider';
import DoctorDetail from './pages/Home/DoctorDetail/DoctorDetail';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Appointment from './pages/Appointment/Appointment';
import Footer from './pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path="/doctor/:doctorId">
              <DoctorDetail></DoctorDetail>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
