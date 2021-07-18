import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import PageBegin from './pages/PageBegin';
import PageRegisterCustomer from './pages/PageRegisterCustomer';
import Provider from './Provider/Provider';
import PageViewCustomer from './pages/PageViewCustomer';
import PageEditCustomer from './pages/PageEditCustomer';

function App() {
  return (
    <Provider>
      <BrowserRouter >
        <Header />
        <Switch>
          <Route exact path="/" component={PageBegin} />
          <Route path="/register" component={PageRegisterCustomer} />
          <Route path="/customer/edit/:id" render={(props) => <PageEditCustomer {...props} />} />
          <Route path="/customer/:id" render={(props) => <PageViewCustomer {...props} />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
