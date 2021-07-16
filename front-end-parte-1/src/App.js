import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import PageBegin from './pages/PageBegin';
import PageRegisterCustomer from './pages/PageRegisterCustomer';
import Provider from './Provider/Provider';

function App() {
  return (
    <Provider>
      <BrowserRouter >
        <Header />
        <Switch>
          <Route exact path="/" component={PageBegin} />
          <Route path="/register" component={PageRegisterCustomer} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
