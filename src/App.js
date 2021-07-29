import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './loader.gif';
import PrivateRoute from './components/login/PrivateRoute';
import AdminRoute from './components/login/AdminRoute';
import './App.css';

const Login = lazy(() => import('./components/login/Login'));
const Home = lazy(() => import('./components/home/Home'));

//Application
const Type = lazy(() => import('./components/type/Type'));
const Ets = lazy(() => import('./components/ets/Ets'));
const Menu = lazy(() => import('./components/menu/Menu'));
const Order = lazy(() => import('./components/order/Order'));
const Meal = lazy(() => import('./components/meal/Meal'));

//LAnding page
const Why = lazy(() => import('./components/why/Why'));
const Features = lazy(() => import('./components/features/Features'));
const ContactUs = lazy(() => import('./components/contactUs/ContactUs'));
const AppScreen = lazy(() => import('./components/appScreen/AppScreen'));
const Download = lazy(() => import('./components/download/Download'));
const Banner = lazy(() => import('./components/banner/Banner'));
const Users = lazy(() => import('./components/users/Users'));
const Setting = lazy(() => import('./components/setting/Setting'));
const NoMatch = lazy(() => import('./components/noMatch/NoMatch'));

function App() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img alt='Loader' src={Loader} />
        </div>
      }
    >
      <Router>
        <Switch>
          <PrivateRoute path='/' exact component={Home} />
          <PrivateRoute path='/type' exact component={Type} />
          <PrivateRoute path='/ets' exact component={Ets} />
          <PrivateRoute path='/menu' exact component={Menu} />
          <PrivateRoute path='/meal' exact component={Meal} />
          <PrivateRoute path='/order' exact component={Order} />
          <PrivateRoute path='/why-choose-us' exact component={Why} />
          <PrivateRoute path='/banner' exact component={Banner} />
          <PrivateRoute path='/features' exact component={Features} />
          <PrivateRoute path='/contact-us' exact component={ContactUs} />
          <PrivateRoute path='/download' exact component={Download} />
          <PrivateRoute path='/app-screen' exact component={AppScreen} />
          {/* <AdminRoute path='/users' exact component={Users} /> */}
          <PrivateRoute path='/setting' exact component={Setting} />
          <Route path='/login' exact component={Login} />
          <Route path='*' exact component={NoMatch} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
