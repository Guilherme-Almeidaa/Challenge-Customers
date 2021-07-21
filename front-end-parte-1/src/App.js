import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageBegin from './pages/PageBegin';
import PageRegisterCustomer from './pages/PageRegisterCustomer';
import Provider from './Provider/Provider';
import PageViewCustomer from './pages/PageViewCustomer';
import PageEditCustomer from './pages/PageEditCustomer';
import PageLogin from './pages/PageLogin';
import PageUserRegister from './pages/PageUserRegister';
import ProtectedRoute from './services/ProtectedRoute';
import CheckLogged from './services/CheckLogged';

function App() {
  return (
    <Provider>
      <BrowserRouter >
        <Switch>
          <CheckLogged>
            <Route exact path="/" component={PageLogin} />
          </CheckLogged>
          <Route path="/user/register" component={PageUserRegister} />
          <ProtectedRoute>
            <Route path="/customers" component={PageBegin} />
            <Route path="/register" component={PageRegisterCustomer} />
            <Route path="/customer/edit/:id" render={(props) => <PageEditCustomer {...props} />} />
            <Route path="/customer/:id" render={(props) => <PageViewCustomer {...props} />} />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
