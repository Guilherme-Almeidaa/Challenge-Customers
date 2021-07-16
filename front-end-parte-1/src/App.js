import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import PageBegin from './pages/PageBegin';

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Switch>
        <Route exact path="/" component={PageBegin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
